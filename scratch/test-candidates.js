const https = require('https');

const candidates = [
  'service_default',
  'service_gmail',
  'service_cmkca',
  'service_cmk',
  'service_malli',
  'service_contact',
  'gmail'
];

async function checkService(serviceId) {
  return new Promise((resolve) => {
    const payload = JSON.stringify({
      service_id: serviceId,
      template_id: 'template_88rjdx2',
      user_id: 'RQGF5QHNWb7vdYrW5',
      template_params: {
        from_name: "Test",
        from_email: "test@cmkca.com",
        message: "Test"
      }
    });

    const req = https.request({
      hostname: 'api.emailjs.com',
      port: 443,
      path: '/api/v1.0/email/send',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload),
        'Origin': 'https://www.cmkca.com'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ serviceId, status: res.statusCode, data }));
    });

    req.on('error', (e) => resolve({ serviceId, status: 500, data: e.message }));
    req.write(payload);
    req.end();
  });
}

async function run() {
  for (const s of candidates) {
    const res = await checkService(s);
    console.log(`Tested '${s}': Status ${res.status} -> ${res.data}`);
  }
}

run();

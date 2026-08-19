const https = require('https');
const fs = require('fs');

// Read .env.local
const envContent = fs.readFileSync('.env.local', 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^\s*([\w_]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    env[match[1]] = match[2].trim();
  }
});

console.log("Configured EmailJS Credentials:");
console.log("SERVICE_ID :", env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
console.log("TEMPLATE_ID:", env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
console.log("PUBLIC_KEY :", env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

const payload = JSON.stringify({
  service_id: env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  template_id: env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  user_id: env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  template_params: {
    from_name: "Test Verification User",
    from_email: "test@cmkca.com",
    phone: "+91 7032163646",
    service: "Audit & Assurance",
    message: "Test inquiry to verify EmailJS integration",
    title: "Verification Test"
  }
});

const options = {
  hostname: 'api.emailjs.com',
  port: 443,
  path: '/api/v1.0/email/send',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payload),
    'Origin': 'https://www.cmkca.com'
  }
};

console.log("\nSending test request to EmailJS API...");

const req = https.request(options, (res) => {
  let responseData = '';

  res.on('data', (chunk) => {
    responseData += chunk;
  });

  res.on('end', () => {
    console.log(`\nResponse Status Code: ${res.statusCode} ${res.statusMessage}`);
    console.log(`Response Body: ${responseData}`);
    if (res.statusCode === 200) {
      console.log("\n✅ SUCCESS: EmailJS API is connected, verified, and functioning properly!");
    } else {
      console.log("\n⚠️ NOTICE: EmailJS API returned non-200 status code.");
    }
  });
});

req.on('error', (e) => {
  console.error(`\n❌ Network Error: ${e.message}`);
});

req.write(payload);
req.end();

const https = require('https');
const fs = require('fs');

const envContent = fs.readFileSync('.env.local', 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^\s*([\w_]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    env[match[1]] = match[2].trim();
  }
});

console.log("=== Testing Form Submission with krishnanord@gmail.com ===");
console.log("Using credentials from .env.local:");
console.log("  Service ID :", env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
console.log("  Template ID:", env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
console.log("  Public Key :", env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

const testPayload = {
  service_id: env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  template_id: env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  user_id: env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  template_params: {
    from_name: "Krishna Nord",
    name: "Krishna Nord",
    user_name: "Krishna Nord",
    to_name: "Krishna Nord",
    from_email: "krishnanord@gmail.com",
    email: "krishnanord@gmail.com",
    user_email: "krishnanord@gmail.com",
    reply_to: "krishnanord@gmail.com",
    to_email: "krishnanord@gmail.com",
    phone: "+91 7032 163 646",
    service: "Audit & Assurance",
    subject: "Audit & Assurance",
    message: "Auto-reply and quote request verification test.",
    title: "New Quote Request from Krishna"
  }
};

const payloadString = JSON.stringify(testPayload);

const options = {
  hostname: 'api.emailjs.com',
  port: 443,
  path: '/api/v1.0/email/send',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payloadString),
    'Origin': 'https://www.cmkca.com'
  }
};

const req = https.request(options, (res) => {
  let responseData = '';
  res.on('data', (chunk) => responseData += chunk);
  res.on('end', () => {
    console.log(`\nEmailJS Response Status: ${res.statusCode} ${res.statusMessage}`);
    console.log(`EmailJS Response Body  : ${responseData}`);
    if (res.statusCode === 200) {
      console.log("\n✅ Email successfully sent to EmailJS, auto-reply triggered for krishnanord@gmail.com!");
    } else {
      console.log(`\n❌ EmailJS rejected request with code ${res.statusCode}: ${responseData}`);
    }
  });
});

req.on('error', (e) => console.error("Network error:", e.message));
req.write(payloadString);
req.end();

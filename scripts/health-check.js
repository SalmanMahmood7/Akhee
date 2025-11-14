const http = require('http');

const options = {
  hostname'localhost',
  port3001,
  path'/',
  method'GET',
  timeout5000
};

const req = http.request(options, (res) => {
  if (res.statusCode >= 200 && res.statusCode < 400) {
    console.log(`✓ Server is responding (Status${res.statusCode})`);
    process.exit(0);
  } else {
    console.log(`⚠ Server returned status${res.statusCode}`);
    process.exit(1);
  }
});

req.on('error', (error) => {
  console.log('✗ Server not responding');
  console.log(`  Error${error.message}`);
  process.exit(1);
});

req.on('timeout', () => {
  console.log('✗ Server request timeout');
  req.destroy();
  process.exit(1);
});

req.end();
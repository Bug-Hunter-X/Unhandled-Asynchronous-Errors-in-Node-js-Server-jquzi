const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  }).catch(error => {
    // Here's the problem: We don't handle errors properly
    console.error('Error:', error);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a random failure
    const shouldFail = Math.random() < 0.5;
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Simulated asynchronous operation failed'));
      } else {
        resolve();
      }
    }, 1000);
  });
}
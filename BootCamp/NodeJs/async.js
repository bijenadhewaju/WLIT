const fs = require('fs');

const data = 'This is an asynchronous write.';

fs.writeFile('async.txt', data, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('Data written asynchronously.');
});

const fs = require('fs'); // pull in the file system module

// read the files based onm the directory and the URL
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const page3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

// load a success (200) for the first page
const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

// load a success (200) for the second page
const getPage2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page2);
  response.end();
};

// load a success (200) for the third page
const getPage3 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page3);
  response.end();
};

// export the functions

module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
module.exports.getPage3 = getPage3;

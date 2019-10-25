const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');


const server = http.createServer((req, res) => {
  const urlObj = url.parse(req.url);
  const urlPathname = urlObj.pathname;
  const filePathname = path.join(__dirname, '/dist', urlPathname);

  fs.readFile(filePathname, (err, data) => {
    // 如果有问题返回 404
    if (err) {
      res.writeHead(404);
      res.write('404 - File is not found!');
      res.end();
      // 没问题返回文件内容
    } else {
      res.writeHead(200);
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000);

// 1.导入http 模块
const http = require("http");
const fs = require("fs");
const path = require("path");
// 2.创将web服务实例
const server = http.createServer();
// 3. 为服务器实例绑定request 事件，监听客户端的请求
server.on("request", (req, res) => {
  const url = req.url;
  let content = "<h1>404 Not Found!</h1>";
  let fpath = "";
  if (url === "/") {
    fpath = path.join(__dirname, "/clock/index.html");
  } else if (url === "/index.html") {
    fpath = path.join(__dirname, "/clock/", url);
  }
  //  4. 读取文件
  fs.readFile(fpath, "utf8", (err, dataStr) => {
    if (err) {
      return res.end('404 not found')
    } else {
      content = dataStr;
      console.log('读取文件成功：dataStr:\n', dataStr);
    }
  });
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(content);
  console.log('res: 已经返回了 ',content);
  
});
server.end;
// 4. 启动服务器

server.listen(80, () => {
  console.log("重新启动成功!  ", new Date());
});

const fs = require("fs");

//
// fs.readFile("/Users/gaoxiong/desktop/libai1.txt", "utf8", function (err, dataStr) {
//   console.log("err,", err);
//   console.log(err.message);
//   console.log("dataStr: ", dataStr);
// });
fs.writeFile(
  "/Users/gaoxiong/desktop/libai1.txt",
  "./libai.txt",
  function (err) {
    if (err) {
      return console.log(err.message);
    }
    console.log("写入成功");
  }
);

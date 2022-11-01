const fs = require("fs");
const path = require("path");

console.log(__dirname);

fs.readFile(
  path.join(__dirname, "/file/libai.txt"),
  "utf8",
  function (err, dataStr) {
    if (err) {
      return console.log("读取失败" + err.message);
    }
    console.log("读取成功");
    fs.mkdir(path.join(__dirname, "test"), (err) => {
      if (err) {
        return console.error(err);
      }
      console.log("Directory created successfully!");
    });
    fs.writeFile(
      __dirname + "/test/libai.txt",
      dataStr,
      "utf8",
      function (err) {
        if (err) {
          return console.log("写入失败 " + err.message);
        }
        console.log("写入成功! ");
      }
    );
  }
);

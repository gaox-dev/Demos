const fs = require("fs");

fs.readFile(
  "/users/gaoxiong/desktop/成绩.txt",
  "utf8",
  function (err, dataStr) {
    if (err) {
      return console.log("读取文件失败！" + err.message);
    }
    console.log("读取文件成功!");
    // 1. 把成绩按照空格进行分割
    const arrOld = dataStr.split(" ");
    const arrNew = [];
    console.log(arrOld);
    arrOld.forEach((element) => {
      arrNew.push(element.replace("=", "："));
    });
    const newStr = arrNew.join("\r\n");
    // 2.循环分割后的数组，对没想数据进行字符串进行替换操作
    console.log(newStr);
    fs.writeFile("./成绩-OK.js", newStr, "utf8", function (err) {
      if (err) {
        return console.log("保存失败" + err.message);
      }
      console.log("成绩写入成功！");
    });
  }
);

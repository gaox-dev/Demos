//  导入 fs模块
const fs = require("fs");
const { resolve } = require("path");
// 导入 path模块
const path = require("path");

// 1.正则表达式 匹配style 模块 匹配 javascript 模块
const regStyle = /<style>[\s\S]*<\/style>/;
const regJs = /<script>[\s\S]*<\/script>/;

fs.readFile(path.join(__dirname, "./素材/test.html"), "utf8", (err, data) => {
  if (err) {
    return console.log(err.message);
  }
  console.log(data);
  resolveCSS(data);
  resolveJS(data);
  resolveHTML(data);
});

function resolveCSS(data) {
  const r1 = regStyle.exec(data);
  console.log("r1: ", r1);
  const newCSS = r1[0].replace("<style>", "").replace("</style>", "");
  console.log("newCSS: ", newCSS);
  fs.writeFile(path.join(__dirname, "/clock/index.css"), newCSS, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("写入css文件成功");
  });
}
function resolveJS(data) {
  const r2 = regJs.exec(data);
  if (r2) {
    const newJS = r2[0].replace("<script>", "").replace("</script>", "");
    console.log("newJS: ", newJS);
    fs.writeFile(path.join(__dirname, "/clock/index.js"), newJS, (err) => {
      if (err) {
        return console.log("写入失败" + err.message);
      }
      console.log("写入js文件成功");
    });
  }
}

function resolveHTML(data) {
  const newHTML = data
    .replace(
      regStyle,
      '<style>@import url("./index.css")</style>'
    )
    .replace(regJs, '<script src="./index.js"></script>');
  console.log("newHTML: ", newHTML);
  fs.writeFile(path.join(__dirname, "./clock/index.html"), newHTML, (err) => {
    if (err) {
      return console.log("写入HTML错误 " + err.message);
    }
    console.log("写入HTML 成功");
  });
}

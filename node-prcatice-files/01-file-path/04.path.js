const path = require('path')

const fpath = 'a/b/c/d.index';

const extend = path.extname(fpath);

const fileName = path.basename(fpath);
console.log('fileName: ', fileName);

const fileName2 = path.basename(fpath, ".index");
console.log('fileName2: ', fileName2);

console.log(extend);
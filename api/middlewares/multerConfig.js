const multer = require('multer');
const path = require('path');


//COnfiguração do multer para armazenar arquivos temporariamente

const upload = multer({
    dest: path.resolve('temp'),
    limits: {fileSize: 10 * 1024 * 1024}
});

module.exports = upload;
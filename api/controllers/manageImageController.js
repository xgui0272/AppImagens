//Services
const {uploadFileToBlob} = require('../services/blobService');
const {downloadImage, deleteImageTemp} = require('../services/downloadImage')


/*
Controller para fazer o upload da imagem enviada direto do client
*/
exports.uploadImageLocal = async (req, res) => {
    try {
        const file = req.file
        if(!file) {
            res.status(400).json({message: 'Nenhum arquivo foi enviado'});
        }
        const blobUrl = await uploadFileToBlob(file.path, file.originalname);
        res.status(200).json({url: blobUrl});
    } catch (error) {
        console.log('Error ao fazer upload de imagem');
    }
}


/*
Controller para fazer o upload da imagem atraves de um link
*/
exports.uploadImageFromLink = async (req, res) => {
    try {
        const downImage = await downloadImage(req.body.url);
        const blobUrl = await uploadFileToBlob(downImage.filePath, downImage.originalName);
        deleteImageTemp(downImage.filePath);
        res.status(200).json({message: 'sucesso'})
    } catch (error) {
        console.log('Error ao fazer upload de imagem')
    }
}
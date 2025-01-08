//Services
const {uploadFileToBlob} = require('../services/blobService');
const {downloadImage, deleteImageTemp} = require('../services/downloadImage')

//Models
const {imagens} = require('../models/')


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
        const query = await imagens.create({imgName: blobUrl.name, imgLink: blobUrl.link, category: 1})
        res.status(200).json({message: 'Imagem salva com sucesso'});
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
        const query = await imagens.create({imgName: blobUrl.name, imgLink: blobUrl.link, category: 1})
        res.status(200).json({message: 'Imagem salva com sucesso'})
    } catch (error) {
        console.log('Error ao fazer upload de imagem')
    }
}
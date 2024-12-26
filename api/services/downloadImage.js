const axios = require('axios');
const path = require('path');
const fs = require('fs');
const {v4: uuidv4} = require('uuid');


//Função para baixar imagem temporariamente
async function downloadImage (url) {  
    try {
        //Define o caminho temporario da imagem
        const tempDir = path.join(__dirname, 'temp');
      
        if(!fs.existsSync(tempDir)) {
            fs.mkdirSync(tempDir);
        }

        const fileName = `${uuidv4()}.jpg`;
        const filePath = path.join(tempDir, fileName);
       
        //Fazer download da imagem
        const response = await axios({
            method: 'GET',
            url: url,
            responseType: 'stream'
        });

        //Salvando a imagem no sistema de arquivos
        const writer = fs.createWriteStream(filePath);
        response.data.pipe(writer);

        return new Promise((resolve, reject) => {
            writer.on('finish', () => resolve({filePath, originalName: fileName}));
            writer.on('error', () => reject)
        });

    } catch (error) {
        console.log('Ouve algum error ao baixar imagem', error);
        throw error;
    }
}


//Função para excluir a imagem temporaria
async function deleteImageTemp(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Error ao deletar o arquivo');
        }
    });
}



module.exports = {downloadImage, deleteImageTemp}; 
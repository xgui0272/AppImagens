//Import de dependencias e bibliotecas
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const bodyParser = require('body-parser');
const http = require('http');
const router = require('./routes/router')


//Instancia express
const app = express();

//Porta da aplicação
const port = 5000;

//Dominidos permitido requisiçoes cors
const allowedOrigins = [
    'http://127.0.0.1:3000',
];


//Configuração Cors
app.use(
    cors({
        origin: (origin, callback) => {
            if(allowedOrigins.includes(origin) || !origin) {
                callback(null, true);
            } else {
                console.log(`Origem não permitida pelo CORS: ${origin}`)
                callback(new Error('Requisição não permitida por CORS'))
            }
        },
        credentials: true,
        methods: ['POST', 'GET', 'OPTIONS', 'PUT', 'DELETE'],
        allowedHeaders: ['Contend-Type', 'Authorization'],
        optionsSuccessStatus: 200,
    })
);

//parsiong jason. Lidar com os dados no corpo da requisição
app.use(bodyParser.json());

//permitir o express confiar nas requisiçoes do proxy resvero, usaremos nginx
app.set('trust proxy', true);

//Configuração com Banco de dados
sequelize
.authenticate()
.then(() => {
    console.log('Conectado com sucesso ao banco de dados.');
})
.catch((err) => {
    console.log('Error ao conectar ao banco de dados:', err);
});

//Confiração da rotas
app.use('/', router);

//Criação do servidor HTTP`
const server = http.createServer(app);

//Iniciando o servidor
server.listen(port, () => {
    console.log(`Servidor Online! Rodando na porta: ${port}`);
});





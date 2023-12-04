// require('dotenv').config({path:'config.env'});

// Importação de módulos express e cors
import express from 'express';
import cors from 'cors';

// Importação de rotas definidas em um arquivo separado
import routes from './routes.js';

// Criação de uma instância do servidor Express
const server = express();

// Configuração de middleware CORS
server.use(cors());

// Configuração de middleware para análise de dados da URL codificada
server.use(express.urlencoded({ extended: true }));

// Uso das rotas definidas
server.use('/api', routes);

// Início do servidor e escuta de portas
server.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`);
})

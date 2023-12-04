// importacção do express
import express from 'express';
// criação de um roteador
const router = express.Router();
// Importação das funções do controlador
import { buscarTodos, buscarUm, inserir, alterar, excluir } from './controllers/ClienteController.js';
// Definição das rotas
router.get('/clientes', buscarTodos);
router.get('/cliente/:Id_Cliente', buscarUm);
router.post('/cliente', inserir);
router.put('/cliente/:Id_Cliente', alterar);
router.delete('/cliente/:Id_Cliente', excluir);
// Exportação do roteador:
export { router as default};

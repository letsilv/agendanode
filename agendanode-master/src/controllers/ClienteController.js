// Declaração de importação 
import { buscarTodos as _buscarTodos, 
         buscarUm as _buscarUm, 
         inserir as _inserir, 
         alterar as _alterar, 
         excluir as _excluir } from '../services/ClienteService.js';

export async function buscarTodos(req, res) {
    const json = { error: '', result: [] };

    // chama a função buscar todos
    const clientes = await _buscarTodos();

    // Transforma o resultado no formato JSON 
    for (let i in clientes) {
        json.result.push({
            codigo: clientes[i].Id_Cliente,
            nome: clientes[i].Nome_Cliente,
            cidade: clientes[i].Cidade,
            estado: clientes[i].Estado,
            pais: clientes[i].Pais
        });
    }
    // Envia a resposta JSON para o cliente
    res.json(json);
}
// função buscarUm
export async function buscarUm(req, res) {
    let json = { error: '', result: {} };

   // Recupera o ID do cliente a partir dos parâmetros da requisição
   let id_cliente = req.params.Id_Cliente;

   // Chama a função _buscarUm para encontrar um único cliente por ID
   let cliente = await _buscarUm(id_cliente);

   // Atualiza o resultado no JSON
    if (cliente) {
        json.result = cliente;
    }

    // Envia a resposta JSON para o cliente
    res.json(json);
}
// função inserir
export async function inserir(req, res) {
    let json = { error: '', result: {} };

     // Recupera dados do cliente a partir do corpo da requisição
    let codigo = req.body.Id_Cliente;
    let nome = req.body.Nome_Cliente;
    let segmento = req.body.Segmento;
    let cidade = req.body.Cidade;
    let estado = req.body.Estado;
    let pais = req.body.Pais;
    let mercado = req.body.Mercado;
    let regiao = req.body.Regiao;

     // Valida os dados e insere um novo cliente usando _inserir
    if (codigo && nome && segmento && cidade && estado && pais
        && mercado && regiao) {
        let cliente = await _inserir(codigo, nome, segmento, cidade,
            estado, pais, mercado, regiao);

     // Atualiza o resultado no objeto JSON
        json.result = {
            cliente: codigo,
            nome,
            segmento,
            cidade,
            estado,
            pais,
            mercado,
            regiao
        };
    }
    else {
        json.error = 'Erro no envio dos dados';
    }
    // Envia a resposta JSON para o cliente
    res.json(json);
}
//função alterar
export async function alterar(req, res) {
    let json = { error: '', result: {} };

    // Recupera dados do cliente dos parâmetros e corpo da requisição
    let codigo = req.params.Id_Cliente;
    let nome = req.body.Nome_Cliente;
    let segmento = req.body.Segmento;
    let cidade = req.body.Cidade;
    let estado = req.body.Estado;
    let pais = req.body.Pais;
    let mercado = req.body.Mercado;
    let regiao = req.body.Regiao;

    // Valida os dados e atualiza o cliente usando _alterar
    if (codigo && nome && segmento && cidade && estado && pais
        && mercado && regiao) {
        await _alterar(codigo, nome, segmento, cidade,
            estado, pais, mercado, regiao);

        // Atualiza o resultado no objeto JSON
        json.result = {
            codigo,
            nome,
            segmento,
            cidade,
            estado,
            pais,
            mercado,
            regiao
        };
    }
    else {
        json.error = 'Erro no envio dos dados';
    }
    // Envia a resposta JSON para o cliente
    res.json(json);
}
export async function excluir(req, res) {
    let json = { error: '', result: {} };

    // Recupera o ID do cliente a partir dos parâmetros da requisição
    let id_cliente = req.params.Id_Cliente;
    
     // Chama a função _excluir para excluir um cliente por ID
    let cliente = await _excluir(id_cliente);

    // Atualiza o resultado no objeto JSON
    if (cliente) {
        json.result = cliente;
    } 
    // Envia a resposta JSON para o cliente
    res.json(json);
}
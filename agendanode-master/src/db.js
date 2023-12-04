// importação do mysql2 para interagir com bancos de dados MySQL em ambientes Node.js.
import mysql from 'mysql2';

/* const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}); */
// configuração de conexão
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin@123',
    database: 'lojadb'
});
// conexão com o banco de dados
connection.connect((error) => {
    if(error) throw error;
    console.log(`Conectado ao banco de dados: lojadb } `);
});
// exportação da conexão
export default connection;

var desenvolvimento = false;

var configuracoes = {
    producao: {
        server: "servidor01191104.database.windows.net",
        user: "NATALIA.JULIANP@bandtec.com.br",
        password: "#Gf49133597898",
        database: "CasiAngeles",
        options: {
            encrypt: true
        },
        pool: {
            max: 4,
            min: 1,
            idleTimeoutMillis: 30000,
            connectionTimeout: 5000
        }
    },
    desenvolvimento: {
        server: "servidor01191104.database.windows.net",
        user: "NATALIA.JULIANP@bandtec.com.br",
        password: "#Gf49133597898",
        database: "CasiAngeles",
        options: {
            encrypt: true
        }
    }
}
 
var sql = require('mssql');
sql.on('error', err => {
    console.error(`Erro de Conex�o: ${err}`);
});

var perfil = desenvolvimento ? 'desenvolvimento' : 'producao';

function conectar() {
  sql.close();
  return sql.connect(configuracoes[perfil])
  // return new sql.ConnectionPool();  
} 

module.exports = {
    conectar: conectar,
    sql: sql
}
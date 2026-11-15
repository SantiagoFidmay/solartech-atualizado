const conn = require('./db/conn')
const {Cliente, Equipamento , Funcionario , Vistoria} = require('./models/rel')

async function syncDataBase() {
    try {
        await conn.sync({force: true})
        console.log('Tabezas sincronizadas!')
    } catch (err) {
        console.error('Erro ao sincronizar as tabelas!')
    }finally{
        await conn.close()
        console.log('Encerrando conexão com o banco de dados!')

    }
}

module.exports = syncDataBase()
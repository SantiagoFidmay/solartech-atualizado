const Equipamento  = require('../models/Equipamento')

const cryptoJs = require('crypto-js')
const CHAVE_SECRETA = 'segredo'


const cadastrar = async(req,res)=>{
    const valores = req.body

    if(!valores.modelo || !valores.fabricante || !valores.numSerie || !valores.idCliente){
        return res.status(400).json({message: "Todos os campos são obrigatorios"})
    }

    try {
        const numCripto = cryptoJs.AES.encrypt(valores.numSerie, CHAVE_SECRETA).toString()

        await Equipamento.create({
            modelo: valores.modelo,
            fabricante: valores.fabricante,
            numSerie: numCripto,
            idCliente: valores.idCliente
        })

        return res.status(201).json({message: 'Equipamento cadastrado com sucesso!'})
        
    } catch (err) {
        console.error('Erro ao cadastrar', err)
        return res.status(500).json({message: 'Erro ao cadastrar equipamento'})
    }
}


const listar = async(req,res)=>{
    try {
        const equipamentos = await Equipamento.findAll()
        return res.status(200).json(equipamentos.map((equipamento)=> ({
            codEquipamento: equipamento.codEquipamento,
            modelo: equipamento.modelo,
            fabricante: equipamento.fabricante,
            numSerie: cryptoJs.AES.decrypt(equipamento.numSerie, CHAVE_SECRETA).toString(cryptoJs.enc.Utf8),
            idCliente: equipamento.idCliente
        })))
    } catch (err) {
        console.error('Erro ao listar equipamentos', err)
        return res.status(500).json({message: 'Erro ao listar equipamentos'})
    }
}

module.exports = {cadastrar, listar}

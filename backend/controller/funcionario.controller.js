const Funcionario  = require('../models/Funcionario')

const cryptoJs = require('crypto-js')
const CHAVE_SECRETA = 'segredo'

const cadastrar = async(req,res)=>{
    const valores = req.body

    if(!valores.nome ||!valores.email || !valores.senha){
        return res.status(400).json({message: "Todos os campos são obrigatorios"})
    }

    try {
        const senhaCripto = cryptoJs.AES.encrypt(valores.senha, CHAVE_SECRETA).toString()

        await Funcionario.create({
            nome: valores.nome,
            email: valores.email,
            senha: senhaCripto
        })

        return res.status(201).json({message: "Funcionario cadastrado!"})
    } catch (err) {
        console.error('Erro ao cadastrar', err)
        return res.status(500).json({message: 'Erro ao cadastrar funcionario'})
    }
}


const listar = async(req,res)=>{
    try {
        const funcionarios = await Funcionario.findAll()
        return res.status(200).json(funcionarios.map((funcionario)=> ({
            codFuncionario: funcionario.codFuncionario,
            nome: funcionario.nome,
            email: funcionario.email
        })))
    } catch (err) {
        console.error('Erro ao listar funcionarios', err)
        return res.status(500).json({message: 'Erro ao listar funcionarios'})
    }
}

module.exports = {cadastrar, listar}

const Vistoria  = require('../models/Vistoria')



const cadastrar = async(req,res)=>{
    const valores = req.body

    if(!valores.status || !valores.data || !valores.idEquipamento){
        return res.status(400).json({message: "Todos os campos são obrigatorios"})
    }

    try {
        
        await Vistoria.create({
            status: valores.status,
            data: valores.data,
            idEquipamento: valores.idEquipamento
        })

        return res.status(201).json({message: 'Vistoria cadastrado com sucesso!'})
    } catch (err) {
        console.error('Erro ao cadastrar', err)
        return res.status(500).json({message: 'Erro ao cadastrar vistoria'})
    }
}


const listar = async(req,res)=>{
    try {
        const vistorias = await Vistoria.findAll()
        return res.status(200).json(vistorias.map((vistoria)=> ({
            codVistoria: vistoria.codVistoria,
            status: vistoria.status,
            data: vistoria.data,
            idEquipamento: vistoria.idEquipamento
        })))
    } catch (err) {
        console.error('Erro ao listar vistorias', err)
        return res.status(500).json({message: 'Erro ao listar vistorias'})
    }
}

module.exports = {cadastrar, listar}

const Cliente = require('../models/Cliente')
const Equipamento = require('../models/Equipamento')
const Funcionario = require('../models/Funcionario')
const Vistoria = require('../models/Vistoria')


Cliente.hasMany(Equipamento,{
    foreignKey: 'idCliente',
    as: 'equipamentoCliente',
    onDelete: 'CASCADE'
})

Equipamento.belongsTo(Cliente,{
    foreignKey: 'idCliente',
    as: 'clienteEquipamento',
    allowNull: false
})

Vistoria.hasMany(Equipamento,{
    foreignKey: 'idEquipamento',
    as: 'equipamentoVistoria',
    onDelete: 'CASCADE'

})

Equipamento.belongsTo(Vistoria,{
    foreignKey: 'idEquipamento',
    as:  'vistoriaEquipamento',
    allowNull: false
})

module.exports = {Cliente, Equipamento, Funcionario, Vistoria};
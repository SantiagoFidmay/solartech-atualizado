const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const Vistoria = db.define('vistoria',{
    codVistoria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    status: {
        type: DataTypes.ENUM('PENDENTE','REALIZADA'),
        allowNull: false
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    idEquipamento: {
        type:DataTypes.INTEGER,
        references: {
            model: 'equipamentos',
            key: 'codEquipamento'
        }
    }
    
},{
    tableName: 'vistorias',
    timestamps: false
})

module.exports = Vistoria
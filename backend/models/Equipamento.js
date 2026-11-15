const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const Equipamento = db.define('equipamento',{
    codEquipamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    modelo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    fabricante: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    numSerie: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    idCliente: {
        type:DataTypes.INTEGER,
        references: {
            model: 'clientes',
            key: 'codCliente'
        }
    }
    
},{
    tableName: 'equipamentos',
    timestamps: false
})

module.exports = Equipamento
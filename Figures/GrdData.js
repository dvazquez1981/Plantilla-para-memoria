
const  grddb=require('./bd/grddb.js');
const { Sequelize, DataTypes } = require('sequelize');

/** Defino modelo de los datos */
const GrdData=ftdb.define('Medicion',{
     medicionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true 
      },
      fecha: {
        type:  DataTypes.DATE,
        allowNull: false
      },
      valor: {
       type: DataTypes.INTEGER,
        allowNull: false
      },
      carril: {
       type: DataTypes.INTEGER,
      allowNull: false
      },
    clasificacionId: {
      type: DataTypes.INTEGER,
      allowNull: false
      },
      dispositivoId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
    tableName: 'Medicion',
    timestamps: false
});
module.exports = Medicion ;


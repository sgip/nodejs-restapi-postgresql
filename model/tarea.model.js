module.exports = (sequelize, DataTypes, Model) => {

    class Tareas extends Model {}

    Tareas.init({
        // Model attributes are defined here
        nombre: {
          type: DataTypes.STRING,
          allowNull: false
        },
        descripcion: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        fecha_creacion: {
          type: DataTypes.DATE
          // allowNull defaults to true
        },
        fecha_actualizacion: {
            type: DataTypes.DATE
            // allowNull defaults to true
        },
        creado_por: {
            type: DataTypes.STRING,
            allowNull: false
        },
        actualizado_por: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'tareas' // We need to choose the model name
      });
      
      return Tareas;
}
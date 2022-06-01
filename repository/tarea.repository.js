const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');


class TareaRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.sync({ force: true }).then(() => {
            console.log("Drop and re-sync db.");
        });
    }

    async getTareas() {
        
        try {
            const tareas = await this.db.tareas.findAll();
            console.log('tareas:::', tareas);
            return tareas;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async crearTarea(tarea) {
        let data = {};
        try {
            tarea.fecha_creacion = new Date().toISOString();
            data = await this.db.tareas.create(tarea);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async actualizarTarea(tarea) {
        let data = {};
        try {
            tarea.fecha_actualizacion = new Date().toISOString();
            data = await this.db.tareas.update({...tarea}, {
                where: {
                    id: tarea.id
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async eliminarTarea(tareaId) {
        let data = {};
        try {
            data = await this.db.tareas.destroy({
                where: {
                    id: tareaId
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new TareaRepository();
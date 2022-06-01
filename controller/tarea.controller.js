const tareaService  = require('../service/tarea.service');
const logger = require('../logger/api.logger');

class TodoController {

    async getTareas() {
        logger.info('Controller: getTareas')
        return await tareaService.getTareas();
    }

    async crearTarea(tarea) {
        logger.info('Controller: crearTarea', tarea);
        return await tareaService.crearTarea(tarea);
    }

    async actualizarTarea(tarea) {
        logger.info('Controller: actualizarTarea', tarea);
        return await tareaService.actualizarTarea(tarea);
    }

    async eliminarTarea(tareaId) {
        logger.info('Controller: eliminarTarea', tareaId);
        return await tareaService.eliminarTarea(tareaId);
    }
}
module.exports = new TodoController();
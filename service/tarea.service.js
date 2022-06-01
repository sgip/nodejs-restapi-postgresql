const tareaRepository  = require('../repository/tarea.repository');

class TareaService {

    constructor() {}

    async getTareas() {
        return await tareaRepository.getTareas();
    }

    async crearTarea(tarea) {
        return await tareaRepository.crearTarea(tarea);
    }

    async actualizarTarea(tarea) {
        return await tareaRepository.actualizarTarea(tarea);
    }

    async eliminarTarea(tareaId) {
        return await tareaRepository.eliminarTarea(tareaId);
    }

}

module.exports = new TareaService();
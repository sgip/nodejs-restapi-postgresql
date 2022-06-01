const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const fs = require('fs') 

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');
const tareaController = require('./controller/tarea.controller')

const app = express();
const port = process.env.PORT || 3000;

// let express to use this
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));

app.use(bodyParser.json());

app.get('/api/tareas', (req, res) => {
    tareaController.getTareas().then(data => res.json(data));
});

app.post('/api/tarea', (req, res) => {
    console.log(req.body);
    tareaController.crearTarea(req.body.tarea).then(data => res.json(data));
});

app.put('/api/tarea', (req, res) => {
    tareaController.actualizarTarea(req.body.tarea).then(data => res.json(data));
});

app.delete('/api/tarea/:id', (req, res) => {
    tareaController.eliminarTarea(req.params.id).then(data => res.json(data));
});

app.get('/', (req, res) => {
    res.send(`<h1>API Funciona!!!</h1>`)
});



app.listen(port, () => {
    console.log(`Servidor escuchando en puerto  ${port}`);
})
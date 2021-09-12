const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.usuariosPath = '/';
        this.app.set('port', process.env.PORT || 3000);

        //Middlewares.
        this.middlewares();

        //Rutas de mi aplicacion.
        this.routes();
    };

    middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/node.routes'));
    };

    listen() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor corriendo en el puerto', this.app.get('port'));
        });
    };

};

module.exports = Server;
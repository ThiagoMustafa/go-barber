import express from 'express';
import path from 'path';
import routes from './routes';
import './database/index';

// Classe responsavel por iniciar a aplicação
class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Habilita a aplicação para enviar requisições e receber respostas com json
    // Enable the application to send requests with json
    this.server.use(express.json());

    // Enable find files from url
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  // Define as rotas da api
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;

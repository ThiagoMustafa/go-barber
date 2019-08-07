import express from 'express';
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
    this.server.use(express.json());
  }

  // Define as rotas da api
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;

import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import database from './database';
import database2 from './databse2';

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    this.app.set('port', process.env.port || 3005);
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.app.get('/prueba', async (req: Request, res: Response) => {
      const consulta = await database.query(`
      select * from puntosDeAtencion`)
      res.send(consulta);
    });

    this.app.get('/prueba2', async (req: Request, res: Response) => {
      // const consulta = await database2.query(`
      // SELECT * from tabla`)
      // res.send(consulta);
    });

  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log('Server listening on port', this.app.get('port'));
    });
  }
}

const server = new Server();
server.start();
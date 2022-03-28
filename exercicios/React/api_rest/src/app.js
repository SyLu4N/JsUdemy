import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import './database';
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';
import aprendizRoutes from './routes/aprendizRoutes';

const whiteList = [
  'http://35.247.223.255',
  'http://localhost:3001',
  'http://localhost:3000',
  '*',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error(`Origin not allowed by Cors: ${origin}`));
    }
  },

};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));

    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/foto/', fotoRoutes);
    this.app.use('/aprendiz/', aprendizRoutes);
  }
}

export default new App().app;

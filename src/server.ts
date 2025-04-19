import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import sequelize from './config/db';
import cuentaRoutes from './routes/cuentaRoutes';
import { CuentaBancaria } from './models/cuentaBancaria';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/cuentas', cuentaRoutes);

sequelize.sync().then(() => {
  console.log('Base de datos sincronizada');
  app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
});

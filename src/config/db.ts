import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('nombre_db', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

export default sequelize;

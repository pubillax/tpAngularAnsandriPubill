import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

export interface CuentaBancariaAttributes {
  id?: number;
  titular: string;
  saldo: number;
  activa: boolean;
}

export class CuentaBancaria extends Model<CuentaBancariaAttributes> implements CuentaBancariaAttributes {
  public id!: number;
  public titular!: string;
  public saldo!: number;
  public activa!: boolean;
}

CuentaBancaria.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  titular: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  saldo: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  activa: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'CuentaBancaria',
});

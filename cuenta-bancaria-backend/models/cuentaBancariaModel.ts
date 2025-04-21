import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'restaurantes',
})
export class cuentaBancaria extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nombre!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  saldo!: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  activo!: boolean;
}
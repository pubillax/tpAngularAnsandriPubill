import express, { Request, Response } from 'express';
import { cuentaBancaria } from '../../models/cuentaBancariaModel';
 
export const cuentaBancariaController = {
  async create(nombre:string, saldo:number, activo:boolean): Promise<any> {
      const nuevaCuenta = await cuentaBancaria.create({
        nombre,
        saldo,
        activo,
      });
      return nuevaCuenta;
  },

  async list(req: Request, res: Response): Promise<Response> {
    try {
      const nuevaCuenta = await cuentaBancaria.findAll();
      return res.status(200).send(nuevaCuenta);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async find(req: Request<{ nombre: string }>, res: Response): Promise<Response> {
    try {
      const { nombre } = req.params;

      const cuenta = await cuentaBancaria.findAll({
        where: { nombre },
      });

      return res.status(200).send(cuenta);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const deleted = await cuentaBancaria.destroy({
        where: { id: parseInt(id, 10) },
      });

      if (deleted === 0) {
        return res.status(404).send({ message: 'cuenta bancaria no encontrada' });
      }

      return res.status(200).send({ message: 'cuenta bancaria eliminada con éxito' });
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id, nombre, saldo, activo } = req.params;

      const [rowsUpdated, [updatedRestaurante]] = await cuentaBancaria.update(
        { nombre, saldo, activo },
        {
          where: { id },
          returning: true,
        }
      );

      if (rowsUpdated === 0 || !updatedRestaurante) {
        return res.status(404).send({ message: 'Restaurante no encontrado' });
      }

      return res.status(200).send({
        message: 'Restaurante actualizado con éxito',
        restaurante: updatedRestaurante,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

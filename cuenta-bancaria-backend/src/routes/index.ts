import express, { Request, Response } from 'express';
import { cuentaBancariaController } from '../controllers/cuentaBancaria';
export let cuentaBancariaRouter = express.Router();
import { Application } from 'express';


export default (app: Application) => {
    app.use('/cuentaBancaria', cuentaBancariaRouter);
};

cuentaBancariaRouter.get("/", async (req: Request, res: Response) => {
        const restaurantes = await cuentaBancariaController.list(req, res);
});
function parseBool(value: string): boolean {
    return value.toLowerCase() === 'true';
  }
cuentaBancariaRouter.post('/create/nombre/:nombre/saldo/:saldo/activo/:activo',(req: Request, res: Response) => {
    cuentaBancariaController.create(req.params.nombre, parseInt(req.params.saldo), parseBool(req.params.activo));
    res.send(req.params.nombre + ", " + req.params.fecha + ", " + req.params.capacidad);
});

cuentaBancariaRouter.get('/find/nombre/:nombre', async (req: Request<{ nombre: string }>, res: Response) => {
        const restaurante = await cuentaBancariaController.find(req, res);
});

cuentaBancariaRouter.delete('/delete/id/:id', async (req, res) => {
      await cuentaBancariaController.delete(req, res);
  });

  cuentaBancariaRouter.put('/update/id/:id/nombre/:nombre/saldo/:saldo/activo/:activo', async (req, res) => {
      await cuentaBancariaController.update(req, res); 
  });
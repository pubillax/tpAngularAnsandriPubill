import { Router, Request, Response } from 'express';
import { CuentaBancaria } from '../models/cuentaBancaria';

const router = Router();

// GET all
router.get('/', async (_req: Request, res: Response) => {
    const cuentas = await CuentaBancaria.findAll();
    res.json(cuentas);
});

// POST - Crear una cuenta nueva
router.post('/', async (req: Request, res: Response) => {
    const cuenta = await CuentaBancaria.create(req.body);
    res.json(cuenta);
});

// PUT - Modificar una cuenta existente
router.put('/:id', async (req: Request<{ id: string }>, res: Response) => {
    const cuenta = await CuentaBancaria.findByPk(req.params.id);
    if (!cuenta) return res.status(404).json({ message: 'No encontrada' });
    await cuenta.update(req.body);
    res.json(cuenta);
});

// DELETE - Eliminar una cuenta por ID
router.delete('/:id', async (req: Request<{ id: string }>, res: Response) => {
    const eliminadas = await CuentaBancaria.destroy({ where: { id: req.params.id } });
    if (eliminadas) return res.json({ message: 'Eliminada' });
    res.status(404).json({ message: 'No encontrada' });
});

export default router;

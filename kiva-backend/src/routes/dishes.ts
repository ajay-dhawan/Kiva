import express, { Request, Response } from 'express';
import Dish, { IDish } from '../models/Dish';

const router = express.Router();

// GET all dishes
router.get('/', async (req: Request, res: Response) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST a new dish
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, perPlate, lumpSum } = req.body;
    const dish = new Dish({ name, perPlate, lumpSum });
    await dish.save();
    res.status(201).json(dish);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data' });
  }
});

export default router;

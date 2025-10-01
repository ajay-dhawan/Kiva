'use client';
import { useState } from 'react';

export type Dish = {
  name: string;
  perPlate: number;
  lumpSum: number;
};

type DishFormProps = {
  addDish: (dish: Dish) => void;
};

export default function DishForm({ addDish }: DishFormProps) {
  const [name, setName] = useState('');
  const [perPlate, setPerPlate] = useState<number>(0);
  const [lumpSum, setLumpSum] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    addDish({ name, perPlate, lumpSum });
    setName('');
    setPerPlate(0);
    setLumpSum(0);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4 border rounded shadow-md">
      <input
        type="text"
        placeholder="Dish Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full rounded"
        required
      />
      <input
        type="number"
        placeholder="Amount per Plate"
        value={perPlate}
        onChange={(e) => setPerPlate(Number(e.target.value))}
        className="border p-2 w-full rounded"
        required
      />
      <input
        type="number"
        placeholder="Lump Sum"
        value={lumpSum}
        onChange={(e) => setLumpSum(Number(e.target.value))}
        className="border p-2 w-full rounded"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Dish
      </button>
    </form>
  );
}

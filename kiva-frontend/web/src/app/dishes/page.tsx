'use client';
import { useState } from 'react';
import DishForm, { Dish } from '../../components/DishForm';
import DishTable from '../../components/DishTable';

export default function DishesPage() {
  const [dishes, setDishes] = useState<Dish[]>([]);

  const addDish = (dish: Dish) => {
    setDishes((prev) => [...prev, dish]);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Add Dishes</h1>
      <DishForm addDish={addDish} />
      <DishTable dishes={dishes} />
    </div>
  );
}

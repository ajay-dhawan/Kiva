'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DishForm, { Dish } from '../../components/DishForm';
import DishTable from '../../components/DishTable';
import MenuPreview from '../../components/MenuPreview';

export default function DishesPage() {
  const [dishes, setDishes] = useState<Dish[]>([]);

    useEffect(() => {
    axios.get('http://localhost:4000/api/dishes')
      .then(res => setDishes(res.data))
      .catch(err => console.error(err));
  }, []);

  const addDish = (dish: Dish) => {
    axios.post('http://localhost:4000/api/dishes', dish)
      .then(res => setDishes(prev => [...prev, res.data]))
      .catch(err => console.error(err));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Add Dishes</h1>
      <DishForm addDish={addDish} />
      <DishTable dishes={dishes} />
      <MenuPreview dishes={dishes} />
    </div>
  );
}

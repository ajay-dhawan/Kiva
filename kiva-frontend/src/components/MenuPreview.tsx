'use client';
import { Dish } from './DishForm';

type MenuPreviewProps = {
  dishes: Dish[];
};

export default function MenuPreview({ dishes }: MenuPreviewProps) {
  const totalLumpSum = dishes.reduce((acc, dish) => acc + dish.lumpSum, 0);

  return (
    <div className="mt-6 p-4 border rounded shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4">Menu Preview</h2>
      <ul className="space-y-2">
        {dishes.map((dish, idx) => (
          <li key={idx} className="flex justify-between">
            <span>{dish.name}</span>
            <span>₹{dish.perPlate} per plate | Lump Sum: ₹{dish.lumpSum}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 font-bold text-right">Total Lump Sum: ₹{totalLumpSum}</div>
    </div>
  );
}

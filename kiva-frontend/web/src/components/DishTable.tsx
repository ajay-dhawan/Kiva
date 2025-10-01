'use client';
import { Dish } from './DishForm';

type DishTableProps = {
  dishes: Dish[];
};

export default function DishTable({ dishes }: DishTableProps) {
  const totalLumpSum = dishes.reduce((acc, dish) => acc + dish.lumpSum, 0);

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-full table-auto border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Dish Name</th>
            <th className="border px-4 py-2">Per Plate</th>
            <th className="border px-4 py-2">Lump Sum</th>
          </tr>
        </thead>
        <tbody>
          {dishes.map((dish, idx) => (
            <tr key={idx}>
              <td className="border px-4 py-2">{dish.name}</td>
              <td className="border px-4 py-2">{dish.perPlate}</td>
              <td className="border px-4 py-2">{dish.lumpSum}</td>
            </tr>
          ))}
          {dishes.length > 0 && (
            <tr className="font-bold">
              <td className="border px-4 py-2 text-right" colSpan={2}>
                Total
              </td>
              <td className="border px-4 py-2">{totalLumpSum}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

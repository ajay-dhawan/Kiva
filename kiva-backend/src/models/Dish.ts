import mongoose, { Schema, Document } from 'mongoose';

export interface IDish extends Document {
  name: string;
  perPlate: number;
  lumpSum: number;
}

const DishSchema: Schema = new Schema({
  name: { type: String, required: true },
  perPlate: { type: Number, required: true },
  lumpSum: { type: Number, required: true },
});

export default mongoose.model<IDish>('Dish', DishSchema);

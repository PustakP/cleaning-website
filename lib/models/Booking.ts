import mongoose, { Document, Model, Schema } from 'mongoose';

interface IBooking extends Document {
  rooms: number;
  type: string;
  description: string;
  location: string;
  date: Date;
  email: string;
  phone: string;
  createdAt: Date;
}

const BookingSchema: Schema = new Schema({
  rooms: { type: Number, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Booking: Model<IBooking> = mongoose.models.Book || mongoose.model<IBooking>('Book', BookingSchema);

export type { IBooking };
export default Booking;
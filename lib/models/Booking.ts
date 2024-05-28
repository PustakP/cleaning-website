import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  rooms: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

const Booking = mongoose.models.Book || mongoose.model('Book', BookingSchema);

export default Booking;

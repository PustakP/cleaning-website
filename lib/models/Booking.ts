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
  },
});

// Define Booking Model
const Booking = mongoose.model('Book', BookingSchema);

export default Booking;

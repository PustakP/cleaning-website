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

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
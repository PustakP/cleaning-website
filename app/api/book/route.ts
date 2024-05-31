// i just tried creating the backend api but seems to not working

import connectToDatabase from "@/lib/db/connectdb";
import Booking from "@/lib/models/Booking";

export async function POST (req: Request) {
  try {
    
    const value = await req.json();

    await connectToDatabase();
    const existingBooking = await Booking.findOne(value.date)

    if (existingBooking){
      return new Response(JSON.stringify({message: "Booking already exists"}), {
        status: 400,
      })
    }
    
    await Booking.create(value)

  } catch (error) {
    return new Response(JSON.stringify({message: error}), {
      status: 500,
    })
  }
}
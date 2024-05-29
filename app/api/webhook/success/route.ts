// import { NextRequest, NextResponse } from 'next/server';
// import mongoose from 'mongoose';
// import Stripe from 'stripe';
// import emailjs from 'emailjs-com';
// import connectToDatabase from '@/lib/db/connectdb';
// import Booking from '@/lib/models/Booking';


// export async function POST(req: NextRequest, res: NextResponse ,values: any) {
//   try {

//       await connectToDatabase();

//       const booking = new Booking({
//         email,
//         phone,
//         rooms,
//         description,
//         location,
//         date: date as string,
//       });

//       await booking.save();

//       const templateParams = {
//         to_name: 'Admin',
//         from_name: email,
//         message: `Booking confirmed for ${rooms} room(s). Description: ${description}. Location: ${location}. Contact: ${phone}. Date: ${date}`,
//       };

//       await emailjs.send(process.env.EMAILJS_SERVICE_ID!, process.env.EMAILJS_TEMPLATE_ID!, templateParams, process.env.EMAILJS_USER_ID!);

//       return NextResponse.json({ message: 'Payment successful and booking saved!' });
//     // } else {
//     //   return NextResponse.json({ message: 'Payment not successful!' }, { status: 400 });
//     // }
//   } catch (error) {
//     return NextResponse.json({ error: error }, { status: 500 });
//   }
// }

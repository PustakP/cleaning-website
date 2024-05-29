import { z } from 'zod';

export const bookingschema = z.object({
  rooms: z.string().min(1, { message: "Number of rooms must be at least 1" }),
  type: z.string().min(1, { message: "Type is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  location: z.string().min(1, { message: "Location is required" }),
  date: z.date().nullable().refine(date => date !== null, {
    message: "Date is required",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number is required" }),
});

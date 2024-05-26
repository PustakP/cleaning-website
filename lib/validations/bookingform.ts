import {z} from "zod";

export const eventFormSchema = z.object({
  rooms: z.string(),
  type: z.string(),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters")
    .max(400, "Description must be less than 400 characters"),
  location: z
    .string()
    .min(3, "Location must be at least 3 characters")
    .max(400, "Location must be less than 400 characters"),
  Date: z.date(),
  email: z.string(),
});

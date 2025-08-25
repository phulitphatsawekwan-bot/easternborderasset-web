import { z } from "zod";


export const realestateSchema = z.object({
  title: z.string().min(2, "Title must be more than 2 Character"),
  price: z.coerce.number(),
  description: z.string().max(500, "Description must be less than 500 character"),
  category: z.string(),
  type: z.string(),
  space: z.coerce.number(),
  bedroom: z.string(),
  bathroom: z.string(),
  lat: z.coerce.number(),
  lng: z.coerce.number(),
  image: z.any()
});

export const profileSchema = z.object({
  firstname: z.string()
  .min(3, "first name must be more than 3 Character")
  .max(30, "first name must be less than 30 Character")
  ,
  lastname: z.string()
  .min(3, "last name must be more than 3 Character")
  .max(30, "last name must be less than 30 Character")
  ,
});

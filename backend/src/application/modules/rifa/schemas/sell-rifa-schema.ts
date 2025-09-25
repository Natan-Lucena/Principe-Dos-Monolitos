import z from "zod";

export const sellRifaSchema = z.object({
  number: z.string().min(1).max(300),
  name: z.string().min(1).max(150),
  email: z.string().min(1).max(150),
});

import z from "zod";

export const signInUserSchema = z.object({
  id: z.string().min(1).max(20),
  password: z.string().min(1).max(150),
});

import z from "zod";

export const signUpUserSchema = z.object({
  id: z.string().min(1).max(20),
  email: z.string().email(),
  name: z.string().min(1).max(200),
  password: z.string().min(1).max(50),
});

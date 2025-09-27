import z from "zod";

export const updatePasswordSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1).max(50),
  id: z.string().min(1).max(20),
});

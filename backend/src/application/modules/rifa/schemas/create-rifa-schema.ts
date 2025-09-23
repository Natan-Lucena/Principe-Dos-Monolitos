import z from "zod";

export const createRifaSchema = z.object({
  number: z.string().min(1).max(300),
});

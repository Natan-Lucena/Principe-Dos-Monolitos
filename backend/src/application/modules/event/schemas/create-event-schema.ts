import z from "zod";

export const createEventSchema = z.object({
  name: z.string().min(2).max(100),
  date: z.date(),
});

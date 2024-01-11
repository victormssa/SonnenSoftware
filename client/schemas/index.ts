import * as z from "zod";
export const schema = z.object({
    username: z.string().min(3).max(20),
    password: z.string().min(6),
});
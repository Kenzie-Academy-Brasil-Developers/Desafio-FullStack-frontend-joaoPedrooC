import { z } from "zod";

export const createUserSchema = z.object({
  email: z.string().email('E-mail inválido!'),
  password: z.string().min(6, 'Sua senha deve conter no mínimo 6 caracteres!')
})
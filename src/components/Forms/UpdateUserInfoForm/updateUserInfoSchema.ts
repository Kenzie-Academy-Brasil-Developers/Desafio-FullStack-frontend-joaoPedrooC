import { z } from "zod";

export const updateUserInfoSchema = z.object({
  name: z.string().min(3, 'Seu novo nome precisa ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  password: z.string().optional(),
  number: z.string().length(11, 'Seu novo número deve conter 11 dígitos').regex(/^\d+$/, 'Digite apenas números')
})
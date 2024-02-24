import { z } from "zod";

export const createContactSchema = z.object({
  name: z.string().min(1, 'O nome não pode ser vazio'),
  email: z.string().email('Insira um e-mail válido'),
  number: z.string().length(11, 'O número deve conter 11 dígitos').regex(/^\d+$/, 'Digite apenas números')
})
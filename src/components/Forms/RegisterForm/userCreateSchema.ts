import { z } from "zod";

export const userCreateSchema = z.object({
  name: z.string().min(3, 'Seu nome deve conter no mínimo 3 dígitos'),
  email: z.string().email('Forneça um e-mail válido'),
  password: z.string().min(6, 'Sua senha deve conter no mínimo 6 dígitos'),
  number: z.string().min(11, 'Seu número deve conter 11 dígitos').max(11, 'Seu número deve conter 11 dígitos')
})
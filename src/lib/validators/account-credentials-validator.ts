import { z } from "zod";

export const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "password must be at leat 8 characters long", }),
  });


  export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>
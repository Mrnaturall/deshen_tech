import { UserInputSchema,UserSignUpSchema, UserSignInSchema } from "@/lib/validator";

import { z } from "zod";


export type IUserInput= z.infer<typeof UserInputSchema>
export type IUserSignUp= z.infer<typeof UserSignUpSchema>
export type IUserSignIn= z.infer<typeof UserSignInSchema>

export type  Data ={
    users: IUserInput[];
}
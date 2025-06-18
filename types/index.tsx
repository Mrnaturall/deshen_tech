import { UserInputSchema,UserSignUpSchema, UserSignInSchema ,WebPageInputSchema} from "@/lib/validator";

import { z } from "zod";


export type IUserInput= z.infer<typeof UserInputSchema>
export type IUserSignUp= z.infer<typeof UserSignUpSchema>
export type IUserSignIn= z.infer<typeof UserSignInSchema>

export type  Data ={
    users: IUserInput[];
     webPages: IWebPageInput[]
}


// webpage
export type IWebPageInput = z.infer<typeof WebPageInputSchema>
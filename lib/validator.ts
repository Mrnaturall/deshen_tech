import z from "zod"

// user

const UserName = z
  .string()
  .min(2, { message: "Username must be at least 2 characters" })
  .max(50, { message: "Username must be at most 30 characters" });
const Email = z.string().min(1, "Email is required").email("Email is invalid");
const Password = z.string().min(3, "Password must be at least 3 characters");
const UserRole = z.string().min(1, "role is required");

export const UserInputSchema = z.object({
  name: UserName,
  email: Email,
  image: z.string().optional(),
  emailVerified: z.boolean(),
  role: UserRole,
  password: Password,
 
});
//signin
export const UserSignInSchema = z.object({
  email: Email,
  password: Password,
});
// signup
export const UserSignUpSchema = UserSignInSchema.extend({
  name: UserName,
  confirmPassword: Password,
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

import { IUserInput, Data } from "@/types";
import bcrypt from "bcryptjs";
const users: IUserInput[] = [
  {
    name: "John",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "Admin",
    emailVerified: false,
  },
  {
    name: "Jane",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    emailVerified: false,
  },
  {
    name: "Jack",
    email: "jack@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    emailVerified: false,
  },
  {
    name: "Sarah",
    email: "sarah@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    emailVerified: false,
  },
  {
    name: "Michael",
    email: "michael@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    emailVerified: false,
  },
  {
    name: "Emily",
    email: "emily@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    emailVerified: false,
  },
  {
    name: "Alice",
    email: "alice@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    emailVerified: false,
  },
  {
    name: "Tom",
    email: "tom@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",

    emailVerified: false,
  },
  {
    name: "Linda",
    email: "linda@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",

    emailVerified: false,
  },
  {
    name: "George",
    email: "george@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",

    emailVerified: false,
  },
  {
    name: "Jessica",
    email: "jessica@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    emailVerified: false,
  },
  {
    name: "Chris",
    email: "chris@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    emailVerified: false,
  },
  {
    name: "Samantha",
    email: "samantha@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    emailVerified: false,
  },
  {
    name: "David",
    email: "david@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    emailVerified: false,
  },
  {
    name: "Anna",
    email: "anna@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    emailVerified: false,
  },
];

const data: Data = {
  users,
};
export default data;

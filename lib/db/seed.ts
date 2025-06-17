import { connectToDatabase } from ".";
import {loadEnvConfig} from "@next/env"
import User from "./models/user.model";
import {cwd}from "process";
import data from "../data";
loadEnvConfig(cwd());

 const main = async () => {
      try {
        const {users } = data
        await connectToDatabase(process.env.MONGODB_URI)

        await User.deleteMany()
        const createdUsers = await User.insertMany(users)

        console.log({
          createdUsers,
          message: 'Seeded database successfully',
        })
        process.exit(0)
      } catch (error) {
        console.error(error)
        throw new Error('Failed to seed database')
      }
    }

    main()
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

import { users } from "./schema"

const client = postgres("")
const db = drizzle(client)

const allUsers = await db.select().from(users)

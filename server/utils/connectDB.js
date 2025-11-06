import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

let pool;

export async function connectDB() {
  try {
    pool = new Pool({
      connectionString: process.env.POSTGRES_URL,
    });
    await pool.connect();
    console.log("Connection DB Success...");
  } catch (err) {
    console.error("Connection DB Failed....", err);
  }
}

connectDB();
export default pool;

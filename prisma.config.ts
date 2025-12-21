import "dotenv/config";
import { defineConfig, env } from "@prisma/config";

export default defineConfig({
  // Path to your Prisma schema
  schema: "prisma/schema.prisma",
  // Configure the database connection via env
  datasource: {
    url: env("DATABASE_URL"),
  },
});

import { z } from "zod";

const envSchema = z.object({
  ELYSIA_VERSION: z.string().default("0.0.0"),
  ELYSIA_API_URL: z.string().default("http://localhost"),
  PORT: z.string().default("3000"),
  RUNTIME: z.enum(["bun", "edge"]).default("bun"),
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  SECRET_KEY: z.string().default("your_default_secret_key_here"),
});

export const env = envSchema.parse(process.env);

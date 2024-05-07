import { Elysia, ElysiaConfig, t } from "elysia";
import { rateLimit } from "elysia-rate-limit";
import { cookie } from "@elysiajs/cookie";
import { cors } from "@elysiajs/cors";
import { logger } from "logixlysia";
import { jwt } from "@elysiajs/jwt";

import { env } from "../env";
import { contextRequest } from "./contextRequest";

const CreateElysia = () =>
  new Elysia({ aot: env.RUNTIME === "bun" })
    .use(
      rateLimit({
        scoping: "local",
        duration: 60 * 1000, // 1 minute in milliseconds
        max: 500, // 500 requests per minute
        responseCode: 429,
        responseMessage: { status: "error", response: "rate-limit reached" },
        generator: async (req, server, { ip }: { ip: string }) =>
          Bun.hash(JSON.stringify(ip)).toString(),
      })
    )
    .use(cookie())
    .use(
      jwt({
        name: "jwt",
        secret: env.SECRET_KEY,
        sub: "auth",
        exp: "7d",
        schema: t.Object({
          name: t.String(),
        }),
      })
    )
    .derive(async ({ jwt, cookie: { auth } }) => {
      return {
        profile: await jwt.verify(auth.value),
      };
    })
    .use(logger())
    .use(cors({ origin: true }))
    .derive((ctx) => contextRequest(ctx.request));

export { CreateElysia };

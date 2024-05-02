import { rateLimit } from "elysia-rate-limit";

import { route as UserRoute } from "./user/route";
import { route as TestRoute } from "./test/route";
import { CreateElysia } from "../../utils/elysia";

const route = CreateElysia()
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
  .use(TestRoute)
  .group("/v1", (app) => app.use(UserRoute));
export { route as APIRoute };

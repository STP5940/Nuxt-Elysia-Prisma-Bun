import { route as UserRoute } from "./user/route";
import { route as TestRoute } from "./test/route";
import { CreateElysia } from "../../utils/elysia";

const route = CreateElysia()
  .use(TestRoute)
  .group("/v1", (app) => app.use(UserRoute));
export { route as APIRoute };

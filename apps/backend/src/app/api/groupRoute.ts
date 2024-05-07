import { route as TestRoute } from "./test/route";
import { route as SignRoute } from "./login/route";
import { route as UserRoute } from "./user/route";

import { CreateElysia } from "../../utils/elysia";

const route = CreateElysia()
  .use(TestRoute)
  .group("/v1", (app) => app.use(SignRoute))
  .guard(
    {
      beforeHandle({ set, profile }) {
        if (!profile) {
          set.status = 401;
          return { status: "error", response: "Unauthorized" };
        }
      },
    },
    (app) => app.group("/v1", (app) => app.use(UserRoute))
  );

export { route as app };

import { staticPlugin } from "@elysiajs/static";

import { env } from "./env";
import { app } from "./app";

app.use(
  staticPlugin({
    prefix: "",
  })
);

app.listen({ port: env.PORT });

export type App = typeof app;

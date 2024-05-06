import swagger from "@elysiajs/swagger";

import { env } from "../env";
import { app } from "./api/groupRoute";

app.use(
  swagger({
    exclude: ["/swagger"],
    autoDarkMode: true,
    documentation: {
      info: {
        title: `🦊 Elysia MVC [${env.NODE_ENV.toUpperCase()}]`,
        description: "Simple MVC pattern for ElysiaJS with User and Post",
        version: "1.0.0",
        license: {
          name: "MIT",
          url: "https://opensource.org/license/mit/",
        },
        contact: {
          name: "PunGrumpy",
          url: "https://pungrumpy.com",
        },
      },
      tags: [
        {
          name: "Test Connection",
          description: "Not Connected to Database",
        },
        {
          name: "User",
          description: "Connected to Database",
        },
      ],
    },
  })
);

export { app };

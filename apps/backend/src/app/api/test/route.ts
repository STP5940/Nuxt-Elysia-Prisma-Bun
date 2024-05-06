import { t } from "elysia";

import { env } from "../../../env";
import { CreateElysia } from "../../../utils/elysia";

const route = CreateElysia()
  // .get(
  //   "/",
  //   ({ set }) => {
  //     set.headers["Content-Type"] = "text/html";
  //     return `
  //     <div style='text-align: center; margin: 20%'>
  //       <h1>Web API Version: 1.0.0 </h1>
  //       <h3>Powered by Nuxt, Elysia, Bun</h3>
  //     </div>
  //     `;
  //   },
  //   {
  //     detail: {
  //       summary: "index",
  //       description: "Index Api",
  //       tags: ["Test Connection"],
  //     },
  //   }
  // )
  .get(
    "/nendoroid/skadi",
    async ({ set }) => {
      try {
        const users = {
          id: 1895,
          name: "Skadi",
          type: "Nendoroid",
          manufacture: "Goodsmile",
          cover: `http://localhost:${env.PORT}/assets/skadi.jpg`,
          license: {
            type: "approved",
            holder: "Hypergraph",
            from: "Arknights",
          },
        };

        return { status: "success", response: users };
      } catch (e) {
        set.status = 500;
        return { status: "error", response: "Internal Server Error" };
      }
    },
    {
      detail: {
        summary: "nendoroid skadi",
        description: "Api Test Connection",
        tags: ["Test Connection"],
      },
      response: {
        200: t.Object({
          status: t.String(),
          response: t.Object({
            id: t.Number(),
            name: t.String(),
            type: t.String(),
            manufacture: t.String(),
            cover: t.String(),
            license: t.Object({
              type: t.String(),
              holder: t.String(),
              from: t.String(),
            }),
          }),
        }),
        404: t.Object({
          status: t.String(),
          response: t.String(),
        }),
        500: t.Object({
          status: t.String(),
          response: t.String(),
        }),
      },
    }
  );

export { route };

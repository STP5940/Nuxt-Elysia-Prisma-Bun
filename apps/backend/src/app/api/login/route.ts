import { t } from "elysia";

import { app } from "../../../app";
import { CreateElysia } from "../../../utils/elysia";

const route = CreateElysia().get(
  "/sign/:name",
  async ({ jwt, cookie: { auth }, params }) => {
    auth.set({
      value: await jwt.sign(params),
      httpOnly: true,
      sameSite: true,
      maxAge: 7 * 86400,
      path: "/",
    });

    return { status: "success", response: auth.value };
  },
  {
    detail: {
      summary: "/v1/login",
      description: "Users Login",
      tags: ["Login"],
    },

    response: {
      200: t.Object({
        status: t.String(),
        response: t.String(),
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

// .get(
//   "/profile",
//   async ({ jwt, set, profile, cookie: { auth } }) => {
//     return profile;
//   },
//   {
//     detail: {
//       summary: "/v1/profile",
//       description: "Users Profile",
//       tags: ["Sign"],
//     },
//   }
// );

export { route };

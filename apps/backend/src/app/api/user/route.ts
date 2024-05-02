import { t } from "elysia";

import { env } from "../../../env";
import { CreateElysia } from "../../../utils/elysia";

import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../../../controller/user";

const route = CreateElysia()
  .get(
    "/users",
    async ({ set }) => {
      try {
        const users = await getAllUsers();
        if (!users) {
          set.status = 404;
          return { status: "error", response: "Not Found" };
        }
        return { status: "success", response: users };
      } catch (e) {
        set.status = 500;
        return { status: "error", response: "Internal Server Error" };
      }
    },
    {
      detail: {
        summary: "/v1/users",
        description: "Get Users All",
        tags: ["User"],
      },
      response: {
        200: t.Object({
          status: t.String(),
          response: t.Array(
            t.Object({
              id: t.Number(),
              name: t.String(),
              email: t.String(),
              posts: t.Array(
                t.Object({
                  id: t.Number(),
                  title: t.String(),
                  content: t.String(),
                  published: t.Boolean(),
                })
              ),
            })
          ),
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
  )

  .get(
    "/user/:id",
    async ({ params: { id }, set }) => {
      try {
        const user = await getUserById(id);
        if (!user) {
          set.status = 404;
          return { status: "error", response: "Not Found" };
        }
        return { status: "success", response: user };
      } catch (e) {
        set.status = 500;
        return { status: "error", response: "Internal Server Error" };
      }
    },
    {
      detail: {
        summary: "/v1/user/:id",
        description: "Get User By Id",
        tags: ["User"],
      },
      response: {
        200: t.Object({
          status: t.String(),
          response: t.Object({
            id: t.Number(),
            name: t.String(),
            email: t.String(),
            posts: t.Array(
              t.Object({
                id: t.Number(),
                title: t.String(),
                content: t.String(),
                published: t.Boolean(),
              })
            ),
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
  )

  .post(
    "/user",
    async ({ body, set }) => {
      try {
        const user = await createUser(body);
        return { status: "success", response: user };
      } catch (e) {
        set.status = 500;
        return { status: "error", response: "Internal Server Error" };
      }
    },
    {
      detail: {
        summary: "/v1/user",
        description: "Create User",
        tags: ["User"],
      },
      body: t.Object({
        name: t.String(),
        email: t.String(),
      }),
      response: {
        200: t.Object({
          status: t.String(),
          response: t.Object({
            id: t.Number(),
            name: t.String(),
            email: t.String(),
            posts: t.Array(
              t.Object({
                id: t.Number(),
                title: t.String(),
                content: t.String(),
                published: t.Boolean(),
              })
            ),
          }),
        }),
        500: t.Object({
          status: t.String(),
          response: t.String(),
        }),
      },
    }
  )

  .put(
    "/user/:id",
    async ({ params: { id }, body, set }) => {
      try {
        const user = await updateUser(id, body);
        return { status: "success", response: user };
      } catch (e) {
        set.status = 500;
        return { status: "error", response: "Internal Server Error" };
      }
    },
    {
      detail: {
        summary: "/v1/user/:id",
        description: "Update User By Id",
        tags: ["User"],
      },
      body: t.Object({
        name: t.String(),
        email: t.String(),
      }),
      response: {
        200: t.Object({
          status: t.String(),
          response: t.Object({
            id: t.Number(),
            name: t.String(),
            email: t.String(),
            posts: t.Array(
              t.Object({
                id: t.Number(),
                title: t.String(),
                content: t.String(),
                published: t.Boolean(),
              })
            ),
          }),
        }),
        500: t.Object({
          status: t.String(),
          response: t.String(),
        }),
      },
    }
  );

export { route };

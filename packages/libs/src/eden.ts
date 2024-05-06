import { edenTreaty } from "@elysiajs/eden";

import type { App } from "backend";
import { env } from "../../../apps/backend/src/env";

export const api = edenTreaty<App>(`${env.ELYSIA_API_URL}:${env.PORT}`, {
  $fetch: {
    credentials: "include", // Include credentials with the request
  },
});

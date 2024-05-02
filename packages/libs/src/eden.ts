import { edenTreaty } from "@elysiajs/eden";

import type { App } from "backend";
import { env } from "../../../apps/backend/src/env";

console.log(env.PORT);

export const api = edenTreaty<App>(`${env.ELYSIA_API_URL}:${env.PORT}`);

// import { Elysia } from 'elysia'
// import { CreateElysia } from "./utils/elysia";
// import { cors } from '@elysiajs/cors'
// import { staticPlugin } from '@elysiajs/static'
// import { swagger } from '@elysiajs/swagger'

// const app = CreateElysia()
//     .use(cors())
//     .use(swagger())
//     .use(
//         staticPlugin({
//             prefix: ''
//         })
//     )
//     .get('/nendoroid/skadi', () => ({
//         id: 1895,
//         name: 'Skadi',
//         type: 'Nendoroid',
//         manufacture: 'Goodsmile',
//         cover: `http://localhost:3000/assets/skadi.jpg`,
//         license: {
//             type: 'approved',
//             holder: 'Hypergraph',
//             from: 'Arknights'
//         }
//     }))
//     .listen(3000)

// export type App = typeof app

// console.log(
//     `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
// )

import { logger } from "logixlysia";
import { cors } from "@elysiajs/cors";
import { staticPlugin } from "@elysiajs/static";

import { env } from "./env";
import { app } from "./app";
import { CreateElysia } from "./utils/elysia";
import { contextRequest } from "./utils/contextRequest";

const server = CreateElysia()
  .derive((ctx) => contextRequest(ctx.request))
  .use(logger())
  .use(cors())
  .use(app)
  .use(
    staticPlugin({
      prefix: "",
    })
  )
  .get("/", ({ set }) => {
    set.headers["Content-Type"] = "text/html";

    return `
    <div style='text-align: center; margin: 20%'>
      <h1>Web API Version: 1.0.0 </h1>
      <h3>Powered by Nuxt, Elysia, Bun</h3>
    </div>
    `;
  });

server.listen({ port: env.PORT });

export type App = typeof server;

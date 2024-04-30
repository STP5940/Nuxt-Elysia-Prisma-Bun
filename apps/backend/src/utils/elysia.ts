import { Elysia, ElysiaConfig } from 'elysia';
import { env } from '../env';

const CreateElysia = () =>
  new Elysia({aot: env.RUNTIME === 'bun' });

export { CreateElysia };

// import { Elysia } from 'elysia';
// import { env } from '../env';

// const CreateElysia = (config?: ConstructorParameters<typeof Elysia>[0] | {}) =>
//   new Elysia({ ...config  || {}, aot: env.RUNTIME === 'bun' });

// export { CreateElysia };




module.exports = {
  apps: [
      {
          name: 'ElysiaApi',
          instances: 1,
          interpreter: "bun",
          autorestart: true,
          watch: true,
          max_memory_restart: '1G',

          script: "src/index.ts",
      }
  ]
}
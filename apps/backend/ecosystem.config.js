
module.exports = {
  apps: [
      {
          name: 'ElysiaApi',
          script: "src/index.ts",
          instances: '1',
          interpreter: "bun",
          autorestart: true,
          watch: true,
          max_memory_restart: '1G',
      }
  ]
}
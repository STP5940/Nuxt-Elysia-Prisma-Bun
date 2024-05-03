module.exports = {
    apps: [
        {
            name: 'NuxtUsers',
            port: '3001',
            exec_mode: 'cluster',
            instances: 1,
            script: './.output/server/index.mjs',

            env_production: {
                NODE_ENV: "production",
                PORT: 3001,
            },
        }
    ]
}
module.exports = {
    apps: [
        {
            name: 'NuxtUsers',
            port: '9000',
            exec_mode: 'cluster',
            instances: '1',
            script: './.output/server/index.mjs'
        }
    ]
}
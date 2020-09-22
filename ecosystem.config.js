module.exports = {
    apps: [{
        name: 'home-server',
        script: 'build/app.js',
        env: {
            "COMMON_VARIABLE": "true"
        },
        watch: '.'
    }],

    deploy: {
        production: {
            //key: "~/.ssh/id_rsa",
            user: 'ubuntu',
            host: '192.168.0.220',
            ref: 'origin/master',
            //repo : 'git@github.com:WemSitaki/skala_home.git',
            repo: 'https://github.com/WemSitaki/home-server.git',
            path: '/home/ubuntu/app',
            'pre-deploy-local': '',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
            'pre-setup': ''
        }
    }
};

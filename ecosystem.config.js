module.exports = {
    apps: [{
      name: 'HomeRouting',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ns.louis1001.ml',
        key: '~/Desktop/TheKeyToMyKingdom.pem',
        ref: 'origin/master',
        repo: 'git@github.com:louis1001/DynamicHome.git',
        path: '/home/ubuntu/Documents',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }
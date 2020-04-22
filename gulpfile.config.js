/**
* 远程服务器的配置文件
* "gulp": "4.0.0",
* "gulp-ssh": "0.7.0",
* https://www.jianshu.com/p/c30ff8592421
*
* 财产刑测试服务器：172.16.119.212   驻所测试服务器：172.16.119.213 重大案件: 192.168.99.250
* root/password
*/
const data = new Date()
const time = data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + data.getDate() + '-' + data.getHours() + '-' + data.getMinutes()
const remotePath = '/usr/local/webserver/nginx/' // 远程服务器的路径,结尾需要 / ( /usr/local/nginx/ 是nginx的源码 )
const projectName = 'vue-pro-temp' // 远程项目的名称
const historyProjectName = '2019-5-14-16-32' // 这个在回滚上一个版本的时候需要手动修改，滚动的版本号，例如：2019-4-17-20

const gulpConfig = {

  devServerSShConfig: {

    uploadFile: './dist/**',
    sshConfig: {
      //   remotePath:'/root/nginx_szcg/website/zhifa/dist',
      remotePath: remotePath + projectName, // 远程网站地址,会自动新建projectName文件夹
      ssh: { // 外网测试
        host: '172.16.119.20003',
        port: 22,
        username: 'root',
        password: 'password'
      },
      commands: [
        // 删除现有文件
        // `rm -rf /root/nginx_szcg/website/zhifa/ dist` ( 1.删除项目目录 )
        'rm -rf ' + remotePath + projectName + '/*'
      ],
      backups: [
        // cd /root/nginx_szcg/website/zhifa/dist/  ( 2.进入项目目录 )
        'cd ' + remotePath + projectName + '/',
        // tar -zcvf /root/nginx_szcg/website/zhifa/dist-copy/2019-4-17-3-59.tar.gz  ( 3.压缩备份，不会自动创建备份目录 )
        'tar -zcvf ' + remotePath + projectName + '-copy/' + time + '.tar.gz *'
      ],
      rollback: [
        // tar -zxvf /root/nginx_szcg/website/zhifa/dist-copy/2019-4-17-3-59.tar.gz -C /root/nginx_szcg/website/zhifa/dist/（4.解压恢复）
        'tar -zxvf ' + remotePath + projectName + '-copy/' + historyProjectName + '.tar.gz -C ' + remotePath + projectName + '/'
      ],
      // 只有修改nginx服务器的配置文件才需要重启nginx
      reload: [
        // /usr/local/webserver/nginx/sbin/nginx -s stop ( nginx -s stop  OR  nginx -s reload OR nginx -s start)
        remotePath + 'sbin/nginx -s stop',
        // /usr/local/webserver/nginx/sbin/nginx -c /usr/local/webserver/nginx/conf/nginx.conf
        remotePath + 'sbin/nginx -c /usr/local/webserver/nginx/conf/nginx.conf'
      ]
    }

  },

  proServerSShConfig: {

  }
}

module.exports = gulpConfig

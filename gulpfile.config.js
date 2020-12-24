/**
* 远程服务器的配置文件
* "gulp": "4.0.0",
* "gulp-ssh": "0.7.0",
* https://www.jianshu.com/p/c30ff8592421
*
* 广州公益诉讼3.0测试服务器：172.16.121.73:8808 => https://test8.hua-cloud.net:5508
* root/password
*/
const data = new Date()
const time = data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + data.getDate() + '-' + data.getHours() + '-' + data.getMinutes()
// const remoteNginxPath = '/usr/local/nginx/' // 远程服务器的路径,结尾需要 / ( /usr/local/nginx/ 是nginx的源码 )
const remoteProjectPath = '/opt/web_v3/' // 远程服务器项目的路径， 2.5版本在74:80服务器：/opt/web/dist   ; 3.0版本在73:8008服务器： /opt/web_v3/  8008
// const remotePath = '/usr/local/nginx/' // 远程服务器的路径,结尾需要 / ( /usr/local/nginx/ 是nginx的源码 )
// const projectName = 'gzmxweb' // 远程项目2.0的名称，相当于dist
const projectName = 'dist' // 远程项目2.5的名称，相当于dist
const historyProjectName = '2020-11-6-14-16' // 这个在回滚上一个版本的时候需要手动修改，滚动的版本号，例如：2019-4-17-20

const gulpConfig = {
  devServerSShConfig: {
    uploadFile: './dist/**',
    sshConfig: {
      //   remotePath:'/root/nginx_szcg/website/zhifa/dist',
      remotePath: remoteProjectPath + projectName, // 远程网站地址,会自动新建projectName文件夹
      ssh: { // 外网测试
        host: '172.16.121.1',
        port: 22,
        username: 'root',
        password: 'xxxx'
      },
      commands: [
        // 删除现有文件
        // `rm -rf /root/nginx_szcg/website/zhifa/ dist` ( 1.删除项目目录 )
        'rm -rf ' + remoteProjectPath + projectName + '/*'
      ],
      backups: [
        // cd /root/nginx_szcg/website/zhifa/dist/  ( 2.进入项目目录 )
        'cd ' + remoteProjectPath + projectName + '/',
        // tar -zcvf /root/nginx_szcg/website/zhifa/dist-copy/2019-4-17-3-59.tar.gz  ( 3.压缩备份，不会自动创建备份目录 )
        'tar -zcvf ' + remoteProjectPath + projectName + '-copy/' + time + '.tar.gz *'
      ],
      rollback: [
        // tar -zxvf /root/nginx_szcg/website/zhifa/dist-copy/2019-4-17-3-59.tar.gz -C /root/nginx_szcg/website/zhifa/dist/（4.解压恢复）
        'tar -zxvf ' + remoteProjectPath + projectName + '-copy/' + historyProjectName + '.tar.gz -C ' + remoteProjectPath + projectName + '/'
      ],
      // 只有修改nginx服务器的配置文件才需要重启nginx
      reload: [
        // /usr/local/webserver/nginx/sbin/nginx -s stop ( nginx -s stop  OR  nginx -s reload OR nginx -s start)
        // remoteNginxPath + 'sbin/nginx -s stop',

        // /usr/local/webserver/nginx/sbin/nginx -c /usr/local/webserver/nginx/conf/nginx.conf
        // remoteNginxPath + 'sbin/nginx -c /usr/local/nginx/conf/nginx.conf'

        'nginx -s reload' // 重启73服务器 etc/nginx/nginx.conf
      ]
    }

  },

  proServerSShConfig: {

  }
}

module.exports = gulpConfig

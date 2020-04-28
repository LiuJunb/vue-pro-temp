// 项目根目录下
// 相应的 express 和 compression 要装好
var express = require('express')
var compression = require('compression')
const proxyMiddlewar = require('http-proxy-middleware')
const proxyPath = 'http://172.16.119.213:9090' // 注意，这里只需要IP和端口号就可以了
const proxyOption = {
  target: proxyPath,
  changeOrigin: true
}
// 端口可以自己定义
var port = process.env.PORT || 8010
var app = express()
// 开启 gzip 压缩
app.use(compression())
// 反向代理(http://localhost:8010/station/xxxx -> proxyPath+'/station/xxxx' )
app.use('/station', proxyMiddlewar(proxyOption))
// 处理静态资源
app.use(express.static('../dist'))
module.exports = app.listen(port, function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
  console.log('Listening at http://172.168.10.29:' + port + '\n')
})

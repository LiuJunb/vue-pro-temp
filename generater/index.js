#!/usr/bin/env node
'use strict'
// https://www.jb51.net/article/150196.htm
// https://segmentfault.com/a/1190000018056163
// http://nodeca.github.io/argparse/#HelpFormatter.prototype.addText
// https://www.npmjs.com/package/argparse
const chalk = require('chalk')
const ejs = require('ejs')
const fs = require('fs')
const path = require('path')
// const readline = require('readline')
const {
  getDirPath,
  getComponentDirName,
  getComponentName,
  getComponentNameFirLow,
  getRouteLevel,
  getParentRouteName
} = require('./utils.js')
var ArgumentParser = require('argparse').ArgumentParser

// 获取绝对路径（就是这个文件所在的路径）
const resolveReallyPath = (...file) => path.resolve(__dirname, ...file)
// 绿色
const log = message => console.log(chalk.green(`${message}`))
// 蓝色
// const successLog = message => console.log(chalk.blue(`${message}`))
// 红色
const errorLog = error => console.log(chalk.red(`${error}`))

// 定义模板的参数
const templateData = {
  dirPath: '', // 新建组件的路劲 demo/demo1-btn
  name: '', // 组件的名称（小写） demo1-btn
  humpName: '', // 组件的名称（首字母大写并驼峰命名） Demo1Btn
  firLowName: '', // 组件的名称（首字母小写，其它字符首字符大写）demo1Btn
  routeLevel: '', // 组件路由的级别（1,2,3）
  parentRouteName: '' // 组件父亲路由的名称 main 、 ''  、

}
console.log(templateData)
var parser = new ArgumentParser({
  version: '0.0.1',
  addHelp: true,
  description: '自动生成vue组件的脚本'
})
// 终端用该指令时必须要传递参数
parser.addArgument(
  '-dir',
  {
    help: '组件存放的目录（根目录是views）',
    // nargs: 0, // 使用该指令不需要传递参数
    nargs: '?', // 使用该指令不需要传递参数 或者一个参数
    defaultValue: null // 没有使用该指令的默认值
  }
)
// 论据
parser.addArgument(
  ['-r', '--remove'],
  {
    help: '输入删除的组件的目录',
    defaultValue: null
  }
)
// console.dir(parser)
const args = parser.parseArgs()
console.dir(args) // { dir: null, remove:null }

// 监听控制台输入
// const unloadChar = '-'
// const loadedChar = '='
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// console.log('pageVue=', pageVue)
// 获取目标views文件夹的绝对路径
const generateViewsPath = resolveReallyPath('../src/views/' + args.dir)
// 获取目标store文件夹的绝对路径
const generateStorePath = resolveReallyPath('../src/store/modules/' + args.dir)
// 获取目标service文件夹的绝对路径
const generateServicePath = resolveReallyPath('../src/service/' + args.dir)
// console.log('generateViewsPath=', generateViewsPath)
// console.log('generateStorePath=', generateStorePath)
// console.log('generateServicePath=', generateServicePath)

// 递归新建目录（已存在不用管，不存在就新建）
function mkdirsSync(dirname) {
  // 存在,跳过
  if (fs.existsSync(dirname)) {
    return true
  } else {
    // 不存在,判断父亲文件夹是否存在？
    if (mkdirsSync(path.dirname(dirname))) {
      // 存在父亲文件，就直接新建该文件
      fs.mkdirSync(dirname)
      return true
    }
  }
}

// 生成文件（path：生成文件存放的路径，文件的字符串内容）
const generateFile = (path, data) => {
  if (fs.existsSync(path)) {
    errorLog(`${args.dir}组件已存在`)
    // 退出程序
    process.exit(0)
  }
  return new Promise((resolve, reject) => {
    // 写文件到指定的文件下
    fs.writeFile(path, data, 'utf8', err => {
      if (err) {
        errorLog(err.message)
        reject(err)
      } else {
        resolve(true)
      }
    })
  })
}

// 1.代表是生成文件
if (args.dir) {
  // 生成文件的程序开始执行
  // E:\liujun\workspace\vue-base\vue-pro-temp\generater
  // console.log('__dirname=', __dirname)
  // E:\liujun\workspace\vue-base\vue-pro-temp\generater\template\views\page.vue
  // resolveReallyPath('template/views/page.vue')

  // 1.判断arg.dir该文件夹是否存在
  // E:\liujun\workspace\vue-base\vue-pro-temp\src\views\demo1
  // E:\liujun\workspace\vue-base\vue-pro-temp\src\views\demo\demo2
  mkdirsSync(generateViewsPath)
  mkdirsSync(generateStorePath)
  mkdirsSync(generateServicePath)

  // 准备模板的参数
  // args.dir = demo1btn 或者 demo/demo1btn 或者 demo/demo1-btn
  templateData.dirPath = getDirPath(args.dir) // 新建组件的路劲
  templateData.name = getComponentDirName(args.dir) // demo1btn 或者  demo1btn 或者 demo1-btn
  templateData.humpName = getComponentName(args.dir) // Demo1btn 或者  Demo1btn 或者 Demo1Btn
  templateData.firLowName = getComponentNameFirLow(args.dir) // Demo1btn 或者  Demo1btn 或者 Demo1Btn
  templateData.firLowName = getComponentNameFirLow(args.dir) // Demo1btn 或者  Demo1btn 或者 Demo1Btn
  templateData.routeLevel = getRouteLevel(args.dir) // Demo1btn 或者  Demo1btn 或者 Demo1Btn
  templateData.parentRouteName = getParentRouteName(args.dir) // Demo1btn 或者  Demo1btn 或者 Demo1Btn

  // 2.生成vue组件(把template中对应的文件拷贝到项目对应的文件夹中)
  ejs.renderFile(resolveReallyPath('template/views/index.ejs'), { component: templateData }, {}, (err, str) => {
    if (!err) {
      generateFile(generateViewsPath + '/' + templateData.name + '.vue', str)
        .then(() => {
          log(generateViewsPath + '/' + templateData.name + '.vue生成完成')
        })
    }
  })
  // 3.生成组件的route
  ejs.renderFile(resolveReallyPath('template/views/route.ejs'), { component: templateData }, {}, (err, str) => {
    if (!err) {
      generateFile(generateViewsPath + '/route.js', str)
        .then(() => {
          log(generateViewsPath + '/route.js生成完成')
        })
    }
  })
  // 4.生成页面的store
  ejs.renderFile(resolveReallyPath('template/store/modules/index.ejs'), { component: templateData }, {}, (err, str) => {
    if (!err) {
      generateFile(generateStorePath + '/index.js', str)
        .then(() => {
          log(generateStorePath + '/index.js生成完成')
        })
    }
  })
  // 5.生成页面的store
  ejs.renderFile(resolveReallyPath('template/store/modules/types.ejs'), { component: templateData }, {}, (err, str) => {
    if (!err) {
      generateFile(generateStorePath + '/types.js', str)
        .then(() => {
          log(generateStorePath + '/types.js生成完成')
        })
    }
  })
  // 6.生成store对应的service
  ejs.renderFile(resolveReallyPath('template/service/index.ejs'), { component: templateData }, {}, (err, str) => {
    if (!err) {
      generateFile(generateServicePath + '/index.js', str)
        .then(() => {
          log(generateServicePath + '/index.js生成完成')
        })
    }
  })
// 2.代表是删除文件
} else if (args.remove) {

}

// rl.question(chalk.green('你想对谁说声hello？ '), answer => {
//   let i = 0
//   const time = setInterval(() => {
//     if (i > 10) {
//       clearInterval(time)
//       readline.cursorTo(process.stdout, 0, 0)
//       readline.clearScreenDown(process.stdout)
//       console.log(`hello ${answer}`)
//       otherQuestion()
//       //  process.exit(0)
//       return
//     }
//     readline.cursorTo(process.stdout, 0, 1)
//     readline.clearScreenDown(process.stdout)
//     renderProgress('saying hello', i)
//     i++
//   }, 200)
// })

// function renderProgress(text, step) {
//   const PERCENT = Math.round(step * 10)
//   const COUNT = 2
//   const unloadStr = new Array(COUNT * (10 - step)).fill(unloadChar).join('')
//   const loadedStr = new Array(COUNT * (step)).fill(loadedChar).join('')
//   process.stdout.write(`${text}:【${loadedStr}${unloadStr}|${PERCENT}%】`)
// }

// function otherQuestion() {
//   rl.question(chalk.green('你想对谁说声hello2？ '), answer => {
//     process.exit(0)
//   })
// }

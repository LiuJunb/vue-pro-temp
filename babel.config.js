module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // polyfill 配置ie兼容
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3
      }
    ]
  ],
  plugins: [
    // polyfill 配置ie兼容
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: false
      }
    ],
    // element-ui按需加载
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    // 代码高亮插件
    ['prismjs', {
      languages: ['javascript', 'css', 'markup', 'json', 'bash', 'sass'],
      plugins: ['line-numbers', 'file-highlight', 'highlight-keywords', 'normalize-whitespace'],
      theme: 'okaidia',
      css: true
    }]
  ]
}

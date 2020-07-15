<template>
  <!-- scroll-div -->
  <div
    class="horizontal-scroll">
    <pre class="code-h line-numbers">
      <code
        ref="codeBlock"
        :class="'language-' + lang">
        <slot></slot>
      </code>
    </pre>
  </div>
</template>

<script>
import Prism from 'prismjs'
// 选择主题
import 'prismjs/themes/prism.css'
// import 'prismjs/themes/prism-funky.css'
// import 'prismjs/themes/prism-dark.css'
// import 'prismjs/themes/prism-coy.css'

Prism.plugins.NormalizeWhitespace.setDefaults({
  'remove-trailing': true,
  'remove-indent': true,
  'left-trim': true,
  'right-trim': true,
  'break-lines': 8888,
  'remove-initial-line-feed': false
})

export default {
  name: 'CodeH',
  props: {
    lang: {
      default: '',
      type: String
    },
    content: {
      default: '',
      type: String
    }
  },
  data() {
    return {}
  },
  watch: {
    content(v) {
      this.$ref.codeBlock.innerText = this.normalizeContent(v)
      Prism.highlightAll()
    }
  },
  mounted() {
    if (this.content) {
      // 给 codeBlock 组件 插入规范化后的内容
      this.$refs.codeBlock.innerHTML = this.normalizeContent(this.content)
    }
    // 高亮代码
    Prism.highlightAll()
  },
  methods: {
    // 规格化 内容
    normalizeContent(v) {
      const content = v.split('\n')
        .map(c => {
          c = c.replace(/</g, '&lt;')
          c = c.replace(/>/g, '&gt;')
          c = c.replace(/\\\{/g, '{')
          c = c.replace(/\\\}/g, '}')
          return c
        })
        .join('\n')
      return content
    }
  }
}
</script>
<style lang="scss">
  .horizontal-scroll{
    overflow: scroll;
    // 一个屏幕
    max-height: 800px;
  }
  .line-numbers-rows {
    span {
      line-height: 1.5;
    }
  }
</style>

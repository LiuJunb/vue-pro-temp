import { shallowMount } from '@vue/test-utils'

import HelloWorld from '@/components/HelloWorld.vue'
describe('HelloWorld.vue', () => {
  let wrapper = null
  const msg = 'new message'
  const mocks = {
    $router: {
      push: jest.fn()
    }
  }

  beforeEach(() => {
    // shallowMount创建的组件，只关注当前的组件，不应该关注其子组件的情况
    wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
      slots: {
        default: '<section class="content">What an awesome section</section>'
      },
      mocks: mocks // 将全局属性存根， 然后就可以通过 wrapper.vm.$router 访问 push
    })
  })
  afterEach(() => {
    wrapper.destroy()
  })

  describe('1.测试渲染', () => {
    it('renders props.msg when passed', () => {
      expect(wrapper.text()).toMatch(msg)
    })
  })
  describe('2.测试渲染之后生成快照', () => {
    // it('测试渲染之后生成快照', () => {
    // expect(wrapper.vm.$el).toMatchSnapshot() // 会生把渲染之后的结果，生成一个文件
    // })
  })
  describe('3.测试DOM结构', () => {
    // exists()：断言 Wrapper 或 WrapperArray 是否存在。
    // test('不存在img', () => {
    //   expect(wrapper.findAll('img').exists()) // https://vue-test-utils.vuejs.org/zh/api/wrapper/#exists
    //     .toBeFalsy()
    // })

    // 断言 Wrapper 包含 TestMount 子组件。
    // it('TestDemo组件不为空', () => {
    //   // https://vue-test-utils.vuejs.org/zh/api/wrapper/#findcomponent
    //   const testMount = wrapper.findComponent(TestMount) // => finds TestDemo by component instance
    //   expect(testMount.exists())
    //     .toBe(true)
    // })

    // attributes()：返回 Wrapper DOM 节点的特性对象
    // classes()：返回 Wrapper DOM 节点的 class 组成的数组
    // it('TestDemo组件有 test-demo 类', () => {
    // console.log(wrapper.find('.test-demo'))
    // console.log(wrapper.find('.test-demo').attributes()) // { class: 'test-demo btn', style: 'width: 100%;' }
    // console.log(wrapper.find('.test-demo').classes()) // [ 'test-demo', 'btn' ]

    // expect(wrapper.find('.test-demo').attributes().class)     // // https://vue-test-utils.vuejs.org/zh/api/wrapper/#attributes
    //   .toContain('btn')

    // expect(wrapper.find('.test-demo').classes()) // https://vue-test-utils.vuejs.org/zh/api/wrapper/#classes
    //   .toContain('test-demo')

    // })
  })
  describe('4.测试样式', () => {
    // test('测试样式', () => {
    //   expect(wrapper.find('.test-demo').attributes().style)
    //     .toContain('width: 100%')
    // })
  })
  describe('5.测试Props', () => {
    // test('测试Props', () => {
    //   wrapper.setProps({ msg: 'liujun-test-demo' })
    //   expect(wrapper.props().msg)
    //     .toBe('liujun-test-demo')
    // })
  })
  describe('6.测试自定义事件evnet', () => {

    // 使用监听的方法，不会提示过期
    // test('测试自定义事件evnet', () => {
    //   // 创建mock函数
    //   const spyHandleTitleClick = jest.spyOn(wrapper.vm, 'handleTitleClick')
    //   // const spyAxiosRequest = jest.spyOn(axios, 'get');
    //   // 触发按钮的点击事件
    //   wrapper.find('.title').trigger('click')
    //   // 判断该方法是否已经被调用
    //   expect(spyHandleTitleClick).toHaveBeenCalled()
    //   // 获取判断数据是否发生改变
    //   // expect(spyAxiosRequest).toBeCalledWith(axiosRequestURL, axiosRequestParams);
    // })

    // 测试是否触发了emit函数
    // test('测试自定义事件evnet', () => {
    //   const spyEmit = jest.spyOn(wrapper.vm, '$emit')
    //   wrapper.find('.title').trigger('click')
    //   expect(spyEmit).toHaveBeenCalled()
    //   expect(spyEmit).toHaveBeenCalledTimes(2)
    // })

  })
  describe('7.测试计算属性computed', () => {
    // test('1.测试formatNunber', () => {
    //   wrapper.setData({ number: 10 })
    //   expect(wrapper.vm.formatNumber).toBe('数值=10') // formatNumber 是计算属性
    // })

    // test('2.测试formatNunber', () => {
    //   wrapper.find('.btn-number').trigger('click')
    //   expect(wrapper.vm.formatNumber).toBe('数值=2')
    // })
  })
  describe('8.测试监听器watch', () => {
    // test('测试watch number', (done) => {
    // const spy = jest.spyOn(console, 'log')
    // wrapper.vm.number = 20 // change number

    // watch number
    // watch中的方法被Vue**推迟**到了更新的下一个循环队列中去异步执行，如果这个watch被触发多次，只会被推送到队列一次。
    // 这种缓冲行为可以有效的去掉重复数据造成的不必要的性能开销。
    // 所以当我们设置了inputValue为'ok'之后，watch中的方法并没有立刻执行

    // wrapper.vm.$nextTick(() => {
    //   expect(spy)
    //     .toBeCalled()
    //   // 清除数据
    //   spy.mockClear()
    //   done()
    // })
    // })
  })
  // jest.mock('axios')
  // 在测试时要避免一切的依赖，将所有的依赖都mock掉
  describe('9.测试方法methcd', () => {

    // test('测试 handleTitleClick 方法methcd,推荐', () => {
    //   // 创建mock函数
    //   const spyHandleTitleClick = jest.spyOn(wrapper.vm, 'handleTitleClick')
    //   // 触发按钮的点击事件
    //   wrapper.find('.title').trigger('click')
    //   // 判断该方法是否已经被调用
    //   expect(spyHandleTitleClick)
    //     .toHaveBeenCalled()
    // })

  })

  // https://vue-test-utils.vuejs.org/zh/api/wrapper/#findall
  describe('10.测试插槽slot(其实就是测试dom)', () => {
    // test('测试header插槽slot', () => {
    //   const header = wrapper.find('header') // 查找header标签
    //   expect(header.text()).toBe('What an awesome header')
    // })
    // test('测试default插槽slot', () => {
    //   expect(wrapper.findAll('.content').exists())
    //     .toBeTruthy()
    // })
    // test('测试footer插槽slot', () => {
    //   expect(wrapper.find('footer').exists())
    //     .toBeTruthy()
    // })
  })
})

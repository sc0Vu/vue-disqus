import Vue from 'vue'
import Disqus from '@/Disqus.vue'

describe('Disqus.vue', () => {
  it('name is disqus', () => {
    expect(typeof Disqus.name).toBe('disqus')
  })

  it('has a methed named disqus', () => {
    expect(typeof Disqus.methods.disqus).toBe('function')
  })

  it('sets the correct props length', () => {
    var defaultProps = Disqus.props
    expect(defaultProps.length).toBe(5)
  })

  it('correctly sets props', () => {
    var Construct = Vue.extend(Disqus)
    var vm = new Construct({ propsData: {
      shortname: 'vue-disqus',
      url: 'https://google.com',
      identifier: 'vue-disqus test',
      title: 'vue-disqus test',
      categoryId: '123'
    } }).$mount()
    expect(vm.shortname).toBe('vue-disqus')
    expect(vm.url).toBe('https://google.com')
    expect(vm.identifier).toBe('vue-disqus test')
    expect(vm.title).toBe('vue-disqus test')
    expect(vm.categoryId).toBe('123')
  })
})

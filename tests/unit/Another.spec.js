import { shallow } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('Another.vue', () => {
  it('Dup', () => {
    const wrapper = shallow(HelloWorld)

    // should have mocked `Test` by default from jest.config.js?
    console.log(wrapper.html())
  })
})

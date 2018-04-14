import { shallow } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('Another.vue', () => {
  it('Dup', () => {
    const wrapper = shallow(HelloWorld)

    console.log(wrapper.html())
  })
})

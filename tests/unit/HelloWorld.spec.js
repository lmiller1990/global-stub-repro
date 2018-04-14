import { shallow } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
const VueTestUtils = require('@vue/test-utils')

// this works, if done in the same file as the test.
VueTestUtils.config.stubs['Test'] = '<div>T</div>'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallow(HelloWorld, {
    })

    console.log(wrapper.html())
  })
})

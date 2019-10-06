import React from 'react'
import renderer from 'react-test-renderer'

import Notify from '../Notify'

describe("NotifyComponent", () => {
    test('snapshot renders notify component', () => {
        const component = renderer.create(<Notify />)
        let notify = component.toJSON()
        expect(notify).toMatchSnapshot()
    })
})
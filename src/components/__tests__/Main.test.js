import React from 'react'
import renderer from 'react-test-renderer'

import Main from '../Main'

describe("MainComponent", () => {
    test('snapshot renders main component', () => {
        const component = renderer.create(<Main />)
        let main = component.toJSON()
        expect(main).toMatchSnapshot()
    })
})
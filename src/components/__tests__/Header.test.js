import React from 'react'
import renderer from 'react-test-renderer'

import Header from '../Header'

describe("HeaderComponent", () => {
    test('snapshot renders header component', () => {
        const component = renderer.create(<Header />)
        let header = component.toJSON()
        expect(header).toMatchSnapshot()
    })
})
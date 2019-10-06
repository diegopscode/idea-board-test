import React from 'react'
import renderer from 'react-test-renderer'

import Card from '../Card'

describe("CardComponent", () => {
    test('snapshot renders card component', () => {
        const component = renderer.create(<Card title="Teste" text="..." />)
        let card = component.toJSON()
        expect(card).toMatchSnapshot()
    })
})
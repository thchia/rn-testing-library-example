import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import Counter from '../Counter'

fireEvent['press'] = (node, init) => {
  fireEvent.mouseDown(node, init)
  fireEvent.mouseUp(node, init)
}

describe('Counter', () => {
  it('works', () => {
    const { getByText } = render(<Counter />)
    getByText('0')

    const button = getByText('Press')
    fireEvent.press(button)

    getByText('1')
  })
})

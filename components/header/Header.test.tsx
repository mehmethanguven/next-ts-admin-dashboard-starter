import React from 'react'
import { render } from '@testing-library/react'
import Header from './index'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))
describe('Header test', () => {
  it('should to match snapshot', () => {
    const { asFragment } = render(<Header title="test" />)
    expect(asFragment()).toMatchSnapshot()
  })
})

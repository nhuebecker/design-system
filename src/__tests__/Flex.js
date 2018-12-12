import React from 'react'
import renderer from 'react-test-renderer'
import { Flex } from '..'

describe('Flex', () => {
  test('renders', () => {
    const flex = renderer.create(<Flex />).toJSON()
    expect(flex).toMatchSnapshot()
  })

  test('align prop', () => {
    const flex = renderer.create(<Flex align="center" />).toJSON()
    expect(flex).toMatchSnapshot()
    expect(flex).toHaveStyleRule('align-items', 'center')
  })

  test('justify prop', () => {
    const flex = renderer.create(<Flex justify="space-between" />).toJSON()
    expect(flex).toMatchSnapshot()
    expect(flex).toHaveStyleRule('justify-content', 'space-between')
  })

  test('wrap prop', () => {
    const flex = renderer.create(<Flex wrap />).toJSON()
    expect(flex).toMatchSnapshot()
    expect(flex).toHaveStyleRule('flex-wrap', 'wrap')
  })

  test('direction prop', () => {
    const flex = renderer.create(<Flex flexDirection="column" />).toJSON()
    expect(flex).toMatchSnapshot()
    expect(flex).toHaveStyleRule('flex-direction', 'column')
  })
})

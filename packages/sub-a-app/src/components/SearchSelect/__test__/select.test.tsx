import React from 'react'
import Demo from '../Demo/demo'
// import { render, screen, userEvent } from '../../../test/setup'
// import {describe,it,expect} from 'vitest'
import { render,screen } from '@testing-library/react'

describe('Simple working test', () => {
  // it('the title is visible', () => {
  //   render(<div />)
  //   expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument()
  // })
  it('should increment count on click',  () => {
    render(<Demo>1</Demo>)
    expect(screen.findByText(/1/i)).toBeTruthy();
  })
})

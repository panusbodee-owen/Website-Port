import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import App from './App'

describe('Portfolio app', () => {
  it('renders home page hero content', () => {
    window.history.pushState({}, '', '/')
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /Panusbodee Pisutsuwimon/i }),
    ).toBeInTheDocument()
  })

  it('renders work detail route', () => {
    window.history.pushState({}, '', '/works/project-management')
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /Lead Project \(PM\) \/ Project Management/i,
      }),
    ).toBeInTheDocument()
  })
})

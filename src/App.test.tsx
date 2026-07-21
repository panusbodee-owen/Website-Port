import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import App from './App'

describe('Portfolio app', () => {
  it('renders home page hero content', () => {
    window.location.hash = '#/'
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /Panusbodee Pisutsuwimon/i }),
    ).toBeInTheDocument()
  })

  it('renders work detail route', () => {
    window.location.hash = '#/works/project-management'
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /Lead Project \(PM\) \/ Project Management/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders about page', () => {
    window.location.hash = '#/about'
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /The story behind the work\./i }),
    ).toBeInTheDocument()
  })

  it('renders personal origin story on about page', () => {
    window.location.hash = '#/about'
    render(<App />)

    expect(
      screen.getAllByText(
        /started with an opportunity introduced through my university faculty/i,
      ).length,
    ).toBeGreaterThan(0)
  })

  it('renders a visual archive on the home page', () => {
    window.location.hash = '#/'
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /Visual archive for work in motion\./i }),
    ).toBeInTheDocument()
    expect(
      screen.getByAltText(/temporary pass and coffee during an early workday/i),
    ).toBeInTheDocument()
  })

  it('renders process and systems images on the about page', () => {
    window.location.hash = '#/about'
    render(<App />)

    expect(screen.getByAltText(/process flow mapped on a whiteboard/i)).toBeInTheDocument()
    expect(
      screen.getByAltText(/terminal session showing technical tools and logs/i),
    ).toBeInTheDocument()
  })
})

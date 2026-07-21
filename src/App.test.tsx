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
    expect(screen.getByAltText(/legacy project image from the original framer portfolio/i)).toBeInTheDocument()
  })

  it('renders interactive storytelling elements on the home page', () => {
    window.location.hash = '#/'
    render(<App />)

    expect(screen.getByLabelText(/story progress/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/interactive hero scene/i)).toBeInTheDocument()
    expect(screen.getByTestId('ambient-backdrop')).toBeInTheDocument()
    expect(screen.queryByText(/scene responds to motion/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/minimal interactive/i)).not.toBeInTheDocument()
  })

  it('renders process and systems images on the about page', () => {
    window.location.hash = '#/about'
    render(<App />)

    expect(screen.getByAltText(/legacy process image from the original framer portfolio/i)).toBeInTheDocument()
    expect(
      screen.getByAltText(/legacy technical and interface image from the original framer portfolio/i),
    ).toBeInTheDocument()
  })

  it('uses legacy framer assets for the home visual archive', () => {
    window.location.hash = '#/'
    render(<App />)

    const image = screen.getByAltText(/legacy project image from the original framer portfolio/i)
    expect(image).toHaveAttribute('src', expect.stringContaining('framerusercontent.com/images'))
  })

  it('uses legacy framer assets for work case studies', () => {
    window.location.hash = '#/works/project-management'
    render(<App />)

    expect(
      screen.getByAltText(/Lead Project \(PM\) \/ Project Management/i),
    ).toHaveAttribute(
      'src',
      expect.stringContaining('framerusercontent.com/images/dTRcdFRu3rTiJJGCQVUxodknYY'),
    )
  })

  it('renders interactive case study cues on work detail pages', () => {
    window.location.hash = '#/works/project-management'
    render(<App />)

    expect(screen.getByLabelText(/story progress/i)).toBeInTheDocument()
    expect(screen.getByText(/scroll to trace the case/i)).toBeInTheDocument()
  })
})

import { render } from '@testing-library/react'
import ContactPage from '@/pages/contact/ContactPage'

// Mock the child components
jest.mock('@/components/contact/ContactHero', () => {
  return function ContactHero() {
    return <div data-testid="contact-hero">Contact Hero</div>
  }
})

jest.mock('@/components/contact/ContactForm', () => {
  return function ContactForm() {
    return <div data-testid="contact-form">Contact Form</div>
  }
})

describe('ContactPage', () => {
  it('renders without crashing', () => {
    const { container } = render(<ContactPage />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders main element', () => {
    const { container } = render(<ContactPage />)
    const main = container.querySelector('main')
    expect(main).toBeInTheDocument()
  })
})
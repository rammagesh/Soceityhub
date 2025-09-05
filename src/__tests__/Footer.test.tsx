import { render } from '@testing-library/react'
import { Footer } from '@/components/footer'

// Mock Next.js components
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />
}))

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: any) => <a href={href}>{children}</a>
}))

describe('Footer', () => {
  it('renders without crashing', () => {
    const { container } = render(<Footer />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('contains navigation elements', () => {
    const { container } = render(<Footer />)
    const nav = container.querySelector('nav')
    expect(nav).toBeInTheDocument()
  })

  it('contains email input', () => {
    const { container } = render(<Footer />)
    const emailInput = container.querySelector('input[type="email"]')
    expect(emailInput).toBeInTheDocument()
  })
})
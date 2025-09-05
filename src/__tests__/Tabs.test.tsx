import { render } from '@testing-library/react'
import Tabs from '@/components/user/tabs'

// Mock Next.js components
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />
}))

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: any) => <a href={href}>{children}</a>
}))

describe('Tabs', () => {
  it('renders without crashing', () => {
    const { container } = render(<Tabs />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    const { container } = render(<Tabs />)
    const links = container.querySelectorAll('a')
    expect(links).toHaveLength(4)
  })

  it('has fixed positioning class', () => {
    const { container } = render(<Tabs />)
    const tabsContainer = container.firstChild as HTMLElement
    expect(tabsContainer).toHaveClass('fixed')
  })
})
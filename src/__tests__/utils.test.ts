// Basic utility functions tests
describe('Basic JavaScript functionality', () => {
  it('should handle array operations correctly', () => {
    const arr = [1, 2, 3, 4, 5]
    const filtered = arr.filter(n => n > 3)
    expect(filtered).toEqual([4, 5])
  })

  it('should handle string operations correctly', () => {
    const str = 'Hello World'
    expect(str.toLowerCase()).toBe('hello world')
    expect(str.includes('World')).toBe(true)
  })

  it('should handle object operations correctly', () => {
    const obj = { name: 'Test', age: 25 }
    expect(Object.keys(obj)).toEqual(['name', 'age'])
    expect(obj.name).toBe('Test')
  })
})
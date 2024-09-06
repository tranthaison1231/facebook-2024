import { cn } from './cn'

describe('cn utility function', () => {
  it('should combine multiple class names', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2')
  })

  it('should handle conditional class names', () => {
    expect(
      cn('class1', 'class3', {
        class2: false
      })
    ).toBe('class1 class3')
  })

  it('should merge Tailwind CSS classes correctly', () => {
    expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500')
  })

  it('should handle arrays of class names', () => {
    expect(cn(['class1', 'class2'], 'class3')).toBe('class1 class2 class3')
  })

  it('should handle undefined and null values gracefully', () => {
    expect(cn('class1', undefined, null, 'class2')).toBe('class1 class2')
  })
})

export const callAll = (...fns: ((...args: unknown[]) => void)[]) => (
  ...args: unknown[]
) => fns.forEach(fn => typeof fn === 'function' && fn(...args))

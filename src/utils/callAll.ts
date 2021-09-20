export const callAll = (...fns: ((...args: unknown[]) => void)[]) => (
  ...args: unknown[]
): void => fns.forEach(fn => typeof fn === 'function' && fn(...args))

import { styleFn } from 'styled-system'

export const createBaseStyles = (): styleFn => () => ({
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  cursor: 'pointer',
  hyphens: 'auto',
  alignItems: 'center',
  padding: 10,
})

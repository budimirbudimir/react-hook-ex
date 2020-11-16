import React from 'react'

import { StyledSelect } from '../styles/Register.styles'

const CustomSelect = React.forwardRef<
  HTMLSelectElement,
  Omit<JSX.IntrinsicElements['select'], 'ref'>
>(({ children, ...rest }, ref) => (
  <StyledSelect {...rest} ref={ref}>
    {children}
  </StyledSelect>
))

export default CustomSelect

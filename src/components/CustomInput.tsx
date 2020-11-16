import React from 'react'

import { StyledInput } from '../styles/Register.styles'

const CustomInput = React.forwardRef<
  HTMLInputElement,
  Omit<JSX.IntrinsicElements['input'], 'ref'>
>((props, ref) => <StyledInput {...props} ref={ref} />)

export default CustomInput

import React from 'react'

import { StyledInput, StyledRadioWrapper } from '../styles/Register.styles'

const CustomRadio = React.forwardRef<
  HTMLInputElement,
  Omit<JSX.IntrinsicElements['input'], 'ref'>
>((props, ref) => (
  <StyledRadioWrapper>
    <StyledInput {...props} type="radio" ref={ref} />
    {props.value}
  </StyledRadioWrapper>
))

export default CustomRadio

import React from 'react'

import { StyledError } from '../styles/Register.styles'

interface ErrorProps {
  msg: string
}

const Error = ({ msg }: ErrorProps) => <StyledError>{msg}</StyledError>

export default Error

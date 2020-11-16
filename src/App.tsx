import React from 'react'

import RegisterForm from './features/register/Register'

import { StyledApp, StyledAppHeader } from './styles/App.styles'
import { GlobalStyle } from './styles/Global.styles'

const App = () => (
  <>
    <GlobalStyle />

    <StyledApp>
      <StyledAppHeader>
        <RegisterForm />
      </StyledAppHeader>
    </StyledApp>
  </>
)

export default App

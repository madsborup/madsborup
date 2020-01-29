import React from 'react'
import { Header } from './Header'
import { Wrapper } from './Wrapper'

const Layout: React.FC = ({children}) => {

  return (
    <div>
      <Header title="Mads Borup Petersen" />
      <Wrapper>
      {children}
      </Wrapper>
    </div>
  )
}

export default Layout;
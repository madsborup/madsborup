import React, { ReactElement } from "react"
import { createGlobalStyle } from "styled-components"
import tokens from "./designSystem/tokens"
import DesignSystemProvider from "./designSystem/DesignSystemProvider"
import Header from "./Header"
import Footer from "./Footer"
import Wrapper from "./Wrapper"

interface Props {
  children: React.ReactNode
}

const GlobalStyle = createGlobalStyle`
    * {
        text-rendering: optimizelegibility;
        margin: 0;
        padding: 0;
        -webkit-appearance: none;
        -webkit-font-smoothing: auto;
        -webkit-font-smoothing: antialiased;
    }

    html {
        font-family: ${tokens.font.family};
        background-color: ${tokens.colors.background};
    }

    body {
        color: ${tokens.colors.text};
        font-size: ${tokens.font.size.regular};
        line-height: 1.6;
    }
`

export default ({
  children,
}: Props): ReactElement<typeof DesignSystemProvider> => {
  return (
    <DesignSystemProvider>
      <GlobalStyle />
      <Header title="Mads Borup Petersen" />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </DesignSystemProvider>
  )
}

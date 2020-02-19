import React, { ReactElement } from "react"
import { createGlobalStyle } from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import tokens from "./designSystem/tokens"
import DesignSystemProvider from "./designSystem/DesignSystemProvider"
import Header from "./Header"
import Footer from "./Footer"

interface Props {
  children: React.ReactNode
}

const Wrapper = styled.div`
  max-width: ${tokens.CONTENT_WIDTH}px;
  margin: 0 auto;
`

const Content = styled.div`
  margin-top: calc(${tokens.spacing.large}px * 2);
  padding: 0 ${tokens.spacing.xsmall}px;
`

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        -webkit-appearance: none;
        -webkit-font-smoothing: auto;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizelegibility;
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
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
      <Footer />
    </DesignSystemProvider>
  )
}

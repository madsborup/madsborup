import React, { ReactElement } from "react"
import { createGlobalStyle } from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import tokens from "./designSystem/tokens"
import DesignSystemProvider from "./designSystem/DesignSystemProvider"
import Link from "./designSystem/Link"
import Head from "./Head"
import Header from "./Header"
import Footer from "./Footer"

interface Props {
  children: React.ReactNode
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 ${tokens.spacing.medium}px;
`

const Content = styled.div`
  max-width: ${tokens.WRAPPER_WIDTH}px;
  margin: 0 auto;
`

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        -webkit-appearance: none;
        -webkit-font-smoothing: auto;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizelegibility;
        box-sizing: border-box;
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
      <Head />
      <GlobalStyle />
      <Header title="Mads Borup Petersen" />
      <Wrapper>
        <Content>
          <Link to="/projects/" withArrow="backward">
            all projects
          </Link>
          {children}
        </Content>
      </Wrapper>
      <Footer />
    </DesignSystemProvider>
  )
}

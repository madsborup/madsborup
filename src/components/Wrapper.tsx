import React from "react"
import styled from "styled-components"
import tokens from "./designSystem/tokens"

const StyledWrapper = styled.div`
  max-width: ${tokens.CONTENT_WIDTH}px;
  margin: 0 auto;
`

const Content = styled.div`
  margin-top: calc(${tokens.spacing.xlarge}px * 2);
  padding: 0 ${tokens.spacing.xsmall}px;
`

const Wrapper: React.FC = ({ children }) => {
  return (
    <StyledWrapper>
      <Content>{children}</Content>
    </StyledWrapper>
  )
}

export default Wrapper

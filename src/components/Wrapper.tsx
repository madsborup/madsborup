import React from "react"
import styled from "styled-components"
import tokens from "./designSystem/tokens"

const StyledWrapper = styled.div`
  margin-top: calc(${tokens.spacing.large}px * 2);
  padding: 0 ${tokens.spacing.xsmall}px;
`

const Content = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
`

const Wrapper: React.FC = ({ children }) => {
  return (
    <StyledWrapper>
      <Content>{children}</Content>
    </StyledWrapper>
  )
}

export default Wrapper

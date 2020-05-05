import React from "react"
import styled from "styled-components"
import tokens from "./designSystem/tokens"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${tokens.spacing.medium}px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: ${tokens.WRAPPER_WIDTH}px;
  margin-top: ${tokens.spacing.large}px;
`

const Wrapper: React.FC = ({ children }) => {
  return (
    <StyledWrapper>
      <Content>{children}</Content>
    </StyledWrapper>
  )
}

export default Wrapper

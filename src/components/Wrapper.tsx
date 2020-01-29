import React from "react"
import styled from "styled-components"
import tokens from "./designSystem/tokens"

const StyledWrapper = styled.div`
  max-width: ${tokens.CONTENT_WIDTH}px;
  margin: 0 auto;
`

export const Wrapper: React.FC = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>
}

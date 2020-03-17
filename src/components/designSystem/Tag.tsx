import styled from "styled-components"
import tokens from "./tokens"

export default styled.div`
  padding: 0 ${tokens.spacing.xsmall}px;
  margin-right: ${tokens.spacing.xxsmall}px;
  margin-bottom: ${tokens.spacing.xxsmall}px;
  border-radius: 2px;
  background: ${tokens.colors.headings};
  color: ${tokens.colors.white};
  font-size: ${tokens.font.size.small};
  font-weight: 500;
  cursor: default;
`

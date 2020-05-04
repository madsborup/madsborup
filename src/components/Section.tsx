import React from 'react'
import styled from 'styled-components'
import tokens from './designSystem/tokens'

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${tokens.spacing.xlarge}px;
  width: 100%;
  max-width: ${tokens.CONTENT_WIDTH}px;
`;

const Section: React.FC = ({children}) => {
  return (
    <StyledSection>
      {children}
    </StyledSection>
  )
}

export default Section

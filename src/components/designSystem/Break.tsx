import styled from 'styled-components'
import tokens from './tokens'

export default styled.hr` 
  color: ${tokens.colors.border};
  border: none;
  border-top: 1px solid ${tokens.colors.border};
  margin-bottom: ${tokens.spacing.medium}px;
`;
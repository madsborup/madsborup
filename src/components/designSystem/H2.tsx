import styled from 'styled-components'
import tokens from './tokens'

export default styled.h2`
  font-size: ${tokens.font.size.h2};
  color: ${tokens.colors.headings};
  margin-bottom: ${tokens.spacing.small}px;
  line-height: 1;
`;
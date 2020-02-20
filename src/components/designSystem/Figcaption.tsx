import styled from 'styled-components'
import tokens from './tokens'

export default styled.figcaption`
  font-size: ${tokens.font.size.regular};
  color: ${tokens.colors.textMuted};
  margin-top: ${tokens.spacing.xxsmall}px;
`;
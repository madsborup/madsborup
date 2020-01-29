import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import tokens from './tokens'

export const Link = styled(GatsbyLink)`
  color: ${tokens.colors.secondary};
  text-decoration: none;
  font-size: ${tokens.font.size.regular};
  padding: ${tokens.spacing.small} ${tokens.spacing.large};
`;
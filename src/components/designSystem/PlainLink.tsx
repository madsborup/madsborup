import styled from 'styled-components'
import Link from './Link'
import tokens from './tokens'

export default styled(Link)`
  color: ${tokens.colors.text};

  &:hover {
    color: ${tokens.colors.secondary};
  }
`;
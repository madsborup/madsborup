import React from "react"
import styled from "styled-components"
import PlainLink from "./designSystem/PlainLink"
import tokens from "./designSystem/tokens"

interface Props {
  title: string
}

const Header: React.FC<Props> = ({ title }: Props) => {
  const StyledHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: ${tokens.spacing.xsmall}px 0;
  `

  const Nav = styled.nav`
    display: grid;
    grid-template-columns: max-content 1fr;
    width: 100%;
    max-width: ${tokens.WRAPPER_WIDTH}px;
    padding: ${tokens.spacing.large}px ${tokens.spacing.medium}px;
  `

  const LinkContainer = styled.div`
    display: grid;
    grid-auto-columns: min-content;
    grid-auto-flow: column;
    justify-content: flex-end;
    grid-gap: ${tokens.spacing.large}px;
  `

  const NavLink = styled(PlainLink)`
    padding: 0;
    background: none;
    color: ${tokens.colors.textMuted};
    text-align: center;
    border-radius: ${tokens.BORDER_RADIUS}px;
    font-size: ${tokens.font.size.regular};
    font-weight: 600;
    letter-spacing: 0.2px;

    &:hover {
      text-decoration: none;
      color: ${tokens.colors.text};
    }

    &.${props => props.activeClassName} {
      color: ${tokens.colors.primary};
    }
  `

  const Logo = styled(PlainLink)`
    color: ${tokens.colors.primary};

    &:hover {
      text-decoration: none;
    }
  `


  return (
    <StyledHeader>
      <Nav>
        <Logo to="/" activeClassName="active">
          ◾️ Mads Borup Petersen
        </Logo>
        <LinkContainer>
          <NavLink
            to="/projects/"
            activeClassName="active"
            partiallyActive={true}
          >
            Projects
          </NavLink>
          <NavLink to="/about/" activeClassName="active">
            About
          </NavLink>
        </LinkContainer>
      </Nav>
    </StyledHeader>
  )
}

export default Header

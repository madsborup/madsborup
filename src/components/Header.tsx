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
    padding: ${tokens.spacing.xxsmall}px 0;
  `

  const Nav = styled.nav`
    display: flex;
    width: 100%;
    max-width: ${tokens.WRAPPER_WIDTH}px;
    column-gap: ${tokens.spacing.small}px;
    row-gap: ${tokens.spacing.small}px;
    padding: ${tokens.spacing.large}px ${tokens.spacing.medium}px;
  `

  const NavLink = styled(PlainLink)`
    margin-right: ${tokens.spacing.large}px;
    border-radius: ${tokens.BORDER_RADIUS}px;
    padding: 0;
    background: none;
    text-align: center;
    color: ${tokens.colors.textMuted};
    font-size: ${tokens.font.size.small};
    font-weight: 700;
    text-transform: uppercase;

    &:hover {
      text-decoration: none;
      color: ${tokens.colors.text};
    }

    &.${props => props.activeClassName} {
      color: ${tokens.colors.primary};
    }
  `

  // const links = [
  //   { label: "Home", to: "/" },
  //   { label: "Projects", to: "/projects" },
  //   { label: "About me", to: "/about" },
  // ]

  return (
    <StyledHeader>
      <Nav>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
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
      </Nav>
    </StyledHeader>
  )
}

export default Header

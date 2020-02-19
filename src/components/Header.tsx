import React from "react"
import styled from "styled-components"
import PlainLink from "./designSystem/PlainLink"
import tokens from "./designSystem/tokens"

interface Props {
  title: string
}

const Header: React.FC<Props> = ({ title }: Props) => {
  const StyledHeader = styled.div`
    position: sticky;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    padding: ${tokens.spacing.xxsmall}px ${tokens.spacing.xxsmall}px;
    background: ${tokens.colors.white};
    box-shadow: 0px 2px 12px -10px rgba(0, 0, 0, 0.25);
  `

  const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    column-gap: ${tokens.spacing.small}px;
    row-gap: ${tokens.spacing.small}px;
    width: 100%;
    max-width: 600px;
  `

  const NavLink = styled(PlainLink)`
    width: 100%;
    text-align: center;
    color: ${tokens.colors.headings};
    font-size: ${tokens.font.size.h5};
    padding: ${tokens.spacing.xsmall}px 0;
    border-radius: ${tokens.BORDER_RADIUS}px;
    font-weight: 600;
    margin: 0 2px;

    &:hover {
      color: ${tokens.colors.headings};
      background: ${tokens.colors.background};
      text-decoration: none;
    }

    &.${props => props.activeClassName} {
      color: ${tokens.colors.primary};
      background: ${tokens.colors.primaryMuted};
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
          About me
        </NavLink>
      </Nav>
    </StyledHeader>
  )
}

export default Header

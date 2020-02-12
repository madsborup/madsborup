import React from "react"
import styled from "styled-components"
import PlainLink from "./designSystem/PlainLink"
import tokens from "./designSystem/tokens"

interface Props {
  title: string
}

const Header: React.FC<Props> = ({ title }: Props) => {
  const StyledHeader = styled.div`
    justify-content: space-between;
    border-bottom: 1px solid ${tokens.colors.border};
    padding: ${tokens.spacing.large}px 0 ${tokens.spacing.xxsmall}px;
    margin-bottom: ${tokens.spacing.xlarge}px;
  `

  const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr auto auto;
    grid-gap: ${tokens.spacing.large}px;
    max-width: ${tokens.CONTENT_WIDTH}px;
    margin: 0 auto;
  `

  const NavLink = styled(PlainLink)`
    color: ${tokens.colors.textMuted};
    font-size: ${tokens.font.size.h4};
    font-weight: 500;

    &:hover {
      color: ${tokens.colors.text};
      text-decoration: none;
    }

    &.${props => props.activeClassName} {
      color: ${tokens.colors.text};
    }
  `

  const links = [
    { label: "Mads Borup Petersen", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "About me", to: "/about" },
  ]

  return (
    <StyledHeader>
      <Nav>
        {links.map(({ label, to }) => (
          <NavLink to={to} activeClassName="active">{label}</NavLink>
        ))}
      </Nav>
    </StyledHeader>
  )
}

export default Header

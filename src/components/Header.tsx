import React from "react"
import styled from "styled-components"
import PlainLink from "./designSystem/PlainLink"
import tokens from "./designSystem/tokens"

interface Props {
  title: string
}

const Header: React.FC<Props> = ({ title }: Props) => {
  const StyledHeader = styled.div`
    display: grid;
    grid-template-columns: calc(
        calc(50vw - ${tokens.spacing.large}px) -
          calc(${tokens.CONTENT_WIDTH}px / 2)
      ) 1fr;
    justify-content: space-between;
    border-bottom: 1px solid ${tokens.colors.border};
    padding: ${tokens.spacing.large}px 0 ${tokens.spacing.xxsmall}px;
    margin-bottom: ${tokens.spacing.xlarge}px;
    flex-wrap: flex;
  `

  const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr auto auto;
    grid-gap: ${tokens.spacing.large}px;
    width: ${tokens.CONTENT_WIDTH}px;
  `

  const NavLink = styled(PlainLink)`
    color: ${tokens.colors.textMuted};

    &:hover {
      color: ${tokens.colors.text};
      text-decoration: none;
    }

    &.${props => props.activeClassName} {
      color: ${tokens.colors.text};
      font-weight: 500;
    }
  `

  const links = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "About me", to: "/about" },
  ]

  return (
    <StyledHeader>
      <span>
        {title}
      </span>
      <Nav>
        {links.map(({ label, to }) => (
          <NavLink to={to} activeClassName="active">{label}</NavLink>
        ))}
      </Nav>
    </StyledHeader>
  )
}

export default Header

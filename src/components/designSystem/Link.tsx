import React, { ReactNode, ReactElement } from "react"
import styled from "styled-components"
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby"
import tokens from "./tokens"

interface InternalLinkProps {
  to: string
  activeClassName?: string
  partiallyActive?: boolean
  withArrow?: "onward" | "backward"
  primary?: boolean;
  outline?: boolean;
}

interface ExternalLinkProps {
  href: string
}

interface CommonLinkProps {
  children: ReactNode
  className?: string
  [x: string]: any
}

type LinkProps = CommonLinkProps & (InternalLinkProps | ExternalLinkProps)

const Arrow = styled.span`
  color: ${tokens.colors.textMuted};
  margin-left: ${tokens.spacing.xsmall}px;
  display: inline-block;
  transition: transform 0.2s ease-in-out;
`;

const ArrowOnward = styled(Arrow)`
  margin-left: ${tokens.spacing.xsmall}px;
`

const ArrowBackward = styled(Arrow)`
  margin-right: ${tokens.spacing.xsmall}px;
`

const InternalLink = styled(GatsbyLink)<InternalLinkProps>`
  color: ${({ primary }) => primary ? tokens.colors.white : tokens.colors.headings};
  background: ${({ primary }) => primary ? tokens.colors.primary : 'none'};
  padding: ${({ primary, outline }) => (primary || outline) && `${tokens.spacing.xsmall}px ${tokens.spacing.large}px`};
  border: ${({ outline }) => outline && `1px solid ${tokens.colors.border}`};
  border-radius: 22px;
  text-decoration: none;
  font-size: ${tokens.font.size.regular};
  font-weight: 600;
  transition: 0.1s ease-in-out;

  &:hover {
    text-decoration: ${({ withArrow }) => (withArrow ? "none" : "underline")};
    background: ${({ outline }) => outline ? tokens.colors.hover : 'none'};

    ${ArrowOnward} {
      color: ${({ primary }) => (primary) ? tokens.colors.white : tokens.colors.primary};
      transform: translateX(8px);
    }

    ${ArrowBackward} {
      color: ${({ primary }) => primary ? tokens.colors.white : tokens.colors.primary};
      transform: translateX(-8px);
    }
  }
`

const ExternalLink = styled.a`
  color: ${tokens.colors.primary};
  text-decoration: none;
  font-size: ${tokens.font.size.regular};
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`

const Link: React.FC<LinkProps> = ({
  to,
  href,
  className,
  activeClassName,
  partiallyActive,
  withArrow,
  primary,
  outline,
  children,
}: LinkProps): ReactElement<typeof GatsbyLink | HTMLAnchorElement> => {
  return to ? (
    <InternalLink
      to={to}
      activeClassName={activeClassName}
      className={className}
      partiallyActive={partiallyActive}
      withArrow={withArrow}
      primary={primary}
      outline={outline}
    >
      {withArrow === "backward" && <ArrowBackward>←</ArrowBackward>}
      {children}
      {withArrow === "onward" && <ArrowOnward>→</ArrowOnward>}
    </InternalLink>
  ) : (
    <ExternalLink href={href} className={className}>
      {children}
    </ExternalLink>
  )
}

export default Link

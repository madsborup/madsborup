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

const ArrowOnward = styled.span`
  color: ${tokens.colors.textMuted};
  margin-left: ${tokens.spacing.xsmall}px;
  transition: transform 0.2s ease-in-out;
  display: inline-block;
`

const ArrowBackward = styled.span`
  color: ${tokens.colors.textMuted};
  margin-right: ${tokens.spacing.xsmall}px;
  transition: transform 0.2s ease-in-out;
  display: inline-block;
`

const InternalLink = styled(GatsbyLink)<InternalLinkProps>`
  color: ${({ primary }) => primary ? tokens.colors.white : tokens.colors.headings};
  background: ${({ primary }) => primary ? tokens.colors.primary : 'none'};
  padding: ${({ primary }) => primary && `${tokens.spacing.xsmall}px ${tokens.spacing.large}px`};
  border-radius: 20px;
  text-decoration: none;
  font-size: ${tokens.font.size.regular};
  font-weight: 600;

  &:hover {
    text-decoration: ${({ withArrow }) => (withArrow ? "none" : "underline")};

    ${ArrowOnward} {
      color: ${({ primary }) => primary ? tokens.colors.white : tokens.colors.primary};
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

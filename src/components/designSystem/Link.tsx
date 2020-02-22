import React, { ReactNode, ReactElement } from "react"
import styled from "styled-components"
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby"
import tokens from "./tokens"

interface InternalLinkProps {
  to: string
  activeClassName?: string
  partiallyActive?: boolean
  withArrow?: "onward" | "backward"
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
  color: ${tokens.colors.primaryMuted};
  margin-left: ${tokens.spacing.xsmall}px;
  transition: transform 0.2s ease-in-out;
  display: inline-block;
`

const ArrowBackward = styled.span`
  color: ${tokens.colors.primaryMuted};
  margin-right: ${tokens.spacing.xsmall}px;
  transition: transform 0.2s ease-in-out;
  display: inline-block;
`

const InternalLink = styled(GatsbyLink)<InternalLinkProps>`
  color: ${({ withArrow }) =>
    withArrow === "backward"
      ? `${tokens.colors.primaryMuted}`
      : `${tokens.colors.primary}`};
  text-decoration: none;
  font-size: ${tokens.font.size.regular};
  font-weight: 500;

  &:hover {
    text-decoration: ${({ withArrow }) => (withArrow ? "none" : "underline")};
    color: ${tokens.colors.primary};

    ${ArrowOnward} {
      color: ${tokens.colors.primary};
      transform: translateX(8px);
    }

    ${ArrowBackward} {
      color: ${tokens.colors.primary};
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
  children,
}: LinkProps): ReactElement<typeof GatsbyLink | HTMLAnchorElement> => {
  return to ? (
    <InternalLink
      to={to}
      activeClassName={activeClassName}
      className={className}
      partiallyActive={partiallyActive}
      withArrow={withArrow}
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

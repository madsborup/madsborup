import React, { ReactNode, ReactElement } from "react"
import styled from "styled-components"
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby"
import tokens from "./tokens"

interface InternalLinkProps {
  to: string
  activeClassName?: string
  partiallyActive?: boolean;
}

interface ExternalLinkProps {
  href: string
}

interface CommonLinkProps {
  children: ReactNode
  className?: string
  [x: string]: any;
}

type LinkProps = CommonLinkProps &
  (InternalLinkProps | ExternalLinkProps)

const InternalLink = styled(GatsbyLink)`
  color: ${tokens.colors.primary};
  text-decoration: none;
  font-size: ${tokens.font.size.regular};
  font-weight: 500;

  &:hover {
    text-decoration: underline;
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
  children,
}: LinkProps): ReactElement<typeof GatsbyLink | HTMLAnchorElement> => {
  return to ? (
    <InternalLink to={to} activeClassName={activeClassName} className={className} partiallyActive={partiallyActive}>{children}</InternalLink>
  ) : (
    <ExternalLink href={href} className={className}>{children}</ExternalLink>
  )
}

export default Link

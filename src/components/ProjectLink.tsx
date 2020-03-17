import React from "react"
import styled from "styled-components"
import tokens from "./designSystem/tokens"
import Link from "./designSystem/Link"

interface Props {
  to: string
  title: string
  description: string
}

const ProjectLink: React.FC<Props> = ({ to, title, description }) => {
  const ProjectDescription = styled.div`
    color: ${tokens.colors.textMuted};
    font-size: ${tokens.font.size.h4};
    text-transform: lowercase;
    font-weight: 500;
  `

  const StyledProjectLink = styled(Link)`
    display: flex;
    margin-bottom: ${tokens.spacing.small}px;

    &:hover {
      ${ProjectDescription} {
        color: ${tokens.colors.headings};
      }
    }
  `

  const ProjectTitle = styled.div`
    color: ${tokens.colors.primary};
    font-size: ${tokens.font.size.h4};
    margin-right: ${tokens.spacing.xsmall}px;
  `

  return (
    <StyledProjectLink to={to} withArrow="onward">
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
    </StyledProjectLink>
  )
}

export default ProjectLink

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
  const StyledProjectLink = styled(Link)`
    display: flex;
    margin-bottom: ${tokens.spacing.small}px;
  `

  const ProjectTitle = styled.div`
    color: ${tokens.colors.primary};
    font-size: ${tokens.font.size.h4};
    margin-right: ${tokens.spacing.xxsmall}px;
    font-weight: 500;
  `

  const ProjectDescription = styled.div`
    color: ${tokens.colors.text};
    font-size: ${tokens.font.size.h4};
    text-transform: lowercase;
  `

  return (
    <StyledProjectLink to={to}>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
    </StyledProjectLink>
  )
}

export default ProjectLink

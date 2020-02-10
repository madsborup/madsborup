import React from "react"
import styled from "styled-components"
import tokens from "./designSystem/tokens"
import H4 from "./designSystem/H4"

interface Props {
  title: string
  description: string
  image: string
}

const ProjectCard = ({ title, description, image }: Props) => {
  const StyledProjectCard = styled.div`
    display: flex;
    flex-direction: column;
  `
  const Image = styled.img`
    width: 100%;
  `;

  const Description = styled.div`
    color: ${tokens.colors.textMuted};
  `

  return (
    <StyledProjectCard>
      <Image src={image} />
      <H4>{title}</H4>
      <Description>{description}</Description>
    </StyledProjectCard>
  )
}

export default ProjectCard

import React from "react"
import styled from "styled-components"
import tokens from "./designSystem/tokens"
import Link from "./designSystem/Link"
import Tag from './designSystem/Tag'
import H3 from "./designSystem/H3"
import Img, { FluidObject } from "gatsby-image"

interface Props {
  title: string
  description: string
  image: FluidObject
  tools: string[]
  link: string
}

const ProjectCard = ({ title, description, image, tools, link }: Props) => {
  const StyledProjectCard = styled(Link)`
    display: flex;
    flex-direction: column;
    background: ${tokens.colors.white};
    border-radius: ${tokens.spacing.small}px;
    transition: box-shadow 0.2s ease-in-out;
    font-weight: 400;

    &:hover {
      text-decoration: none;
      box-shadow: 0px 2px 14px 4px rgba(0, 0, 0, 0.12);
    }
  `

  const Image = styled(Img)`
    border-radius: ${tokens.BORDER_RADIUS}px ${tokens.BORDER_RADIUS}px 0 0;
  `

  const Container = styled.div`
    padding: ${tokens.spacing.medium}px;

    h3 {
      margin-bottom: ${tokens.spacing.xsmall}px;
    }
  `

  const Description = styled.div`
    color: ${tokens.colors.text};
    font-size: ${tokens.font.size.h4};
    font-weight: 400;
  `

  const Tools = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: ${tokens.spacing.medium}px;
  `

  return (
    <StyledProjectCard href={link}>
      <Image fluid={image} style={{ height: '200px', backgroundColor: `${tokens.colors.background}` }} />
      <Container>
        <H3>{title}</H3>
        <Description>{description}</Description>

      </Container>
    </StyledProjectCard>
  )
}

export default ProjectCard

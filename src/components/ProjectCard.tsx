import React from "react"
import styled from "styled-components"
import tokens from "./designSystem/tokens"
import Link from "./designSystem/Link"
import H3 from "./designSystem/H3"
import Img, { FluidObject } from "gatsby-image"

interface Props {
  title: string
  description: string
  image: FluidObject
  tools: string[]
  link: string
  imageBgColor?: string
}

const ProjectCard = ({
  title,
  description,
  image,
  link,
  imageBgColor,
}: Props) => {
  const StyledProjectCard = styled(Link)`
    display: flex;
    flex-direction: column;
    border-radius: ${tokens.spacing.xxsmall}px;
    transition: box-shadow 0.2s ease-in-out;
    font-weight: 400;
    overflow: hidden;
    box-shadow: 0px 2px 6px 0 rgba(0, 0, 0, 0.15),
      0px -1px 2px 0 rgba(0, 0, 0, 0.02);

    &:hover {
      text-decoration: none;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15),
        0px -1px 2px 0 rgba(0, 0, 0, 0.02);
    }
  `

  const Image = styled(Img)``

  const Container = styled.div`
    padding: 18px;
    color: ${tokens.colors.headings};
    background: ${tokens.colors.white};

    h3 {
      margin-bottom: ${tokens.spacing.xsmall}px;
    }
  `

  const Description = styled.div`
    font-size: ${tokens.font.size.h4};
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: ${tokens.spacing.medium}px;
  `

  return (
    <StyledProjectCard href={link}>
      <Image
        fluid={image}
        style={{
          height: "200px",
          backgroundColor: imageBgColor ? imageBgColor : `#F9F5F1`,
        }}
      />
      <Container>
        <H3>{title}</H3>
        <Description>{description}</Description>
        <Link to={link} withArrow="onward">
          Go to project
        </Link>
      </Container>
    </StyledProjectCard>
  )
}

export default ProjectCard

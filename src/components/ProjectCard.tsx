import React from "react"
import styled from "styled-components"
import tokens from "./designSystem/tokens"
import Link from "./designSystem/Link"
import H3 from "./designSystem/H3"
import H5 from "./designSystem/H5"
import Img, { FluidObject } from "gatsby-image"

interface Props {
  title: string
  description: string
  category: string
  image: FluidObject
  tools: string[]
  link: string
  imageBgColor?: string
}

const StyledProjectCard = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: ${tokens.BORDER_RADIUS}px;
  transition: box-shadow 0.2s ease-in-out;
  font-weight: 400;
  overflow: hidden;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.12), 0px -1px 2px rgba(0, 0, 0, 0.05);

  &:hover {
    text-decoration: none;
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.17),
      0px -1px 2px rgba(0, 0, 0, 0.02);
  }
`

const Image = styled(Img)``

const Container = styled.div`
  padding: 18px;
  color: ${tokens.colors.headings};
  background: ${tokens.colors.white};

  ${H3} {
    margin: ${tokens.spacing.xxsmall}px 0 ${tokens.spacing.small}px;
    font-weight: 700;
  }
`

const Description = styled.div`
  color: ${tokens.colors.text};
  font-size: ${tokens.font.size.h4};
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: ${tokens.spacing.small}px;
`

const ProjectCard = ({
  title,
  description,
  category,
  image,
  link,
  imageBgColor,
}: Props) => {
  return (
    <StyledProjectCard to={link}>
      <Image
        fluid={image}
        style={{
          height: "190px",
          backgroundColor: imageBgColor ? imageBgColor : `#F9F5F1`,
        }}
      />
      <Container>
        <H5>{category}</H5>
        <H3>{title}</H3>
        <Description>{description}</Description>
      </Container>
    </StyledProjectCard>
  )
}

export default ProjectCard

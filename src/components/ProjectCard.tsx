import React from "react"
import styled from "styled-components"
import tokens from "./designSystem/tokens"
import Link from "./designSystem/Link"
import H3 from "./designSystem/H3"

interface Props {
  title: string
  description: string
  image: string
  tools: string[]
  links?: { url: string; label: string }[]
}

const ProjectCard = ({ title, description, image, tools, links }: Props) => {
  const StyledProjectCard = styled(Link)`
    display: flex;
    flex-direction: column;
    background: ${tokens.colors.white};
    border-radius: ${tokens.BORDER_RADIUS}px;
    transition: box-shadow 0.2s ease-in-out;
    font-weight: 400;

    &:hover {
      text-decoration: none;
      box-shadow: 0px 2px 16px 2px rgba(0, 0, 0, 0.1);
    }
  `
  const Image = styled.img`
    width: 100%;
  `

  const Container = styled.div`
    padding: ${tokens.spacing.small}px;
  `

  const Description = styled.div`
    color: ${tokens.colors.text};
  `

  const Tools = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: ${tokens.spacing.small}px;
  `

  const Tag = styled.div`
    background: ${tokens.colors.background};
    color: ${tokens.colors.text};
    padding: 0 ${tokens.spacing.xsmall}px;
    margin-right: ${tokens.spacing.xxsmall}px;
    margin-bottom: ${tokens.spacing.xxsmall}px;
    border-radius: 2px;
    font-weight: 500;
  `

  return (
    <StyledProjectCard href={links[0].url}>
      <Image src={image} />
      <Container>
        <H3>{title}</H3>
        <Description>{description}</Description>
        <Tools>
          {tools.map((tool, i) => {
            return <Tag key={i}>{tool}</Tag>
          })}
        </Tools>
      </Container>
    </StyledProjectCard>
  )
}

export default ProjectCard

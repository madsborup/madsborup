import React from "react"
import styled from "styled-components"
import H1 from "./designSystem/H1"
import Link from "./designSystem/Link"
import { ProjectData } from "../interfaces/Project"
import tokens from "./designSystem/tokens"

interface Props {
  project: ProjectData
}

const ProjectHeader: React.FC<Props> = (props: Props) => {
  const {
    title,
    category,
    links,
    contribution,
    time,
    about,
    tools,
    outcome,
  } = props.project

  const StyledProjectHeader = styled.div`
    display: flex;
    flex-direction: column;
  `

  const Title = styled(H1)`
    border-bottom: 1px solid ${tokens.colors.border};
    margin-bottom: ${tokens.spacing.medium}px;
    padding-bottom: ${tokens.spacing.xxsmall}px;
  `

  const MetaContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    grid-gap: ${tokens.spacing.small}px;
    width: 100%;
    margin-bottom: ${tokens.spacing.medium}px;
    border-bottom: 1px solid ${tokens.colors.border};
  `

  const Column = styled.div`
    display: flex;
    flex-direction: column;
  `

  const Row = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${tokens.spacing.medium}px;
  `

  const Heading = styled.span`
    color: ${tokens.colors.textMuted};
  `

  return (
    <StyledProjectHeader>
      <Title>{title}</Title>
      <MetaContainer>
        <Column>
          <Row>{category}</Row>
          {time && (
            <Row>
              {time.map(item => (
                <span>{item}</span>
              ))}
            </Row>
          )}
          {links && (
            <Row>
              {links.map(link => (
                <Link href={link.url}>{link.label}</Link>
              ))}
            </Row>
          )}
        </Column>
        <Column>
          {contribution && (
            <Row>
              <Heading>My Contribution</Heading>
              {contribution.map(item => (
                <span>{item}</span>
              ))}
            </Row>
          )}
          <Row>
            <Heading>Tools</Heading>
            {tools.map(tool => (
              <span>{tool}</span>
            ))}
          </Row>
        </Column>
        <Column>
          <Row>
            <Heading>About</Heading>
            {about}
          </Row>
          <Row>
            {outcome && (
              <React.Fragment>
                <Heading>Outcome</Heading>
                {outcome}
              </React.Fragment>
            )}
          </Row>
        </Column>
      </MetaContainer>
    </StyledProjectHeader>
  )
}

export default ProjectHeader

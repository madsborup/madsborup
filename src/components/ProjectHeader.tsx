import React from "react"
import styled from "styled-components"
import tokens from "./designSystem/tokens"
import H1 from "./designSystem/H1"
import Link from "./designSystem/Link"
import Tag from "./designSystem/Tag"
import { ProjectData } from "../interfaces/Project"

interface Props {
  project: ProjectData
}

const ProjectHeader: React.FC<Props> = ({project}: Props) => {
  const {
    title,
    links,
    contribution,
    time,
    about,
    tools,
    outcome,
  } = project

  const StyledProjectHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${tokens.spacing.small}px 0 ${tokens.spacing.large}px;
    color: ${tokens.colors.headings};
  `

  const Column = styled.div`
    display: flex;
    flex-direction: column;
  `

  const Row = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${tokens.spacing.medium}px;
    align-items: flex-start;
  `

  const Title = styled(H1)`
    line-height: 1.2;
    margin-bottom: ${tokens.spacing.xsmall}px;
    margin-top: ${tokens.spacing.xsmall}px;
  `

  const Tools = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: ${tokens.spacing.small}px;
    padding-bottom: ${tokens.spacing.small}px;
  `

  const Heading = styled.span`
    color: ${tokens.colors.textMuted};
  `

  const MetaContainer = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 1fr 2fr;
    grid-gap: ${tokens.spacing.medium}px;
    width: 100%;
    padding: ${tokens.spacing.small}px;
    background: #F9F5F1;
    border-radius: 2px;
  `

  return (
    <StyledProjectHeader>
      <Title>{title}</Title>
      <Tools>
        {tools.map(tool => (
          <Tag>{tool}</Tag>
        ))}
      </Tools>
      <MetaContainer>
        <Column>
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
            {outcome && (
              <React.Fragment>
                <Heading>Outcome</Heading>
                {outcome}
              </React.Fragment>
            )}
          </Row>
        </Column>
        <Column>
          <Row>
            <Heading>About</Heading>
            {about}
          </Row>
        </Column>
      </MetaContainer>
    </StyledProjectHeader>
  )
}

export default ProjectHeader

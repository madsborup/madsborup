import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import tokens from "./designSystem/tokens"
import Link from "./designSystem/Link"
import H2 from "./designSystem/H2"
import ProjectCard from "./ProjectCard"

const StyledProjectShowcase = styled.div`
  width: 100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h2 {
    margin-bottom: 0;
    margin-right: ${tokens.spacing.large}px;
  }
`

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  grid-gap: ${tokens.spacing.medium}px;
  margin-top: ${tokens.spacing.large}px;
`

const ProjectShowcase = () => (
  <StaticQuery
    query={graphql`
      query {
        allMdx(limit: 3, sort: { order: DESC, fields: frontmatter___date }) {
          edges {
            node {
              frontmatter {
                title
                description
                tools
                featuredLink
                featuredImage {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <StyledProjectShowcase>
        <Container>
          <H2>Projects</H2>
          <Link to="/projects/" withArrow="onward" primary>
            View all projects
          </Link>
        </Container>
        <ProjectContainer>
          {data.allMdx.edges.map((edge, i) => {
            const {
              title,
              description,
              tools,
              featuredLink,
              featuredImage,
            } = edge.node.frontmatter

            console.log(featuredImage)
            return (
              <ProjectCard
                title={title}
                description={description}
                image={featuredImage.childImageSharp.fluid}
                tools={tools}
                link={featuredLink}
                key={i}
              />
            )
          })}
        </ProjectContainer>
      </StyledProjectShowcase>
    )}
  />
)

export default ProjectShowcase

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import tokens from "./designSystem/tokens"
import Section from "./Section"
import Link from "./designSystem/Link"
import H2 from "./designSystem/H2"
import ProjectCard from "./ProjectCard"

const StyledProjectShowcase = styled.div`
  margin-top: ${tokens.spacing.medium}px;
  max-width: 100%;
  width: 100%;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
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
                      ...GatsbyImageSharpFluid_withWebp_noBase64
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
      <React.Fragment>
        <Section>
          <H2>Projects</H2>
          <Link to="/projects/">View all projects -></Link>
        </Section>
        <StyledProjectShowcase>
          <Container>
            {data.allMdx.edges.map((edge, i) => {
              const { title, description, tools, featuredLink, featuredImage} = edge.node.frontmatter

              console.log(featuredImage);
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
          </Container>
        </StyledProjectShowcase>
      </React.Fragment>
    )}
  />
)

export default ProjectShowcase

import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import tokens from "./designSystem/tokens"
import ProjectCard from "./ProjectCard"
import studio from '../assets/images/studio.jpg'

const StyledProjectShowcase = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: ${tokens.spacing.medium}px;
`

const ProjectShowcase = () => (
  <StaticQuery
    query={graphql`
      query {
        allMdx(limit: 2, sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              frontmatter {
                title
                description
                featuredImage
              }
            }
          }
        }
      }
    `}
    render={data => (
      <StyledProjectShowcase>
        {data.allMdx.edges.map(project => {
          return (
            <ProjectCard
              title={project.node.frontmatter.title}
              description={project.node.frontmatter.description}
              image={studio}
            />
          )
        })}
      </StyledProjectShowcase>
    )}
  />
)

export default ProjectShowcase

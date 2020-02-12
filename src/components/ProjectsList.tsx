import React from "react"
import { StaticQuery, graphql } from "gatsby"
import tokens from "./designSystem/tokens"
import ProjectLink from "./ProjectLink"
import H1 from "./designSystem/H1"
import H2 from "./designSystem/H2"
import styled from "styled-components"

const Section = styled.div`
  margin-bottom: calc(${tokens.spacing.xlarge}px * 2);
`

const ProjectsList = () => (
  <StaticQuery
    query={graphql`
      query {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              frontmatter {
                title
                description
                sideProject
                date(formatString: "dddd, MMMM Do YYYY")
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Section>
          <H1>Projects</H1>
          {data.allMdx.edges
            .filter(project => !project.node.frontmatter.sideProject)
            .map((project, i) => {
              return (
                <ProjectLink
                  to={project.node.fields.slug}
                  title={project.node.frontmatter.title}
                  description={project.node.frontmatter.description}
                  key={i}
                />
              )
            })}
        </Section>
        <Section>
          <H2>Other</H2>
          {data.allMdx.edges
            .filter(project => project.node.frontmatter.sideProject)
            .map((project, i) => {
              return (
                <ProjectLink
                  to={project.node.fields.slug}
                  title={project.node.frontmatter.title}
                  description={project.node.frontmatter.description}
                  key={i}
                />
              )
            })}
        </Section>
      </React.Fragment>
    )}
  />
)

export default ProjectsList
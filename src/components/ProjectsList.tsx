import React from "react"
import { StaticQuery, graphql } from "gatsby"
import tokens from "./designSystem/tokens"
import ProjectCard from "./ProjectCard"
import H3 from './designSystem/H3'
import styled from "styled-components"

const ListHeader = styled(H3)`
  padding-bottom: ${tokens.spacing.medium}px;
  margin-bottom: ${tokens.spacing.medium}px;
  border-bottom: 1px solid ${tokens.colors.border};
  width: 100%;
`

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  grid-gap: ${tokens.spacing.medium}px;
  margin-bottom: ${tokens.spacing.xlarge}px;
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
                tools
                featuredLink
                accent
                featuredImage {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
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
        <ListHeader>Projects</ListHeader>
        <List>
          {data.allMdx.edges
            .filter(edge => !edge.node.frontmatter.sideProject)
            .map((edge, i) => {
              const project = edge.node

              return (
                <ProjectCard
                  title={project.frontmatter.title}
                  description={project.frontmatter.description}
                  image={
                    project.frontmatter.featuredImage.childImageSharp.fluid
                  }
                  tools={project.frontmatter.tools}
                  link={project.frontmatter.featuredLink}
                  key={i}
                  imageBgColor={project.frontmatter.accent}
                />
              )
            })}
        </List>
        <ListHeader>Other</ListHeader>
        <List>
          {data.allMdx.edges
            .filter(project => project.node.frontmatter.sideProject)
            .map((edge, i) => {
              const project = edge.node
              return (
                <ProjectCard
                  title={project.frontmatter.title}
                  description={project.frontmatter.description}
                  image={
                    project.frontmatter.featuredImage.childImageSharp.fluid
                  }
                  tools={project.frontmatter.tools}
                  link={project.frontmatter.featuredLink}
                  key={i}
                  imageBgColor={project.frontmatter.accent}
                />
              )
            })}
        </List>
      </React.Fragment>
    )}
  />
)

export default ProjectsList

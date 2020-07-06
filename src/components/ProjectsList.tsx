import React from "react"
import { StaticQuery, graphql } from "gatsby"
import tokens from "./designSystem/tokens"
import ProjectCard from "./ProjectCard"
import H1 from "./designSystem/H1"
import H2 from "./designSystem/H2"
import styled from "styled-components"

const ListHeader = styled(H1)`
  padding-bottom: ${tokens.spacing.medium}px;
  margin-bottom: ${tokens.spacing.medium}px;
  width: 100%;
`

const ListHeaderSmall = styled(H2)`
  padding: ${tokens.spacing.large}px 0 ${tokens.spacing.small}px;
  margin-bottom: ${tokens.spacing.medium}px;
  border-top: 1px solid ${tokens.colors.border};
  width: 100%;
  font-weight: 800;
`
const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  grid-gap: ${tokens.spacing.large}px;
  margin-bottom: ${tokens.spacing.large}px;
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
                category
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
                  category={project.frontmatter.category}
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
        <ListHeaderSmall>Other</ListHeaderSmall>
        <List>
          {data.allMdx.edges
            .filter(project => project.node.frontmatter.sideProject)
            .map((edge, i) => {
              const project = edge.node
              return (
                <ProjectCard
                  title={project.frontmatter.title}
                  description={project.frontmatter.description}
                  category={project.frontmatter.category}
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

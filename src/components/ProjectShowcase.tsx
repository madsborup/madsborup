import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import tokens from "./designSystem/tokens"
import H2 from './designSystem/H2'
import ProjectCard from "./ProjectCard"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 400px));
  width: 100%;
`;

const ProjectShowcase = () => (
  <StaticQuery
    query={graphql`
      query {
        allMdx(limit: 1, sort: { order: DESC, fields: frontmatter___date }) {
          edges {
            node {
              frontmatter {
                title
                description
                tools
                links {
                  url
                  label
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <H2>Recent Projects</H2>
      <Container>
        {data.allMdx.edges.map((edge, i) => {
          const {title, description, tools, links} = edge.node.frontmatter;

          return (
            <ProjectCard
              title={title}
              description={description}
              image="/"
              tools={tools}
              links={links}
              key={i}
            />
          )
        })}
      </Container>
      </React.Fragment>
    )}
  />
)

export default ProjectShowcase

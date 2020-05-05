import React from "react"
import styled from "styled-components"
import tokens from "../components/designSystem/tokens"
import Layout from "../components/Layout"
import ProjectShowcase from "../components/ProjectShowcase"
import H4 from "../components/designSystem/H4"
import H1 from '../components/designSystem/H1'
import Section from "../components/Section"

export default () => {
  const Greeting = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 560px;

    ${H4} {
      font-weight: 600;
      color: ${tokens.colors.headings};
    }

    p {
      margin-bottom: ${tokens.spacing.xsmall}px;
      color: ${tokens.colors.headings};
    }
  `

  return (
    <Layout>
      <Section>
        <Greeting>
          <H1>👾</H1>
          <H4>Hi, I'm Mads.</H4>
          <p>
            I'm a developer with a BSc in Interaction
            Design. Currently learning what's working on the web.
          </p>
        </Greeting>
      </Section>
      <ProjectShowcase />
    </Layout>
  )
}

import React from "react"
import styled from "styled-components"
import tokens from "../components/designSystem/tokens"
import Layout from "../components/Layout"
import ProjectShowcase from "../components/ProjectShowcase"
import H4 from "../components/designSystem/H4"
import Section from "../components/Section"

export default () => {
  const Greeting = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: ${tokens.spacing.large}px 0;
    max-width: 560px;

    h4 {
      font-weight: 600;
      letter-spacing: 0.2px;
      margin-bottom: ${tokens.spacing.xxsmall}px;
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
          <H4>Mads Borup Petersen</H4>
          <p>
            I'm a front-end developer-in-progress with a BSc in Interaction
            Design. Currently learning what's working on the web.
          </p>
        </Greeting>
      </Section>
      <ProjectShowcase />
    </Layout>
  )
}

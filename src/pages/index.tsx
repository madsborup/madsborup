import React from "react"
import styled from "styled-components"
import tokens from "../components/designSystem/tokens"
import Layout from "../components/Layout"
import ProjectShowcase from "../components/ProjectShowcase"
import H1 from "../components/designSystem/H1"
import H4 from "../components/designSystem/H4"
import P from "../components/designSystem/P"
import Link from "../components/designSystem/Link"
import Section from "../components/Section"

export default () => {
  const Greeting = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 560px;

    h4 {
      font-weight: 700;
      letter-spacing: 0.2px;
      margin-bottom: ${tokens.spacing.xxsmall}px;
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
          <Link to="/about/" withArrow="onward">About me</Link>
        </Greeting>
      </Section>
      <ProjectShowcase />
    </Layout>
  )
}

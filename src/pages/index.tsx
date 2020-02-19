import React from "react"
import styled from 'styled-components'
import Layout from "../components/Layout"
import ProjectShowcase from "../components/ProjectShowcase"
import H1 from "../components/designSystem/H1"
import P from '../components/designSystem/P'
import Link from "../components/designSystem/Link"
import Section from "../components/Section"

export default () => {

  const Greeting = styled.div`
    display: flex;
    flex-direction: column;

  `;

  return (
    <Layout>
      <Section>
        <H1>Hi, my name is Mads. </H1>
        <P>I'm a front-end developer-in-progress with a BSc in Interaction Design.
        Currently learning whats working on the web and the best tools to build.
        </P>
        <Link to="/about">More about me -></Link>
      </Section>
      <ProjectShowcase />
    </Layout>
  )
}

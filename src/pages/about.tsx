import React from "react"
import Layout from "../components/Layout"
import ProjectShowcase from "../components/ProjectShowcase"
import styled from 'styled-components'
import H2 from "../components/designSystem/H2"
import P from '../components/designSystem/P'
import Image from '../components/designSystem/Image'
import Link from "../components/designSystem/Link"
import Section from "../components/Section"
import profile from '../assets/images/me.png'

export default () => {

  const Profile = styled.img`
    display: flex;
    align-self: flex-start;
    max-width: 170px;
  `;

  return (
    <Layout>
      <Section>
        <H2>Hi, my name is Mads </H2>
        <Profile src={profile} />
        <P>I’m a front-end developer-in-progress with a BSc in Interaction Design from Aalborg University.
        </P>
        <P>I like learning new things and discovering new ways to create. Currently I'm working on improving my React and TypeScript skills.

        </P>
        <P>I’ve had courses in OOP, discrete mathematics and software engineering and practical experience with user-centered design and methods like sketching, prototyping (physical and digital) and user research. 
        </P>
        <Link href="https://www.linkedin.com/in/madsborup/">LinkedIn</Link>
        <Link href="https://github.com/madsborup">GitHub</Link>
      </Section>
    </Layout>
  )
}
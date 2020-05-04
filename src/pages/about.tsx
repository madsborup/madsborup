import React from "react"
import styled from "styled-components"
import tokens from "../components/designSystem/tokens"
import Layout from "../components/Layout"
import Tag from "../components/designSystem/Tag"
import H3 from "../components/designSystem/H3"
import P from "../components/designSystem/P"
import Image from "../components/designSystem/Image"
import Link from "../components/designSystem/Link"
import Section from "../components/Section"
import profile from "../assets/images/me.png"

export default () => {
  const Container = styled.div`
    display: grid;
    grid-template-columns: max(200px) 1fr;
    grid-gap: ${tokens.spacing.large}px;

    @media (max-width: ${tokens.MEDIA_BREAK}px) {
      grid-template-columns: 1fr;
    }
  `

  const TextContainer = styled.div`

    a {
      margin-right: ${tokens.spacing.large}px;
    }

    p {
      margin-bottom: ${tokens.spacing.small}px;
    }
  `

  const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin-top: ${tokens.spacing.large}px;
    width: 100%;
  `

  const SkillCategory = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `

  return (
    <Layout>
      <Section>
        <Container>
          <Image src={profile} align="left" />
          <TextContainer>
            <H3>Hi, my name is Mads.</H3>
            <p>
              I’m a developer with a BSc in Interaction
              Design from Aalborg University.
            </p>
            <p>
              I like learning new things and discovering new ways to create.
              Currently I'm working on improving my React and TypeScript skills.
            </p>
            <p>
              I’ve had courses in OOP, discrete mathematics and software
              engineering and practical experience with user-centered design and
              methods like sketching, prototyping (physical and digital) and
              user research.
            </p>
            <Link href="https://www.linkedin.com/in/madsborup/">LinkedIn</Link>
            <Link href="https://github.com/madsborup">GitHub</Link>
            <Link href="mailto:madsborpe@gmail.com">Email</Link>
          </TextContainer>
        </Container>
      </Section>
    </Layout>
  )
}

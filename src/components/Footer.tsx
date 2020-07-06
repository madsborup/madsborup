import React from "react"
import styled from "styled-components"
import Link from "./designSystem/Link"
import tokens from "./designSystem/tokens"

const StyledFooter = styled.div`
  width: 100%;
  padding: 0 ${tokens.spacing.medium}px;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: ${tokens.WRAPPER_WIDTH}px;
  margin: 0 auto;
  padding: ${tokens.spacing.large}px 0;
  color: ${tokens.colors.headings};
`

const Section = styled.div`
  display: flex;
  width: 100%;
  font-size: ${tokens.font.size.small};
  font-weight: 600;
  text-transform: uppercase;
`

const LinkSection = styled.div`
  display: flex;
  justify-content: flex-end;
`

const FooterLink = styled(Link)`
  font-size: ${tokens.font.size.h5};
  color: ${tokens.colors.textMuted};
  margin-left: ${tokens.spacing.small}px;
`

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Content>
        <Section>2020</Section>
        <LinkSection>
          <FooterLink href="https://www.linkedin.com/in/madsborup/">
            LinkedIn
          </FooterLink>
          <FooterLink href="https://github.com/madsborup">GitHub</FooterLink>
          <FooterLink href="mailto:madsborpe@gmail.com">Email</FooterLink>
        </LinkSection>
      </Content>
    </StyledFooter>
  )
}

export default Footer

import React from "react"
import styled from "styled-components"
import Link from "./designSystem/Link"
import tokens from "./designSystem/tokens"

const Footer: React.FC = () => {
  const StyledFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: ${tokens.WRAPPER_WIDTH}px;
    margin: 0 auto;
    padding: ${tokens.spacing.large}px ${tokens.spacing.medium}px ${tokens.spacing.large}px;
  `

  const Section = styled.div`
    display: flex;
    width: 100%;
    color: ${tokens.colors.text};
    font-size: ${tokens.font.size.small};
    font-weight: 700;
    text-transform: uppercase;
  `

  const LinkSection = styled.div`
    display: flex;
    justify-content: flex-end;
  `;

  const FooterLink = styled(Link)`
    color: ${tokens.colors.textMuted};
    margin-left: ${tokens.spacing.small}px;
  `;

  return (
    <StyledFooter>
      <Section>2020 - Mads Borup Petersen </Section>
      <LinkSection>
        <FooterLink href="https://www.linkedin.com/in/madsborup/">LinkedIn</FooterLink>
        <FooterLink href="https://github.com/madsborup">GitHub</FooterLink>
        <FooterLink href="mailto:madsborpe@gmail.com">Email</FooterLink>
      </LinkSection>
    </StyledFooter>
  )
}

export default Footer

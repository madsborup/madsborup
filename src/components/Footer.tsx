import React from "react"
import styled from "styled-components"
import Link from "./designSystem/Link"
import tokens from "./designSystem/tokens"

const Footer: React.FC = () => {
  const StyledFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: ${tokens.colors.white};
    border-top: 1px solid ${tokens.colors.border};
    max-width: ${tokens.CONTENT_WIDTH}px;
    margin: ${tokens.spacing.large}px auto 0;
    padding: ${tokens.spacing.small}px 0 ${tokens.spacing.xlarge}px;
  `

  const Section = styled.div`
    display: flex;
    width: 100%;
    color: ${tokens.colors.textMuted}; 
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
      <Section>2020, Mads Borup Petersen </Section>
      <LinkSection>
        <FooterLink href="https://www.linkedin.com/in/madsborup/">LinkedIn</FooterLink>
        <FooterLink href="https://github.com/madsborup">GitHub</FooterLink>
        <FooterLink href="mailto:madsborpe@gmail.com">Email</FooterLink>
      </LinkSection>
    </StyledFooter>
  )
}

export default Footer

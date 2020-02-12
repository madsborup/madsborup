import React from "react"
import styled from "styled-components"
import tokens from "./tokens"

type Align = 'right' | 'left'

interface Props {
  src: string
  maxWidth?: string
  align?: Align
  children?: React.ReactNode;
}

interface ContainerProps {
  align: Align
}

interface ImageProps {
  maxWidth: string
}

const Image: React.FC<Props> = ({ src, maxWidth, align, children }: Props) => {
  const handleMargin = (align: Align) => {
    if (align === "right") {
      return `0 0 ${tokens.spacing.medium}px ${tokens.spacing.small}px`
    }
    if (align === 'left') {
      return `0 ${tokens.spacing.small}px ${tokens.spacing.medium}px 0`
    }
    return `${tokens.spacing.large}px 0`
  }

  const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    background: ${tokens.colors.border};
    margin-bottom: ${({ align }) => align && `${tokens.spacing.medium}px`};
    margin: ${({ align }) => handleMargin(align)};
    float: ${({ align }) => align};
  `

  const StyledImage = styled.img<ImageProps>`
    max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "100%")};
    margin: 0 auto;
    order: 1;
  `

  const Caption = styled.span`
    padding-top: ${tokens.spacing.xsmall}px;
    font-size: ${tokens.font.size.small};
    color: ${tokens.colors.textMuted};
    order: 2;
    background: white;
  `

  return (
    <Container align={align}>
      <StyledImage src={src} maxWidth={maxWidth} />
      { children && <Caption>{children}</Caption> }
    </Container>
  )
}

export default Image

import React from "react"
import styled from "styled-components"
import tokens from "./tokens"

interface Props {
  src: string
  maxWidth?: string
  align?: "right" | "left"
  children?: React.ReactNode;
}

interface ContainerProps {
  align: "right" | "left"
}

interface ImageProps {
  maxWidth: string
}

const Image: React.FC<Props> = ({ src, maxWidth, align, children }: Props) => {
  const handleMargin = (align: "right" | "left") => {
    if (align === "right") {
      return `0 0 ${tokens.spacing.medium}px ${tokens.spacing.small}px`
    }

    return `0 ${tokens.spacing.small}px ${tokens.spacing.medium}px 0`
  }

  const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    margin-bottom: ${({ align }) => align && `${tokens.spacing.medium}px`};
    margin: ${({ align }) => handleMargin(align)};
    float: ${({ align }) => align};
  `

  const StyledImage = styled.img<ImageProps>`
    width: ${({ maxWidth }) => (maxWidth ? maxWidth : "100%")};
    order: 1;
  `

  const Caption = styled.span`
    margin-top: ${tokens.spacing.xsmall}px;
    font-size: ${tokens.font.size.small};
    color: ${tokens.colors.textMuted};
    order: 2;
  `

  return (
    <Container align={align}>
      <StyledImage src={src} maxWidth={maxWidth} />
      <Caption>{children}</Caption>
    </Container>
  )
}

export default Image

import React from "react"
import styled from "styled-components"
import Img, { FluidObject, GatsbyImageProps } from "gatsby-image"
import tokens from "./tokens"


const Image = (props: GatsbyImageProps) => {
  const StyledImage = styled(Img)``

  const Wrapper = styled.figure`
    margin: ${tokens.spacing.medium}px 0;
  `;

  return (
    <Wrapper>
      <StyledImage {...props} />   
    </Wrapper>
  )
}

export default Image

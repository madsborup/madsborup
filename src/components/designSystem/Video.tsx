import React from "react"
import styled from "styled-components"
import tokens from "./tokens"

interface Props extends React.HTMLProps<HTMLVideoElement>{
  maxWidth?: string
}

interface VideoProps {
  maxWidth: string
}

const Image: React.FC<Props> = ({
  src,
  maxWidth,
  controls,
  loop,
  muted,
  autoPlay
}: Props) => {
  const StyledVideo = styled.video<VideoProps>`
    width: ${({ maxWidth }) => (maxWidth ? maxWidth : "100%")};
    margin-bottom: ${tokens.spacing.medium}px;
  `

  return (
    <StyledVideo
      src={src}
      maxWidth={maxWidth}
      controls={controls}
      loop={loop}
      muted={muted}
      autoPlay={autoPlay}
    />
  )
}

export default Image

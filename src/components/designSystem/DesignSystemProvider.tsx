import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import * as designSystem from '../designSystem'

const DesignSystemProvider: React.FC = ({children}) =>  {
  return (
    <MDXProvider components={{
      a: designSystem.Link,
      h1: designSystem.H1,
      h3: designSystem.H3,
      p: designSystem.P,
      Link: designSystem.Link,
      Image: designSystem.Image,
      Video: designSystem.Video
    }}>
      {children}
    </MDXProvider>
  )
}

export default DesignSystemProvider;
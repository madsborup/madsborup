---
title: "Face tracking"
description: "mapping face tracking to surface."
category: "Web application"
contribution: 
- "Personal project"
tools: 
- "p5.js"
about: Small thing i made to try out the p5.js face tracking library. Gives an illusion of being able to "look behind" a surface as it responds to face movement.

sideProject: true
---
import tracking_video from '../assets/videos/tracking_video.mp4'
import face_screen from '../assets/images/projects/face_tracking/face_screen.png'
import face_3 from '../assets/images/projects/face_tracking/face_3.png'
import face_tracking from '../assets/images/projects/face_tracking/face_tracking.png'

import ProjectHeader from "../components/ProjectHeader"

<ProjectHeader project={props.pageContext.frontmatter} />
<Image src={face_screen}/>
<Video src={tracking_video} autoPlay loop muted/>
<Image src={face_3}/>
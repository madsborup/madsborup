---
title: "Face tracking"
date: 2017-01-01
description: "mapping face movements to surface."
category: "Web application"
contribution: 
- "Personal project"
tools: 
- "p5.js"
about: One day challenge of mapping face movements to a surface using the p5.js face tracking library. Inspired by Jim Campbell's lo-fi installations.

sideProject: true
---
import tracking_video from '../assets/videos/tracking_video.mp4'
import face_screen from '../assets/images/projects/face_tracking/face_screen.png'
import face_3 from '../assets/images/projects/face_tracking/face_3.png'
import face_tracking from '../assets/images/projects/face_tracking/face_tracking.png'

import ProjectHeader from "../components/ProjectHeader"

[<- back to projects](/projects/)
<ProjectHeader project={props.pageContext.frontmatter} />
<Image src={face_screen}/>
<Video src={tracking_video} autoPlay loop muted/>
<Image src={face_3}/>
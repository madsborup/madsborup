---
title: Story Blocks
date: 2017-12-01
description: A tangible language for teaching Computational Thinking
category: Physical Product
featuredImage: ../assets/images/projects/story_blocks/character.png
featuredLink: /projects/story-blocks/
time: 
- "2017"
- 4 months
contribution: 
- Research
- Ideation
- Graphics
- Arduino prototyping
tools: 
- Arduino
- Solidworks
- Adobe Illustrator
about: In recent years there has been an inceased focus on giving children in the danish primary school better digital skills. Story Blocks was proposed as a solution to help teachers facilitate programming concepts while maintaining the engagement of students.
---
import ProjectHeader from "../components/ProjectHeader"

<ProjectHeader project={props.pageContext.frontmatter} />

### Challenge 
Programming is being introduced in the Danish primary school, but programming is complex and inaccessible and many teachers find it hard to pick it up as yet another thing they have to learn. Additionally teachers often experience difficulties keeping the students interested when the excitement of existing digital tools has worn off.

### Concept
With Story Blocks students can create small naratives around a scene (like a doll house). Students can then "program" the behavior of the scene by connecting blocks with boolean conditions to hubs that control specific parts of the scene. Students can make logical AND conditions by connecting blocks together in the same hub input, and logical OR conditions by connecting blocks to seperate hub inputs. The programmed behaviour can then be tested and stories can be acted out stories by playing with actors (dolls) in the scene.

![Hub (center) with blocks.](../assets/images/projects/story_blocks/hub.png)

![Variable being assigned as cat (left) and making a logical AND condition by connecting the blocks (right).](../assets/images/projects/story_blocks/variable_block.png)

In this implementation a house was chosen as the scene. In this scene students can control a door, lights, a window and a garage. Students can place characters (dolls) at different spots to test their programming of the controlled parts of the scene. 
An example scenario could be that the students have programmed the door to open <code>IF</code> <b>cat</b> is in front of <b>window</b> <code>OR</code> <b>girl</b> is in front of <b>door</b>. 

![A character being used in the house scene.](../assets/images/projects/story_blocks/character.png)

![Early test with 2nd grade students using a cardboard prototype (left). Test with functioning prototype (right).](../assets/images/projects/story_blocks/test.png)

---

## SIDeR 2018
A small paper and poster about this project was accepted at [SIDeR 2018](http://sider18.aalto.fi). I attended along with another project member. Read the proceedings [here](http://sider18.aalto.fi/img/FINAL-180527-SIDeR18ConferenceDigitalProceedings.pdf) (p. 140). 

![](../assets/images/projects/story_blocks/sider.png)
![Poster presented at SIDeR.](../assets/images/projects/story_blocks/sider_poster.png)
---
title: Story Blocks
date: 2017-12-01
description: A playful learning tool for teaching children computational thinking.
category: Physical Product Concept
featuredImage: /media/projects/story-blocks/character.png
featuredLink: /projects/story-blocks/
accent: "#A5D675"
# timeline:
#   - "2017-2018"
contribution:
  - User Research
  - Prototyping
  - Product Design
  - 3D modelling
tools:
  - Arduino
  - Solidworks
# about: In recent years there has been an inceased focus on giving children in the danish primary school better digital skills. Story Blocks was proposed as a solution to help teachers facilitate programming concepts while maintaining the engagement of children.
---

### Challenge

Programming and related topics are being introduced in Danish primary schools, but the subject is complex and inaccessible and many teachers find it hard to pick it up as yet another thing they have to learn. Additionally, teachers often experience difficulties keeping the children interested when the excitement of existing digital tools has worn off.

### Context

Story Blocks was a project done in collaboration with a Danish primary school who were front-runners in trialling the implementation of Teknologiforståelse ("technology comprehension") into their curriculum. My contribution focused on physical product design, prototyping, and user research.

### SIDeR

A paper and poster about this project was accepted at [SIDeR 2018](http://sider18.aalto.fi) in the category Tangible User Interfaces. I attended in Helsinki, Finland along with another team member. Read the proceedings [here](http://sider18.aalto.fi/img/FINAL-180527-SIDeR18ConferenceDigitalProceedings.pdf) (p. 140), and the poster [here](/sider_poster.pdf).

![Me talking.](/media/projects/story-blocks/sider.jpg)

### Solution

With Story Blocks, children create small narratives around a scene. They explore computational concepts like logical AND/OR and IF statements by connecting blocks to hubs that control parts of the scene. The programmed behaviour can then be tested by using figures in the scene.

![Hub with blocks. This hub controls the lights in the scene.](/media/projects/story-blocks/hub.jpg)

![Cat variable being assigned to "if X in driveway" statement (left). It's then connected to another block to create a logical AND statement: "If cat in driveway AND someone is in front of house" (right).](/media/projects/story-blocks/variable_block.jpg)

In this implementation a house was chosen as a scene. Children can control a door, lights, a window and a garage door. As an example, the behaviour of the door can be programmed to open IF the _cat_ figure is in front of the window OR if _any_ figure is in front of the door.

![A figure being used in the scene.](/media/projects/story-blocks/character.png)

![Early testing with 2nd grade children at a Primary School using a cardboard prototype (left). Later,  a functional prototype was developed and tested (right).](/media/projects/story-blocks/test.jpg)

![Exploded view of the hub and block components.](/media/projects/story-blocks/render.png)

![Scene with exposed wires between controllable parts (servos, lights) and activation areas in the floor plane.](/media/projects/story-blocks/scene.png)

![Hub with connected blocks.](/media/projects/story-blocks/connection.jpg)

![](/media/projects/story-blocks/snap.mp4?controls)

### Outcome

We found that Story Blocks created many positive learning experiences for the children. Working in groups, the tool sparked collaboration and discussion as children negotiated what their scene should do and how to program it. This led to situations where children started reflecting on their own capabilities, and experienced success around curriculum subjects they hadn't had previously.

Teachers found that Story Blocks enabled them to step back into a facilitator role. They reported the tool to be playful and intuitive, and that they "didn't have to teach the children how to use it first". This allowed them to use their limited time to be present in guiding the children in their learning.

### Design reflections

- A robust connection between hubs and blocks was critical. A pins + magnet system was used, making the blocks stick together. This worked well when the children wanted to reuse block combinations from one port to another, but the magnets could hold blocks in place even when pins were misaligned, making it hard to spot when a connection wasn't actually active.
- Markers for the activation areas for controllable parts in the scene needed to be big, colorful and closely positioned to make them intuitive without explanation.
- The detachable variable on the blocks had to be the right size for small hands to attach and detach, and not too small to be lost. The flat, slightly concave top of the hub made it easy for the children to hold steady and to move around.
- Block combine a character icon, a color-coded condition type, and a simple text label so children could quickly identify who, where, and what kind of computational concept a block represents. It was important to use language that made the children quickly understand what the blocks actually did, and that was simple enough for them to use when explaining their programming to their teacher.

---

---
title: OWS
date: 2017-04-01
description: an application for managing mechanics time at a car dealership.
category: Windows application
time: 
- 2017
- 4 months
contribution:
- Ideation
- Sketching
- Development
tools: 
- C#
- MySQL
- Adobe UX
outcome: Windows application with limited features
about: A management system for foremans to manage tasks and mechanics at a workshop. In collaboration with a car dealership in Denmark.
---
import desk from '../assets/images/projects/ows/desk.png'
import create_form from '../assets/images/projects/ows/create_form.png'
import fakturering from '../assets/images/projects/ows/fakturering.png'
import sketch from '../assets/images/projects/ows/sketch.png'
import test from '../assets/images/projects/ows/test.png'
import ProjectHeader from "../components/ProjectHeader"

[<- back to projects](/projects/)

<ProjectHeader project={props.pageContext.frontmatter} />

## Case
Car workshop at a dealership is transforming their current use of paper worksheets to a completely digital system. In collaboration with foremans at the dealership we designed and tested a system to be used by the foremans. In collaboration with the foremans we developed a set of requirements based on research at the workshop, tested high-fidelity prototypes and developed a functional prototype.
This case was a part of a project with a focus on construction of a service system.

<Image src={desk}> Working environment of the foremans.</Image>

## Construction

The application was created as an extension of a course in Object-oriented Programming with C#. Thus, we made a Windows Application and additionally decided to add a simple MySQL backend. 

<Image src={sketch}> Sketches showing innitial ideas of how to visialize a </Image>
<Image src={create_form} />
<Image src={fakturering} />
<Image src={test}>Testing UI-elements with foremans using paper-prototypes.</Image>
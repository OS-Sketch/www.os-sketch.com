---
# use the default theme
theme: default
# apply any windi css classes to the current slide
class: "text-center"
# define the highlighter and the colorSchema
highlighter: prism
colorSchema: light
remoteAssets: false
# show line numbers in code blocks
lineNumbers: false
# define the fonts and their weights
fonts:
  # define the font for the body text
  sans: "IBM Plex Sans"
  # define the serif font
  serif: "IBM Plex Serif"
  # define the code font
  mono: "IBM Plex Mono"
  # load several font weights
  weights: "200,400,500"
  # support the use of italics
  italic: true
---

[//]: # "Slide Start {{{"

# Operating Systems

## Systems Introduction

<div class="container my-5">
  &nbsp;
</div>

### Gregory M. Kapfhammer

### www.os-sketch.com

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# <em>Okay</em>, what is this about?

<style>
  h2 {
    font-size: 36px;
    @apply text-red-600 mb-4;
  }
</style>

<br>

<div v-click>

## Key Question

> How can does the operating system use the principle of **virtualization** to
> manage the resources of a computer such as the process, memory, and file
> system? How does virtualization influence the way in which I implement
> programs and use an operating system?

</div>

<br>

<div v-click>

## Learning Objectives

> To **remember** and **understand** some of the foundations of operating
> systems, grasping the abstractions and implementation strategies that enable a
> programs to run on a computer through an operating system.

</div>

[//]: # "Slide End }}}"

---

[//]: # (Slide Start {{{)

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
What happens on an OS when we run a program?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
<b>Fetch</b>:
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
<b>Decode</b>:
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
<b>Execute</b>:
</div>

</div>

</div>

[//]: # (Slide End }}})

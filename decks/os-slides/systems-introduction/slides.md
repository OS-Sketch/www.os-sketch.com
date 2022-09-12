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

# ✨ Sketching the Key Ideas

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
> system? How do virtualization **policies** and **mechanisms** influence the way in
> which I implement programs and use an operating system?

</div>

<br>

<div v-click>

## Learning Objectives

> To **remember** and **understand** some of the foundations of operating
> systems, grasping the abstractions and implementation strategies that enable
> programs to effectively run on a computer through an operating system.

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
What does an OS do when a program runs?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
<b>Fetch</b>: retrieve an instruction from memory
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
<b>Decode</b>: determine what the instruction should do
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
<b>Execute</b>: run the instruction and then repeat process
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Virtualization in Operating Systems

<v-clicks>

- **Goal**: simplify access to physical resources through abstract interfaces

- What are the **benefits** of using virtualization in an operating system?

  - Abstract away details about specific hardware modules
  - Offer a uniform interface to hardware modules of specific class
  - Enable simulation of more physical resources than are available
  - Enforce rules about the accessing of physical hardware resources

- The operating system is a **resource manager** running as a virtual machine

- Separate the **policy** for resource management from the **mechanism**!

- What does an operating system virtualize? CPU, Disk, Memory, Network!

<div class="flex row">

<mdi-help-box class="text-6xl ml-4 mt-0 text-blue-600" />

<div class="text-4xl text-true-gray-700 font-bold mt-4 ml-4">
Questions about the role of virtualization?
</div>

</div>

</v-clicks>

[//]: # "Slide End }}}"

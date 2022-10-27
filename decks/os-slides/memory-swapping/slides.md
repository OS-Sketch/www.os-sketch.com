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

## Memory Swapping

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
  h1 {
    @apply mb-0 -mt-1;
  }
  h2 {
    font-size: 36px;
    @apply text-red-600 mb-4;
  }
</style>

<br>

<v-click>

## Key Question

> What are the general-purpose policies and mechanisms that the operating
> system uses to move **memory** units from physical memory to the disk? How does this
> behavior influence the **ways** in which I program and use software?

</v-click>

<br>

<v-click>

## Learning Objectives

> To **remember** and **understand** some of the foundations of the way in which
> an operating system allocates and manages memory on behalf of a user.

</v-click>

<v-click>

<div class="flex row">

<mdi-help-box class="text-6xl ml-4 mt-5 text-blue-600" />

<div class="text-4xl text-true-gray-700 font-bold mt-9 ml-4">
Questions about the goals for this module?
</div>

</div>

</v-click>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Address space does not fit into physical memory?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Avoid artificial constraint of process memory size
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Trade-off speed and size in memory heirarchy
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Move pages between physical memory and disk
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Exploring Memory Swapping

<v-clicks>

- Programs need to store their executable code and their data!

- Exploring the memory hierarchy in a modern computer:

  - The CPU's registers are a fast but very small storage location
  - Random access memory (RAM) is larger than registers and yet slower
  - A process can exhaust the amount of RAM is was given by the OS
  - The hard disk (e.g., HDD or SSD) is larger than RAM and yet slower

</v-clicks>

<v-clicks>

- Challenges that may arise when using memory swapping:

  - Avoid requiring a programmer to explicitly manage where data exists
  - Support an address space larger than what physical memory provides
  - Must track where a page currently exists in memory heirarchy

</v-clicks>

<v-click>

<div class="flex row">

<mdi-help-box class="text-6xl ml-4 mt-3 text-blue-600" />

<div class="text-4xl text-true-gray-700 font-bold mt-6 ml-4">
Questions on basics of memory swapping?
</div>

</div>

</v-click>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Let's create the illusion of a large physical memory!
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Relax constraint of only using physical memory
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Move memory pages between the RAM and the disk
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Uphold the illusion with acceptable performance!
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# ✨ Sketching the Key Ideas

<img src="/os-sketch-memory-swapping.svg" class="ml-50 mt-8 h-100" />

[//]: # "Slide End }}}"

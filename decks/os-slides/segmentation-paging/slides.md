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

## Segmentation and Paging

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
> system uses to facilitate **memory access** for processes? How does this
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
Trade-offs with memory segmentation?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Have multiple base/bounds for memory segments
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Support sparse address spaces with little contents
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Added complexity for improve memory utilization
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Segmentation of Memory

<v-clicks>

- Basic insights about memory segmentation:

  - Define a base/bound pair for each of the three segments of memory
  - The code, stack, and heap will each have their own base/bound pairs
  - Allow for the independent placement of each segment in memory
  - Segments may grow in different directions and thus we store extra bit

</v-clicks>

<v-clicks>

- Challenges that may arise when using segmentation for memory:

  - Program attempts to incorrectly access one of the memory segments
  - Segmentation fault occurs when there is an illegal access of memory
  - Term persists in a wide variety of programming environments!

</v-clicks>

<v-clicks>

- Opportunities for making memory management more realistic:

  - Use protection bits to illustrate which code is sharable with other processes
  - Trade-off between coarse- and fine-grained protection of memory

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Memory Fragmentation

<v-clicks>

- What happens when a segment of memory needs to grow?

  - A call to <tt>malloc</tt> may require the heap to grow beyond current space
  - In this situation, the operating system must relocate heap to new physical memory
  - A key challenges: how to pick the new location in memory? what to do with old space?
  - Alternatively, the operating system could reject the request for more heap memory

</v-clicks>

<v-clicks>

- Challenges that may arise when relocating memory segments after growth:

  - External fragmentation means that there are many small regions of free space
  - Internal fragmentation means that there is wasted space inside of a segment
  - Compaction can combine external fragments but at the cost of a memory-wide process
  - Difficult for the operating system to pick when region to give to a segment

</v-clicks>

<v-clicks>

- It is common for a process to outgrow its region in the heap!

- Best way to handle memory fragmentation and improve memory utilization?

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Memory Allocation Strategies

<v-clicks>

- Free-list management strategies help the operating system pick new region:

  - **Best fit**: keep a list of free spaces and pick one closest to requested size
  - **Worst fit**: keep a list of free spaces and pick one that best over-compensates
  - **First fit**: keep a list of free spaces and pick first one that fits best

</v-clicks>

<v-clicks>

- Which approach is the best? We don't know! Depends on workload!

- Run simulation studies or experiments to determine which best approach

- External fragmentation will still arise and the operating system must address

- Variable-sized segments are necessary and realistic but also a complication;
  operating systems must efficiently and transparently manage memory

- **Questions about how the operating system uses segmentation?**

</v-clicks>

[//]: # "Slide End }}}"

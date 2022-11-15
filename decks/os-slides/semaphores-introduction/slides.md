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

## Introducing Semaphores

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

<div v-click>

## Key Question

> How can the use of **semaphores** support mutual exclusion and reliable
> **concurrency** in the operating system and programming languages? How are
> semaphores **similar** to and **different** from locks? How does the use of
> concurrency primitives influence the **ways** in which I create software?

</div>

<br>

<div v-click>

## Learning Objectives

> To **remember** and **understand** some of the foundations of concurrency,
> as implemented through the POSIX-based semaphore primitive.

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Trade-offs in concurrency & mutual exclusion?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-diamond class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Can increase utilization of CPU and the disk
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-diamond class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Ensure protection of state in critical section
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-diamond class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Requires sophisticated primitives like semaphore
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Motivating and Building Locks

<v-clicks>

- A lock variable ensures that a critical section runs with mutual exclusion

- Lock variables --- or a `mutex` variable --- protects the critical section

- Understanding and manipulating the states of a `mutex` variable:

  - **Available**: the critical section is unlocked or free from threads

  - **Acquired**: the critical section is locked or help by a thread

  - Manipulate the state of the `mutex` through `lock` and `unlock`

- Remember, threads are created by the programmer but scheduled by the OS!

- Locks return control to the programmers and enable critical sections

- Locks are an interface with the programming language, programmer, and OS

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# ✨ Sketching the Key Ideas

<img src="/os-sketch-locks-introduction.svg" class="ml-10 mt-8 h-100" />

[//]: # "Slide End }}}"

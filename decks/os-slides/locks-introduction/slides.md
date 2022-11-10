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

## Locks Introduction

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

> How can the use of **locks** support mutual exclusion and reliable
> **concurrency** in the operating system and programming languages? How does
> concurrency influence the behavior of a program? How does the use of
> concurrency primitives influence the **ways** in which I create software?

</div>

<br>

<div v-click>

## Learning Objectives

> To **remember** and **understand** some of the foundations of concurrency,
> grasping the abstractions and implementation strategies that enable programs
> to concurrently run on a computer aided by the operating system.

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
Ensure protection of shared state with locks
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-diamond class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Locks return control back to programmers!
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

# Building and Evaluating Locks

<v-clicks>

- Key questions and concerns associated with the implementation of a lock:

  - How to engineer the lock so that it is **correct** and **efficient**?
  - How will the computer's **hardware** have to support the lock?
  - How will the **operating system** have to support the lock?
  - How will the **programming language** work with hardware and the system?
  - What API will the **programmer** use for creating a lock?
  - How will the lock ensure **fairness** to all threads and processes?

- The easiest way to implement locks is to **disable interrupts**! Any concerns?

  - A programming language thread now has to perform a privileged operation
  - Interrupt disabling does not work on a computer system with multi-processors
  - Disabling of interrupts may introduce fundamental defects into the system
  - This approach is inefficient and may limit parallelism in the system
  - Ultimately, disabling interrupts only works in limited contexts!

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Key insights into lock building for software?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
The mutex is a heavily use concurrency primitive
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
A mutex must be both correct and efficient
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Hardware often works in conjunction with software
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Wait, loads and stores do not work correctly!
</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Standard <code>flag</code> variable does not work correctly
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Two competing threads can enter critical section
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Performance implications due to a busy-wait
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Malicious Scheduling Considerations

<v-clicks>

- Programming language and operating system support concurrency

- Designing a mutual exclusion solution requires serious engineering!

- Test the approach by considering a malicious scheduler!

  - Assume that the operating system interrupts a thread at worst possible moment
  - When this interrupt occurs assume another threads wants same critical section
  - Follow this analysis process until two threads have the critical section

</v-clicks>

<v-clicks>

- So, is it possible to implement a correct mutual exclusion lock? Yes, it is!

- Can you implement a mutual exclusion lock only in software? Yes, you can!

- Most implementations of locks use a hardware-software combined approach!

</v-clicks>

<v-clicks>

<div class="flex row">

<mdi-help-box class="text-5xl ml-4 -mt-2 text-blue-600" />

<div class="text-4xl text-true-gray-700 font-bold mt-0 ml-4">
Questions about mutex creation?
</div>

</div>

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Let's explore a malicious thread schedule!
</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Refer to Figure 28.2 in the OSTEP text book
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
A <code>flag</code> at <code>1</code> sets the lock for critical section
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
How do both threads modify the shared state?
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Building and Evaluating a Spin Lock

<v-clicks>

- An **atomic exchange** (or **test-and-set**) operation enables lock creation

- **Goal**: return the value of a variable and update it **atomically**

- Preemption from a malicious scheduler **cannot interrupt** an atomic exchange!

- A **spin lock** introduces a **busy-wait** for all processes not with lock

</v-clicks>

<v-clicks>

- Evaluation of the spin lock using the atomic exchange:

  - **Correctness**: Yes, this will guarantee mutually exclusive access of critical section
  - **Fairness**: No, a thread stuck on a spin lock could potentially spin forever
  - **Performance**: No, a single-core single-CPU system may suffer performance problems
  - **Performance**: Kinda, as long as the system has multiple processors and/or cores!

- If a spinning thread runs on the CPU, it is runs overhead instructions!
  Ultimately, need more support to implement an efficient approach!

</v-clicks>


<v-clicks>

<div class="flex row">

<mdi-help-box class="text-5xl ml-4 -mt-2 text-blue-600" />

<div class="text-4xl text-true-gray-700 font-bold mt-0 ml-4">
Questions about mutex creation?
</div>

</div>

</v-clicks>

[//]: # "Slide End }}}"


---

[//]: # "Slide Start {{{"

# ✨ Sketching the Key Ideas

<img src="/os-sketch-locks-introduction.svg" class="ml-10 mt-8 h-100" />

[//]: # "Slide End }}}"

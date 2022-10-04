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

## Address Spaces

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

> What are the policies and mechanisms that the operating system uses to
> facilitate **memory access** for processes? How does this behavior of the
> operating system influence the **ways** in which I program and use software?

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
Multiprogramming and time sharing in an OS
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Single user and single process for a single computer
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Batch of processes running on a single computer
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Interactive computing on a share computer
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Basic Memory Management

<v-clicks>

- Store the source code and data associated with the operating system
- Store the source code and data for a single running program

</v-clicks>

<v-clicks>

- Limitations of basic memory management techniques:

  - Switching from one program to the next program can be very costly!
  - Inexpensive to context switch for register-level state in the CPU
  - Saving the memory state of a process can be very expensive

</v-clicks>

<v-clicks>

- **Goal**: a mechanism by which multiple processes can exist in memory

- **Goal**: ensure that processes are isolated for security and reliability

</v-clicks>

<v-clicks>

<div class="flex row">

<mdi-help-box class="text-6xl ml-2 mt-0 text-blue-600" />

<div class="text-4xl text-true-gray-700 font-bold mt-4 ml-4">
Questions about basic memory management?
</div>

</div>

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Using an Address Space

<v-clicks>

- **Address space**: a running program's view of the system's memory

- Use **virtualization** to create an abstraction of process memory

- Operating system should translate **virtual** addresses to **physical** ones

- Allow many programs from many users to run on a single computer

</v-clicks>

<v-clicks>

- Three key goals for modern memory management:

  - **Transparency**: management should be invisible to the process
  - **Efficiency**: avoid not-needed overheads for time and memory
  - **Protection**: ensure protection of kernel and processes

<div class="flex row">

<mdi-help-box class="text-6xl -ml-2 mt-5 text-blue-600" />

<div class="text-4xl text-true-gray-700 font-bold mt-9 ml-4">
Questions about memory management goals?
</div>

</div>

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # (Slide Start {{{)

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Memory allocation with the operating system
</div>

</div>

<div v-click>

<div class="flex row">

<uim-layer-group class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-5xl font-bold mt-8 ml-4">
Stack: known-size local variables
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-repeat class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-5xl font-bold mt-8 ml-4">
Heap: varying-sized variables
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<div class="text-4xl font-bold mt-10 ml-10">
Both regions needed for modern programs!
</div>

</div>

</div>

[//]: # (Slide End }}})

---

[//]: # "Slide Start {{{"

# Memory Allocation in C

<div class="-ml-2 -mt-2">

```c {all}
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
  printf("location of code : %p\n", main);
  printf("location of heap : %p\n", malloc(100e6));
  int x = 3;
  printf("location of stack: %p\n", &x);
  return 0;
}
```

<v-click>
<div class="text-2xl">
What is the <b>output</b> of this program? How to <b>interpret</b> the displayed addresses?
</div>
</v-click>

</div>

[//]: # "Slide End }}}"

---

[//]: # (Slide Start {{{)

# Memory Allocation Output

<style>
  h2 {
    font-size: 42px;
    @apply text-red-600 mb-4;
  }
  li {
    @apply bg-gray-300;
    font-size: 28px;
    margin-top: 4px;
    margin-bottom: 9px;
  }
</style>

### Output from three runs of the same program

<v-clicks>

<div class="border-2 rounded-2xl border-gray-700 bg-gray-300 p-5 mt-3 mb-10">

<pre>
location of code : 0x55556f7ed159
location of heap : 0x7f4158f83010
location of stack: 0x7ffc0e880624
</pre>

</div>

<div class="border-2 rounded-2xl border-gray-700 bg-gray-300 p-5 mt-3 mb-10">

<pre>
location of code : 0x5633a4947159
location of heap : 0x7fe67c824010
location of stack: 0x7ffe04ef0424
</pre>

</div>

<div class="border-2 rounded-2xl border-gray-700 bg-gray-300 p-5 mt-3 mb-10">

<pre>
location of code : 0x559457297159
location of heap : 0x7f1478c66010
location of stack: 0x7ffc4150bae4
</pre>

</div>

</v-clicks>

[//]: # (Slide End }}})

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Insights from repeated program run output?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-wrench class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Process memory types stored in different regions
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-wrench class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Location of process regions differs across runs
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-wrench class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Remember, these addresses are virtual addresses!
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Memory in Limited Direct Execution

<v-clicks>

- Operating System must balance concerns about **performance** and **control**

- Direct execution protocol with limits:

  - Create entry for process list
  - Allocate memory for program
  - Load program into memory
  - Setup stack with <tt>argc</tt> and <tt>argv</tt>
  - Clear registers on the CPU
  - Execute the main function in the program
  - Repeatedly schedule processes according to policy

- Context switch requires **saving** and **changing** program state

- The memory of a **processes** must be **protected** from other processes

- The memory of the **kernel** must be **protected** from other processes

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Adopt the operating system's perspective!
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Appreciate how virtualization helps programmers
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Understand how your language manages memory
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
See how memory management hits performance
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# ✨ Sketching the Key Ideas

<img src="/os-sketch-process-execution.svg" class="ml-10 mt-8 h-100" />

[//]: # "Slide End }}}"

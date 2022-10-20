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

- Make restrictive assumptions and then progressively relax them

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

# Memory Allocation in Go

<v-clicks>

- Go compiler allocates to either the heap or stack as it determines

- Each variable in Go exists as long as there is a reference to it

- Compiler's chosen storage location does not influence correct execution

- Storage location can influence the efficiency of a Go program:

  - When possible, allocate local function variables to stack frame
  - If compiler cannot prove that variables does not escape, allocate to heap
  - Always aim to avoid the creation of dangling pointer errors at runtime
  - Very large variables may be better allocated to heap than the stack

- Try `top` and `RES` (Linux) or `RSIZE` to see process memory use!

- See `https://go.dev/doc/faq` for more details!

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # (Slide Start {{{)

# Using `top` to Gauge Memory Use

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

<v-clicks>

<div class="border-2 rounded-2xl border-gray-700 bg-gray-300 p-5 mt-3 mb-7">

<pre>
    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
 144075 gkapfham  20   0  245968 134284   8580 S   5.6   0.4  13:42.17 nvim
 175667 gkapfham  20   0  261184 149692  10180 S   3.0   0.5   0:55.96 nvim
  89252 gkapfham  20   0  254908 143688   9464 S   2.7   0.4  20:02.73 nvim
  84220 gkapfham  20   0  299352 186752   8356 S   1.0   0.6  12:22.88 nvim
 144218 gkapfham  20   0  178116 100468   7460 S   0.7   0.3   0:54.02 nvim
     14 root      -2   0       0      0      0 I   0.3   0.0   0:31.17 rcu_pre
   1877 root      20   0 1713776  30672  21948 S   0.3   0.1   3:10.13 contai
   2475 gkapfham  20   0 1364600  84412  58360 S   0.3   0.3   3:14.18 alacrit
   3220 gkapfham  20   0   32.9g 516348 227440 S   0.3   1.6  15:05.94 brave
   3263 gkapfham  20   0   32.4g 126176  91924 S   0.3   0.4   4:56.39 brave
   7055 gkapfham  20   0 1113912  20380  17224 S   0.3   0.1   1:38.63 polybar
  16765 gkapfham  20   0  136116   2828   2520 S   0.3   0.0   0:01.04 gitstat
  52964 gkapfham  20   0 1367488  88388  59600 S   0.3   0.3   1:31.80 alacrit
  87220 root      20   0  273372  11296  10068 S   0.3   0.0   1:31.33 thermald
 142977 gkapfham  20   0  185320 106516   8500 S   0.3   0.3   1:00.07 nvim
 174736 gkapfham  20   0   10.9g 141444  35548 S   0.3   0.4   0:08.40 node
 174753 gkapfham  20   0  722096  12104   7220 S   0.3   0.0   0:00.83 esbuild
</pre>

</div>

The `RES` column designates the amount of memory allocated to a process

</v-clicks>

[//]: # (Slide End }}})

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
Memory and limited direct execution
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Allow processes to execute as normal
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Involve the operating system in a limited way
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Operating system interposes to main needed control
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Assumptions about memory management
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-diamond  class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Address space is less than size of physical memory
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-diamond class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Address space is arranged contiguously in memory
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-diamond class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
All address spaces are of the same size
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # (Slide Start {{{)

# Storing Program Source Code

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

<v-clicks>

<div class="border-2 rounded-2xl border-gray-700 bg-gray-300 p-5 mt-3 mb-10">

<pre>
va:     file format elf64-x86-64

Disassembly of section .init:

0000000000001000 init:
    1000:   f3 0f 1e fa             endbr64
    1004:   48 83 ec 08             sub    $0x8,%rsp
    1008:   48 8b 05 d9 2f 00 00    mov    0x2fd9(%rip),%rax
    100f:   48 85 c0                test   %rax,%rax
    1012:   74 02                   je     1016 init+0x16
    1014:   ff d0                   call   *%rax
    1016:   48 83 c4 08             add    $0x8,%rsp
    101a:   c3                      ret

Disassembly of section .text:

0000000000001060 start:
    1060:   f3 0f 1e fa             endbr64
    1064:   31 ed                   xor    %ebp,%ebp
    1066:   49 89 d1                mov    %rdx,%r9
    1069:   5e                      pop    %rsi
    106a:   48 89 e2                mov    %rsp,%rdx
</pre>

</div>

</v-clicks>

[//]: # (Slide End }}})

---

[//]: # "Slide Start {{{"

# Dynamic (Hardware-Based) Relocation

<v-clicks>

- Leverage hardware registers in the CPU to manage computer's memory

- Program asks for a **virtual address** and the OS translates to **physical one**!

- OS uses physical address to fetch contents of memory and return to program

- Controls the process of fetching both source code and data

- **Base** and **bound** address translation:

  - Physical address = virtual address + base
  - Base defines where address space actually starts
  - Bound ensures that a process cannot go beyond its address space
  - The computed physical address must be within the bound
  - Operating system generates a fault when address is out of bounds

- Operating system has a **memory management unit** (MMU) taking these steps!

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Operating System Responsibilities

<v-clicks>

- **Memory management responsibilities**:

  - Allocate memory for a new process
  - Reclaim memory from a completed process
  - Manage memory through the free list

</v-clicks>

<v-clicks>

- **Base and bounds registers**:

  - Protected from all other processes
  - Only used for memory management
  - Set every time there is a context switch

</v-clicks>

<v-clicks>

- **Exception handling**:

  - Pre-define code to run to handle exceptions
  - Ensure that exception handling code is protected
  - Execute exception handling code to handle problems

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Memory Management Data Structures

<v-click>

- **Stack** stores static record of memory for each program

- **Heap** stores dynamically allocated program data structures

</v-click>

<v-click>

- **Free list** stores ranges of physical memory not in use

- **Process control block** stores all details about a process

- **Trap table** to various protected trap handlers

</v-click>

<v-click>

- Remember, all of these structures represent memory overhead!

  - Pick a structure that is easy to implement and test
  - Ensure that accessing and updating structure is fast
  - Avoid internal fragmentation of memory as appropriate

- **Trade-off**: overhead and convenience of the operating system

</v-click>


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

<img src="/os-sketch-address-spaces.svg" class="ml-2 mt-8 h-100" />

[//]: # "Slide End }}}"

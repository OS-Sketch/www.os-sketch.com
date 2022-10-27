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

**Questions about how the operating system uses segmentation?**

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Managing Free Space in Memory

<v-clicks>

- **Best fit** strategy for managing free space:

  - Search free list and find memory chunks as big as or bigger than needed
  - Pick the smallest memory chunk out of the ones returned from the search
  - Requires one pass through the free list to find the best fit memory block

</v-clicks>

<v-clicks>

- **Worst fit** strategy for managing free space:

  - Search free list and find memory chunks as big as or bigger than needed
  - Pick the largest memory chunk out of the ones returned from the search
  - Requires one pass through the free list to find the best fit memory block

</v-clicks>

<v-clicks>

- **First fit** strategy for managing free space:

  - Search free list and find the first memory chunk that is big enough
  - Requires partial pass through the free list to find suitable memory block
  - The order in which the free list addresses memory can cause concerns

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Trade-offs with the memory free-list?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Does the approach require exhaustive search?
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
How will the method cause fragmentation?
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Need to study through simulation and execution!
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Memory Virtualization with Pages

<v-clicks>

- Summary of challenges with memory virtualization through segmentation:

  - Segmentation creates varying sized chunks that leads to fragmentation
  - Fragmentation may require compacting and challenging free-list management
  - Memory virtualization with paging attempts to solve these problems

</v-clicks>

<v-clicks>

- Intuitive understanding of virtualization through paging:

  - Don't divide memory into varying sized segments related to code, heap, and stack
  - Divide up the virtual memory into fixed-size pages that store varying contents
  - Avoid making assumptions about growth direction of the heap and stack

</v-clicks>

<v-clicks>

- Wait, the use of paging has additional trade-offs to consider!

  - Enables the sparse use of a computer's complete address space
  - Yet, requires a --- large and potentially slow! --- page table to index memory pages
  - Incorrect implementation can lead to both time and space overheads

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Intuition behind the use of memory paging?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-process class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Avoids fragmentation that plagued segmentation
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-process class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Flexible way to store code, heap, and stack
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-process class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
May cause an increase in time and space overhead
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Using the Page Table

<v-clicks>

- Page table is a **per-process** data structure to support address translation

  - All pages in memory are of the same size
  - Use any page for the code, stack, or heap of a process
  - Do not require contiguous storage of pages for a process
  - Lookup a virtual address in the table to retrieve the physical address
  - Access the requested code, stack or heap at the physical address

</v-clicks>

<v-clicks>

- Split the virtual address into the virtual **page number** and the **offset**

- At the offset inside of the page table, find the physical address

- Split the physical address into a physical **page number** and an **offset**

- Lookup the requested **code** or **data** at the physical address and **return** it

- Without optimizations, the per-process page table **consumes** a lot **memory**!

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Segmentation and paging key points?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-rocket class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Operating system transparently manages memory
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-rocket class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Each programming language must interoperate
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-rocket class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Demonstrate correctness, time, and space trade-offs
</div>

</div>

</div>

[//]: # "Slide End }}}"


---

[//]: # "Slide Start {{{"

# Memory Allocation in Go Programs

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

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Memory challenges in Golang programs?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Garbage collector makes management easy, right?
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Sadly, it is still possible for memory leaks to occur!
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Use a profiler or eBPF tracing to identify problems
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # (Slide Start {{{)

# Using `stress-ng` for Understanding

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
setting to a 60 second run per stressor
dispatching hogs: 4 cpu, 2 vm, 1 hdd, 8 fork
stressor       bogo ops real time  usr time  sys time
                           (secs)    (secs)    (secs)
cpu              169050     60.00    210.08      0.11
vm              2030676     60.16    102.22      3.38
hdd              572824     60.93     25.91     24.70
fork             153037     60.00     28.30     36.50
successful run completed in 60.93s (1 min, 0.93 secs)
</pre>

</div>

- See: `https://github.com/ColinIanKing/stress-ng`

- Why does the `cpu` task mostly take up user time and not system time?

- Also possible to run benchmarks for virtual memory, storage, and system API

- Reports `RSS-MAX` in KB for each of the stressors, with `vm` greatest

</v-clicks>

[//]: # (Slide End }}})


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
See how memory management helps programmers
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Grasp memory protection errors and memory leaks
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

<img src="/os-sketch-segmentation-paging.svg" class="ml-2 mt-8 h-100" />

[//]: # "Slide End }}}"

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

# Creating and Using Swap Space

<v-clicks>

- Operating system will manage **swap space** on the disk for memory pages

- How do we **pick** the right **size** of the swap space on the disk? Trade-offs?

- Support translation from a virtual to a physical address in the same fashion

- Use additional **present bit** to indicate if the page is in physical memory

- A **page fault** occurs when the present bit shows that page is not in memory

</v-clicks>

<v-clicks>

- How does the operating system handle a page fault during a memory access?

  - Load the page from the disk, using existing disk access routines
  - Store the page in physical memory, evicting a page as needed
  - Change the present bit for the memory page to indicate new location
  - Perform this operation transparently without program interaction
  - Process that page faulted in blocked for I/O during these steps!

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # (Slide Start {{{)

#  Swap Space Specification with `fstab`

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
/dev/hda5   /        ext3   defaults        1	1
/dev/hda1   /boot    ext2   defaults        1	2
none        /dev/pts devpts gid=5,mode=620  0	0
none        /proc    proc   defaults        0	0
/dev/hda7   /usr     ext3   defaults        1	2
/dev/hda6   swap     swap   defaults        0	0

/dev/hda6   none     swap   sw,pri=3        0	0
/dev/hdb2   none     swap   sw,pri=2        0	0
/dev/hdc2   none     swap   sw,pri=1        0	0
</pre>

</div>

- Each row in this file specifies a disk partition

- What is the purpose of each partition in this example?

- Which of these partitions defines the swap space?

- Also possible to set priorities for space space! What are the benefits?

</v-clicks>

[//]: # (Slide End }}})

---

[//]: # "Slide Start {{{"

# Page Replacement Mechanisms

<v-clicks>

- When moving a page from swap to physical memory space may be limited

- Bad decisions about page replacement can make memory access very slow!

- The page replacement policy will define which pages to remove from memory

- System should not wait until the last minute to evict pages! Why?

</v-clicks>

<v-clicks>

- Strategies for performing memory page replacements:

  - Aim to always keep a small amount of physical memory free
  - Maintain a high-water (HW) mark and a low-water (LW) mark for memory
  - A swap daemon will monitory physical memory to see if it hits LW
  - This daemon will evict pages from memory until hitting the HW
  - Depending on memory access patterns, clustering pages may help

- How will the swap daemon decide which pages to evict from memory?

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Page Replacement Policies

<v-clicks>

- Need a policy that helps the operating system decide what to evict!

- The optimal page replacement algorithm proposed by Belady:

  - Aim to have the fewest misses when looking for pages in memory
  - Discard the memory page that is access the farthest in the future
  - Pages stored in memory are more important if needed sooner
  - Wait, how can we determine when a memory page will be needed?
  - Optimal page replacement algorithms are useful comparison points

</v-clicks>

<v-clicks>

- Assessing a policy for memory page replacement:

  - Trace the policy to indicate whether there is a hit or a miss
  - Record which pages are evicted according to the policy
  - Track the state of the pages stored in physical memory

- Page replacement policies are better if they require fewer evictions! Why?

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Comparing Page Replacement Policies

- Ground rules for comparing page replacement policies:

  - Page replacement policies have trade-offs for feasibility and cache hit rate
  - Page replacement policies are better when they yield higher cache hit rates
  - Generally, policies should do better when given more physical memory to manage

<v-clicks>

- **FIFO** cache replacement policy:

  - The first page into the memory is the first one to be evicted
  - The policy is simple to implement and describe, yet performs worse than optimal
  - Certain page replacement sequences yield worse performance for larger sizes

</v-clicks>

<v-clicks>

- **LRU** cache replacement policy:

  - The page that was use the longest time ago is the first one to be evicted
  - The policy is simple to implement and describe, yet performs worse than optimal
  - Performs better as you continue to increase the size of physical memory

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Approximating LRU Replacement

- Algorithms like Random and FIFO require little work by the operating system

- But, there is a serious **downside** associated with using LRU! What is it?

- Want to avoid a page replacement policy that needs to scan memory!

- The **clock algorithm** approximates LRU without requiring memory scans

<v-clicks>

- Additional considerations about when implementing memory paging:

  - Avoid a situation in which memory thrashing limits about of completed work
  - Thrashing occurs when the system only loads, evicts, and reloads!
  - A system that is thrashing only does memory management --- which is overhead!
  - System can resolve thrashing by halting the execution of processes. Which one?

</v-clicks>

<v-click>

<div class="flex row">

<mdi-help-box class="text-6xl ml-4 mt-3 text-blue-600" />

<div class="text-4xl text-true-gray-700 font-bold mt-6 ml-4">
Questions about the policies for swapping?
</div>

</div>

</v-click>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# ✨ Sketching the Key Ideas

<img src="/os-sketch-memory-swapping.svg" class="ml-50 mt-8 h-100" />

[//]: # "Slide End }}}"

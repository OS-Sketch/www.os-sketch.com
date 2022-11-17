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

## Introducing I/O Devices

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

> How can does the operating system use the principle of **virtualization** to
> manage the input/output devices connected to a computer? How do
> virtualization **policies** and **mechanisms** for I/O devices influence the
> way in which I implement programs and use an operating system?

</div>

<br>

<div v-click>

## Learning Objectives

> To **remember** and **understand** some of the foundations of I/O devices,
> grasping the abstractions and implementation strategies that enable programs
> to effectively run on a computer through an operating system.

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

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
What hardware resources can an OS virtualize?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
<b>CPU</b>: processes that are programs in execution
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
<b>Memory</b>: determine what the instruction should do
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
<b>Disk</b>: storage to provide process persistence
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Supporting Process Persistence

<v-clicks>

- **Goal**: simply access to physical disk drives, regardless of their type

- Abstract the **differences** between spinning-platter and SSD disks

- Additional details about persistence managed by the operating system:

  - Ensure that processes can checkpoint their state to a disk
  - Once a process stores data on the disk, data loss should be rare
  - File systems should enable manipulation of both directories and files
  - Device drivers offer smooth interaction between processes and disks
  - Coordinate communication between processes through the file system

- Processes should be able to create a file, write to it, and read from it!

<div class="flex row">

<mdi-help-box class="text-6xl ml-4 mt-0 text-blue-600" />

<div class="text-4xl text-true-gray-700 font-bold mt-4 ml-4">
How does a C program write a file to the disk?
</div>

</div>

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Creating and Writing a File in C

<div class="-ml-2 -mt-2">

```c {all|1|2-3|4|5-6|7-10|11|all}
int main(int argc, char *argv[]) {
  int fd = open("/tmp/file", O_WRONLY | O_CREAT |
                O_TRUNC, S_IRUSR | S_IWUSR);
  assert(fd >= 0);
  char buffer[20];
  sprintf(buffer, "hello world\n");
  int rc = write(fd, buffer, strlen(buffer));
  assert(rc == (strlen(buffer)));
  fsync(fd);
  close(fd);
  return 0;
}
```

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Summary of steps for file creation in C programs?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-line-spacing class="text-7xl ml-8 mt-4 text-blue-600" />

<div class="text-4xl font-bold mt-10 ml-4">
Create a connection to a file
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-line-spacing class="text-7xl ml-8 mt-4 text-blue-600" />

<div class="text-4xl font-bold mt-10 ml-4">
Write a data buffer to the file
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-line-spacing class="text-7xl ml-8 mt-4 text-blue-600" />

<div class="text-4xl font-bold mt-10 ml-4">
Sync the file buffer and close it
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Design Goals for an Operating System

<v-clicks>

- **Goal**: virtualize access to physical resources for **simplicity** and **sharing**

- **Goal**: ensure that processes can **efficiently** perform all operations

  - Memory overhead
  - Execution time
  - Energy efficiency

- **Goal**: protect processes from each other and from malicious attacks

  - Defects in programs
  - Attacks from hackers
  - Different languages

- **Goal**: address up-and-coming challenges like **mobility** and **data centers**

**Can you "sketch" all of these key components of an operating system?**

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
What state is associated with process abstraction?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Each process has virtual address space
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Store the program counter and all instructions
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Store the frame pointer and all state
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Operating System Offers a Process API

<v-clicks>

- **Create**: construct a new process and bring it into existence

- **Destroy**: (perhaps insistently) delete a process and all of its state

- **Wait**: wait until a process is finished executing and then destroy it

- **Miscellaneous**: suspend a process or perform other extra operations

- **Status**: query information about the state of current process

- How do the operating system **create a process out of a program**?

  - Load source code and static program data from the disk
  - Allocate source code and static data to memory
  - Create an activation record for the process in memory
  - Fetch-decode-execute the instructions in the process
  - Continue running until scheduler dictates removal

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
What is stored on the run-time stack?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-4xl font-bold mt-10 ml-4">
Local variables created within a function
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-4xl font-bold mt-10 ml-4">
Function parameters received when called
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-4xl font-bold mt-10 ml-4">
Function return values and return addresses
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
What are the three file descriptors for a process?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-4xl font-bold mt-10 ml-4">
<tt>stderr</tt>: offers program error reports
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-4xl font-bold mt-10 ml-4">
<tt>stdin</tt>: offers input to a program
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-4xl font-bold mt-10 ml-4">
<tt>stdout</tt>: program shares its output
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
What are the three main states of a process?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-4xl font-bold mt-10 ml-4">
<tt>running</tt>: process is using the CPU
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-4xl font-bold mt-10 ml-4">
<tt>ready</tt>: can run by not chosen to do so
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-4xl font-bold mt-10 ml-4">
<tt>blocked</tt>: must wait until ready again
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Data Structures to Manage Processes

<v-clicks>

- **Process list**: keep track of basic details about all ready processes

- **Register context**: store information about registers in non-ready processes

- **Process Identifier**: unique code assigned to each running program

- Update all data structures across every **context switch** driven by scheduler

<div class="border-2 rounded-2xl border-gray-700 bg-gray-300 p-5 mt-6 mb-8">

<pre>
136792 gkapfham  20   0  359672 244584  12352 S   7.6   0.8 nvim
529373 gkapfham  20   0   75.2g 601888 365688 S   3.3   1.9 Discord
569083 gkapfham  20   0  199848  88348  12976 S   3.0   0.3 nvim
  2061 gkapfham  20   0 1381644  97916  60620 S   1.7   0.3 alacritty
  2362 gkapfham  20   0   26552  20336   2560 S   1.7   0.1 tmux: server
588482 gkapfham  20   0 1363824  93760  58216 S   1.7   0.3 alacritty
  1862 gkapfham  20   0 2648536   1.1g   1.1g S   1.3   3.7 Xorg
634310 gkapfham  20   0  153344  43072   7184 S   1.0   0.1 nvim
  1087 root      20   0  332272  20824  17128 S   0.7   0.1 NetworkManager
  1088 root      20   0   15560  10464   9076 S   0.7   0.0 wpa_supplicant
</pre>

</div>

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Key insights about operating systems?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Process is an abstraction of a program in execution
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
OS-supported virtualization aids programming
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Operating system manages the execution of programs
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# ✨ Sketching the Key Ideas

<img src="/os-sketch-systems-introduction.svg" class="ml-10 mt-8 h-100" />

[//]: # "Slide End }}}"

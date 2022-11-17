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

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
What can happen during process execute step?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-rocket class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Access variable values stored in CPU registers
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-rocket class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Perform arithmetic computation on register values
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-rocket class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Block for I/O to access data stored in the file system
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

<mdi-diamond class="text-6xl ml-4 mt-0 text-blue-600" />

<div class="text-4xl text-true-gray-700 font-bold mt-4 ml-4">
Operating system virtualizes all I/O devices!
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

# ✨ Sketching the Key Ideas

<img src="/os-sketch-systems-introduction.svg" class="ml-10 mt-8 h-100" />

[//]: # "Slide End }}}"

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

## Systems Introduction

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
> manage the resources of a computer such as the process, memory, and file
> system? How do virtualization **policies** and **mechanisms** influence the way in
> which I implement programs and use an operating system?

</div>

<br>

<div v-click>

## Learning Objectives

> To **remember** and **understand** some of the foundations of operating
> systems, grasping the abstractions and implementation strategies that enable
> programs to effectively run on a computer through an operating system.

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

# C Program: Console Input and Output

<div class="-ml-1 -mt-2">

```c {all|1|2-5|6|7-10|11|all}
int main(int argc, char *argv[]) {
  if (argc != 2) {
    fprintf(stderr, "usage: cpu <string>\n");
    exit(1);
  }
  char *str = argv[1];
  while (1) {
    printf("%s\n", str);
    Spin(1);
  }
  return 0;
}
```

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Insights for C program's syntax and semantics?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
<tt>main</tt> function defines program entry point
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
<tt>while (1) </tt> implements a "busy wait" loop
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
<tt>fprintf</tt> and <tt>printf</tt> produce console output
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Go Program: Console Input and Output

<div class="-ml-4 -mt-2">

```go {all|1-3|5|6-7|8-10|all}
import "fmt"
import "os"
import "time"

func main() {
	var done bool
	done = false
	for !done {
		time.Sleep(1 * time.Second)
		fmt.Println("Run", os.Args[0], " ", os.Args[1])
	}
}
```

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Insights for Go program's syntax and semantics?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
<tt>main</tt> function defines program entry point
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
<tt>for !done </tt> implements a "busy wait" loop
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
<tt>fmt.Println</tt> produces console output
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Programs and Processes

<v-clicks>

- **Program**: source code with syntax and semantics for target language

- **Process**: program in execution managed by the operating system

- How do you create a process in the **C programming language**?

  - Run the compiler: `gcc -o bin/cpu cpu.c -Wall`

  - Run the program: `./bin/cpu A`

- How do you create a process in the **Go programming language**?

  - Run the compiler: `go build --o bin`

  - Run the program: `./bin/cpu A`

- Running a program is **the same** regardless of the programming language!

<div class="flex row">

<mdi-help-box class="text-6xl ml-4 mt-0 text-blue-600" />

<div class="text-4xl text-true-gray-700 font-bold mt-4 ml-4">
Questions about programs and processes?
</div>

</div>

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # (Slide Start {{{)

# Long-Running Program Execution

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

- Output from running the C program:

<div class="border-2 rounded-2xl border-gray-700 bg-gray-300 p-5 mt-5 mb-5">

<pre>
$ ./bin/cpu A
A
A
A
^C
</pre>

</div>

- Output from running the Go program:

<div class="border-2 rounded-2xl border-gray-700 bg-gray-300 p-5 mt-5">

<pre>
$ ./bin/cpu A
Run ./bin/cpu  with  A
Run ./bin/cpu  with  A
Run ./bin/cpu  with  A
^C
</pre>

</div>

&nbsp; **Can you enhance the C program so that it print its name like the Go program?**

</v-clicks>

[//]: # (Slide End }}})

---

[//]: # (Slide Start {{{)

# Building C and Go Programs

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

<tt>Makefile</tt> for the C program:

<div class="border-2 rounded-2xl border-gray-700 bg-gray-300 p-5 -mt-3 mb-5">

<pre>
all: cpu mem threads io
clean:
	rm -f bin/cpu bin/mem bin/threads bin/io
bin:
	mkdir bin
cpu: cpu.c common.h bin
	gcc -o bin/cpu cpu.c -Wall
</pre>

</div>

<tt>Makefile</tt> for the Go program:

<div class="border-2 rounded-2xl border-gray-700 bg-gray-300 p-5 -mt-3">

<pre>
all: cpu
clean:
	rm -f bin/cpu bin/mem bin/threads bin/io
bin:
	mkdir bin
cpu: cpu.go bin
	go build --o bin
</pre>

</div>

</v-clicks>

[//]: # (Slide End }}})

---

[//]: # "Slide Start {{{"

# Virtualization of the CPU

<v-clicks>

- Programmers can create programs **without knowing details** about the CPU
- The operating system turns a **program** into a **process** that it can manage
- Virtualization creates the **illusion** that the process has entire CPU

- What are other **tasks** that the operating system must tackle?
  - Decide which process to place onto and remove from the CPU
  - Checkpoint/retrieve state of a processes during CPU transfer
  - Decide how long a process can run on the CPU before evicting it
  - Ensure that one process does not interfere with another process

- The operating systems is a **resource manager** for the central processing unit!

<div class="flex row">

<mdi-help-box class="text-6xl ml-4 mt-0 text-blue-600" />

<div class="text-4xl text-true-gray-700 font-bold mt-4 ml-4">
What are ways to accomplish these tasks?
</div>

</div>

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Is it possible to mix execution of programs?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Run multiple instances of the C program
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Run multiple instances of the Go program
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Run mixed workload of C and Go programs
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Strategies for virtualizing computer memory?
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
OS maps virtual addresses to physical addresses
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Each process thinks that it can access all of memory
</div>

</div>

</div>

[//]: # "Slide End }}}"


---

[//]: # (Slide Start {{{)

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Virtualization and memory management
</div>

</div>

<div v-click>

<div class="flex row">

<uim-layer-group class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-5xl font-bold mt-8 ml-4">
C: explicit (de-)allocation
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-repeat class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-5xl font-bold mt-8 ml-4">
Go: garbage collection
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-10 text-blue-600" />

<div class="text-3xl font-bold mt-14 ml-4">
What are the trade-offs of these two approaches?
</div>

</div>

</div>

[//]: # (Slide End }}})

---

[//]: # "Slide Start {{{"

# Memory Allocation in C

<div class="-ml-2 -mt-2">

```c {all|1|2-5|6-10|11|all}
int main(int argc, char *argv[]) {
  int *p;
  p = malloc(sizeof(int));
  printf("(%d) p --> addr: %p\n", (int)getpid(), p);
  *p = atoi(argv[1]);
  while (1) {
    Spin(1);
    *p = *p + 1;
    printf("(%d) value of p: %d\n", getpid(), *p);
  }
  return 0;
}
```

</div>

[//]: # "Slide End }}}"

---

[//]: # (Slide Start {{{)

# Memory Behavior Across Multiple Runs

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

- Output from first run of the C program:

<div class="border-2 rounded-2xl border-gray-700 bg-gray-300 p-5 mt-3 mb-8">

<pre>
$ ./bin/mem 1000
(304143) addr pointed to by p: 0x562ced0e92a0
(304143) value of p: 1001
(304143) value of p: 1002
(304143) value of p: 1003
^C
</pre>

</div>

- Output from second run of the C program:

<div class="border-2 rounded-2xl border-gray-700 bg-gray-300 p-5 mt-3 mb-5">

<pre>
$ ./bin/mem 1000
./bin/mem 1000
(306361) addr pointed to by p: 0x55e8d5aa32a0
(306361) value of p: 1001
(306361) value of p: 1002
(306361) value of p: 1003
^C
</pre>

</div>

</v-clicks>

[//]: # (Slide End }}})

---

[//]: # (Slide Start {{{)

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
What is the meaning of the memory output?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-2 mt-6 text-blue-600" />

<div class="text-5xl font-bold mt-8 ml-4">
Number in parentheses is the PID
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-2 mt-6 text-blue-600" />

<div class="text-5xl font-bold mt-8 ml-4">
Hexadecimal is a memory address
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-exclamation-octagon class="text-6xl ml-4 mt-10 text-blue-600" />

<div class="text-5xl font-bold mt-14 ml-4">
Why do memory addresses vary?
</div>

</div>

</div>

[//]: # (Slide End }}})

---

[//]: # (Slide Start {{{)

# Address Space Randomization

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

- Output after disabling address space randomization:

<div class="border-2 rounded-2xl border-gray-700 bg-gray-300 p-5 mt-6 mb-8">

<pre>
$ echo 0 | sudo tee /proc/sys/kernel/randomize_va_space
[sudo] password for gkapfham:
0

$ ./bin/mem 1000
(307231) addr pointed to by p: 0x5555555592a0
(307231) value of p: 1001
(307231) value of p: 1002
^C

$ ./bin/mem 1000
(307271) addr pointed to by p: 0x5555555592a0
(307271) value of p: 1001
(307271) value of p: 1002
^C
</pre>

</div>

**What are the benefits and drawbacks of using ADSR in an operating system?**

</v-clicks>

[//]: # (Slide End }}})

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Benefits and challenges of process concurrency?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-4xl font-bold mt-10 ml-4">
Increase throughput and reduce latency
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-4xl font-bold mt-10 ml-4">
Rely on the operating system to manage
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-4xl font-bold mt-10 ml-4">
Livelock, deadlock, TOCTOU, ... oh my!
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

# ✨ Sketching the Key Ideas

<img src="/os-sketch-process.svg" class="m-0 h-100" />

[//]: # "Slide End }}}"

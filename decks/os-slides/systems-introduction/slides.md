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

- Programmers can create programs without knowing details about the CPU

- The operating system turns a program into a process that it manages

- Virtualization creates the illusion that the process has entire CPU

- What are other tasks that the operating system must tackle?

  - Abstract away details about specific hardware modules
  - Offer a uniform interface to hardware modules of specific class
  - Enable simulation of more physical resources than are available
  - Enforce rules about the accessing of physical hardware resources

- Test

<div class="flex row">

<mdi-help-box class="text-6xl ml-4 mt-0 text-blue-600" />

<div class="text-4xl text-true-gray-700 font-bold mt-4 ml-4">
Questions about virtualization of the CPU?
</div>

</div>

</v-clicks>

[//]: # "Slide End }}}"


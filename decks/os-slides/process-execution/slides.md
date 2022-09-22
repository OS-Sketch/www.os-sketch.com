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

## Process Execution

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

> How does the operating system manage the **execution** of processes and enable
>  processes to **access memory**? How does this behavior of the operating system
>  influence the ways in which I program and use software?

</div>

<br>

<div v-click>

## Learning Objectives

> To **remember** and **understand** some of the foundations of the way in which
> an operating system creates and manages resources on behalf of a user.

</div>

<div class="flex row">

<mdi-help-box class="text-6xl ml-4 mt-5 text-blue-600" />

<div class="text-4xl text-true-gray-700 font-bold mt-9 ml-4">
Questions about the goals for this module?
</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
What are system calls in the process API?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
<code>fork</code> : create a new process from existing one
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
<code>exec</code> : run program different than the calling one
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
<code>wait</code> : delay execution until child process finishes
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Process Creation in C with `fork`

<div class="-ml-2 -mt-2">

```c {all}
int main(int argc, char *argv[]) {
  printf("Hello world (pid:%d)\n", (int)getpid());
  int rc = fork();
  if (rc < 0) {
    fprintf(stderr, "failure\n");
    exit(1);
  } else if (rc == 0) {
    printf("c (pid:%d)\n", (int)getpid());
  } else {
    printf("p of %d (pid:%d)\n", rc,(int)getpid());
  }
}
```

</div>

[//]: # "Slide End }}}"

---

[//]: # (Slide Start {{{)

#  Behavior of `fork` Across Multiple Runs

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
Hello world (pid:131398)
Hello, I am parent of 131399 (pid:131398)
Hello, I am child (pid:131399)
</pre>

</div>

<div class="border-2 rounded-2xl border-gray-700 bg-gray-300 p-5 mt-3 mb-10">

<pre>
Hello world (pid:131476)
Hello, I am parent of 131477 (pid:131476)
Hello, I am child (pid:131477)
</pre>

</div>

<div class="border-2 rounded-2xl border-gray-700 bg-gray-300 p-5 mt-3 mb-10">

<pre>
Hello world (pid:131476)
Hello, I am parent of 131477 (pid:131476)
Hello, I am child (pid:131477)
</pre>

</div>

</v-clicks>

[//]: # (Slide End }}})

---

[//]: # "Slide Start {{{"

# Process Creation in C with `wait`

<div class="-ml-2 -mt-2">

```c {all}
int main(int argc, char *argv[]) {
  int rc = fork();
  if (rc < 0) {
    fprintf(stderr, "fork failed\n"); exit(1);
  } else if (rc == 0) {
    printf("c (pid:%d)\n", (int)getpid());
    sleep(1);
  } else {
    int wc = wait(NULL);
    printf("p of %d (wc:%d) (pid:%d)\n", rc, wc,
           (int)getpid());
  } }
```

</div>

[//]: # "Slide End }}}"

---

[//]: # (Slide Start {{{)

#  Behavior of `wait` Across Multiple Runs

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
Hello world (pid:143366)
Hello, I am child (pid:143367)
Hello, I am parent of 143367 (wc:143367) (pid:143366)
</pre>

</div>

<div class="border-2 rounded-2xl border-gray-700 bg-gray-300 p-5 mt-3 mb-10">

<pre>
Hello world (pid:143406)
Hello, I am child (pid:143407)
Hello, I am parent of 143407 (wc:143407) (pid:143406)
</pre>

</div>

<div class="border-2 rounded-2xl border-gray-700 bg-gray-300 p-5 mt-3 mb-10">

<pre>
hello world (pid:143445)
hello, I am child (pid:143446)
hello, I am parent of 143446 (wc:143446) (pid:143445)
</pre>

</div>

</v-clicks>

[//]: # (Slide End }}})

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
What happens when you run the C system calls?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Create a new C file using your terminal and text editor
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Compile the source code using the <code>gcc</code> compiler
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Run the binary multiple times and observe the output
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Key Parts of the Process API

<v-clicks>

- Each process has a unique identifier abbreviated as the **PID**

- Key insights about the three main system calls:

  - The `fork` system call allows a parent to create a child process

  - The `wait` system call allows a parent wait for child process

  - The `exec` system call allows a child process to leave parent

- The shell uses a combination of all three system calls when running

- Different programming languages provide similar system call wrappers

<div class="flex row">

<mdi-help-box class="text-6xl ml-4 mt-0 text-blue-600" />

<div class="text-4xl text-true-gray-700 font-bold mt-4 ml-4">
Questions about the process API in an OS?
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
What are the trade-offs of these two approaches?
</div>

</div>

</div>

[//]: # (Slide End }}})


---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
What are system calls in the memory API?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
<code>malloc</code> : allocate new memory for a structure
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
<code>free</code> : de-allocate memory for a prior structure
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
<code>sizeof</code> : calculate memory use for a structure
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Common Memory Allocation Mistakes

<v-clicks>

- Memory allocation mistakes:

  - Forget to allocate enough memory
  - Not allocating enough memory
  - Forget to initialize allocated memory
  - Forget to free allocated memory
  - Free memory before it is not in use
  - Free memory repeatedly
  - Free memory incorrectly

- Which of these mistakes could lead to a program crash?

- Can tools help to detect any of these memory mistakes?

<div class="flex row">

<mdi-help-box class="text-6xl ml-4 mt-0 text-blue-600" />

<div class="text-4xl text-true-gray-700 font-bold mt-4 ml-4">
Questions about the memory API in an OS?
</div>

</div>

</v-clicks>

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

<div class="text-4xl font-bold mt-14 ml-4">
What are the trade-offs of these two approaches?
</div>

</div>

</div>

[//]: # (Slide End }}})

---

[//]: # "Slide Start {{{"

# Common Memory Allocation Mistakes

<v-clicks>

- Memory allocation mistakes:

  - Forget to allocate enough memory
  - Not allocating enough memory
  - Forget to initialize allocated memory
  - Forget to free allocated memory
  - Free memory before it is not in use
  - Free memory repeatedly
  - Free memory incorrectly

- Which of these mistakes could lead to a program crash?

- Can tools help to detect any of these memory mistakes?

<div class="flex row">

<mdi-help-box class="text-6xl ml-4 mt-0 text-blue-600" />

<div class="text-4xl text-true-gray-700 font-bold mt-4 ml-4">
Questions about the memory API in an OS?
</div>

</div>

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Summary of program execution steps?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Use the process API to create and run units of work
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Use the memory API to manipulation transient storage
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
How does the operating system manage processes?
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # (Slide Start {{{)

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Challenges During Process Execution?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-5xl font-bold mt-8 ml-4">
Restricted process operations
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-5xl font-bold mt-8 ml-4">
Switching between processes
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<div class="text-4xl font-bold mt-10 ml-4">
Why are these hard? How to solve these problems?
</div>

</div>

</div>

[//]: # (Slide End }}})

---

[//]: # "Slide Start {{{"

# Limited Direct Execution

<v-clicks>

- Operating System must balance concerns about **performance** and **control**

- Direct execution protocol without limits:

  - Create entry for process list
  - Allocate memory for program
  - Load program into memory
  - Setup stack with <tt>argc</tt> and <tt>argv</tt>
  - Clear registers on the CPU
  - Execute the main function in the program

- What are the **challenges** faced by this approach?

- **Key**: user program cannot ask a kernel to run arbitrary code!

- Setup a **trap table** and **trap handlers** so that the kernel has control

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Switching Between Processes

<v-clicks>

- Cooperative approach would **wait** for **system calls** to take place

- However, a user program could abuse the trust of the operating system!

- Alternatively, the operating system can take control over processes:

  - Operating system sets a timer for each process
  - Process can interrupt early due to an interrupt
  - When the timer expires the OS interrupts the process
  - The operating system must save and restore context
  - Context switch between current process and the next one

- What are the **challenges** faced by this approach?

  - How does the operating system decide what process to execute?
  - What happens if processes operating in concurrent fashion?
  - What happens if an interrupt occurs during interrupt handling?

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# ✨ Sketching the Key Ideas

<img src="/os-sketch-systems-introduction.svg" class="ml-10 mt-8 h-100" />

[//]: # "Slide End }}}"

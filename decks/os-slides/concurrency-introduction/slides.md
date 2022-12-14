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

## Concurrency Introduction

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

> What are the trade-offs associated with implementing support for
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
Concurrency and parallelism trade-offs?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-diamond class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Enables tasks to happen ... "at the same time"!
</div>

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
Introduces subtle classes of defects into programs
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
Concurrency with threads and processes?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Process is a heavyweight abstraction of execution
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Thread is a lightweight abstraction of execution
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Concurrent threads share the same address space!
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Benefits of Using Threads?

<v-clicks>

- Multi-threaded program has more than one point of execution

- Each thread is like a separate process, except that it shares an address space

- Threads in the same address space can share data and support fast switches

- What are the benefits associated with support threads in the OS?

  - Speed up a computation by supporting parallelism in computations
  - Avoid blocking a program's progress due to slow input/output devices
  - When a process is blocked due to disk access, threads can overlap

- Threading allows for an overlap within programs in the same way that
  multi-programming supported it across programs! Different level of stack!

<div class="flex row">

<mdi-help-box class="text-6xl ml-4 -mt-2 text-blue-600" />

<div class="text-4xl text-true-gray-700 font-bold mt-2 ml-4">
Questions about the role of threads?
</div>

</div>

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
What systems support concurrency with both threads and processes?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Operating system supports execution of processes
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Languages offers thread and process support
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Challenges of Using Threads?

<v-clicks>

- A multi-threaded program may have **non-deterministic** behavior when run

- This means that threads make programs hard to reason about and trace

- **Data race**: program results depend on the timing execution of threads

- What are the problematic regions inside of a multi-threaded program?

- **Critical section**: region of code that accesses a share variable

- Want **mutual exclusion** to ensure thread accesses critical section at a time

- Overall, what are the trade-offs associated with multi-threaded programs?

  - Multi-threaded programs can decrease response time and increase throughput
  - But, multiple threads can cause a program's execution to be non-deterministic
  - More critical sections increase determinism by make program less performant

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Wait, we need to synchronize our watches!
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Synchronize access to memory shared among threads
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Aim to balance performance and correctness concerns
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Pick primitives easy for programmers to understand
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Program with Separate Tasks

<div class="-ml-4 -mt-2 mb-2">

```python
def job():
    print("Parse the CSV file")

schedule.every(10).minutes.do(job)
schedule.every().hour.do(job)
schedule.every().day.at("10:30").do(job)

while True:
    schedule.run_pending()
    time.sleep(1)
```

</div>

## Wait, does this program execute tasks *sequentially* or *in parallel*?

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Parallel Execution of Tasks

<div class="-ml-4 -mt-2 mb-2">

```python
def job():
    print("Thread %s" % threading.current_thread())

def run_threaded(job_func):
    job_thread = threading.Thread(target=job_func)
    job_thread.start()

schedule.every(10).seconds.do(run_threaded, job)
schedule.every(10).seconds.do(run_threaded, job)

while 1:
    schedule.run_pending() time.sleep(1)
```

</div>

## Wait, does this program execute tasks *sequentially* or *in parallel*?

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Run tasks sequentially or in parallel!
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-loop class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Task is an effective way to decompose problem
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-loop class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Tasks do not necessarily have to run in parallel
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-loop class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Parallelism normally has fundamental trade-offs!
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Using the Thread API in C

<v-clicks>

- POSIX standard defines way to implement and use "P-threads" in C programs

- `pthread_create` allows program to create a new thread in a process

- `pthread_join` allows program to wait for a thread to finish execution

- Maintaining mutual exclusion inside of a P-thread program:

  - `pthread_mutex_lock` enters a critical sections

  - `pthread_mutex_unlock` leaves a critical section

  - P-threads also have **condition variables** for the sending of signals

- Yikes! C, Python, and Go all provide their own API for creating and controlling
  threads! Your initial focus should be on learning the API and avoiding defects.

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Compare concurrency and parallelism?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-code class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Concurrent programming is a way of thinking
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-code class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
A goroutine is a problem decomposition
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-code class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Concurrent and parallel are not the same!
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# ✨ Sketching the Key Ideas

<img src="/os-sketch-concurrency-introduction.svg" class="ml-10 mt-8 h-100" />

[//]: # "Slide End }}}"

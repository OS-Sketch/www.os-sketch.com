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
Concurrency and parallelism Trade-offs?
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

# ✨ Sketching the Key Ideas

<img src="/os-sketch-concurrency-introduction.svg" class="ml-10 mt-8 h-100" />

[//]: # "Slide End }}}"

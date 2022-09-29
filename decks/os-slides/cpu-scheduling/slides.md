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

## CPU Scheduling

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

> How does the operating system separate **policy** from **mechanism** and make
> decisions for which **process** to **execute**? How does this behavior of the
> operating system influence the ways in which I program and use software?

</div>

<br>

<div v-click>

## Learning Objectives

> To **remember** and **understand** some of the foundations of the way in which
> an operating system's scheduler makes process execution decisions.

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
Separate scheduling policy from mechanism!
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Policy: algorithms for making scheduling decisions
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Mechanism: technique for enacting policy decisions
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
What are the key assumptions for CPU scheduling?
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Process Workloads Assumptions 😂

<v-clicks>

- The **workload** is the set of processes scheduled by the operating system

- Different workloads will influence scheduler effectiveness:

  - CPU-bound or I/O-bound
  - Interactive or server
  - Mobile or data-center

- Assumptions about **jobs** entering the operating system:

  - Each job runs for the same amount of time
  - All jobs arrive at the same time
  - Once started, each job runs to completion
  - All jobs only use the CPU (i.e., no I/O permitted)
  - The run-time of each job is known

- If these **assumptions** are not **realistic** why are they **useful**?

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Realistic Process Workloads

<v-clicks>

- Processes both use the CPU and various input/output devices

- Processes run different instructions for a varying amount of time

- Processes are created by different users and arrive at different times

- The goal is to make strict assumptions and then progressively relax them!

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
Metrics for evaluating a scheduling algorithm?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Turnaround time: completion time minus arrival time
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Throughput: unit of work divided by a period of time
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Fairness: all processes have a change to use the CPU
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Scheduling 101: FCFS and SJF

<v-clicks>

- **FCFS**: For every job that arrives in the OS, take these steps:

  - When a job arrives, schedule that job for CPU execution
  - Once the job completes, pick the next job in the waiting queue
  - Continue this process until all jobs have been executed

- **SJF**: For every job that arrives in the OS, take these steps:

  - When a job arrives, record the duration for which it will execute
  - Order the waiting queue of jobs according to their execution time
  - The next job to run is always the one that needs the least CPU time
  - Once a job completes, pick the next job in the waiting queue
  - Continue this process until all jobs have been executed

- **Benefits**: both of these policies are simple to **implement** and **describe**

- **Metrics**: calculate the **average turnaround time** for a job in the workload

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # (Slide Start {{{)

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Pathological worst-case for CPU scheduling?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-2 mt-6 text-blue-600" />

<div class="text-4xl font-bold mt-8 ml-4">
FIFO succumbs to the convoy effect
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-2 mt-6 text-blue-600" />

<div class="text-4xl font-bold mt-8 ml-4">
SJF succumbs to problem of late arrivals
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-exclamation-octagon class="text-6xl ml-4 mt-8 text-blue-600" />

<div class="text-4xl font-bold mt-12 ml-4">
Relaxing assumption shows policy need!
</div>

</div>

</div>

[//]: # (Slide End }}})

---

[//]: # "Slide Start {{{"

# Enhanced Scheduling Algorithms

<v-clicks>

- Broadly, scheduling algorithms can be divided into two categories:

  - **Non-Preemptive**: schedulers do not interrupt executing jobs
  - **Preemptive**: schedules can interrupt jobs and remove from CPU

- **Shortest Time-to-Completion First** uses preemption to its advantage!

  - When a job arrives, record the time it needs to finish execution
  - Order the waiting queue of jobs according to time-to-completion
  - The next job to run is the one that needs the least CPU time to finish
  - Preempt the current job on the CPU if another has less time-to-completion
  - Keep track of the remaining time that each job needs on the CPU
  - Continue this process until all jobs have been executed

<div class="flex row">

<uim-exclamation-octagon class="text-6xl ml-4 mt-6 text-blue-600" />

<div class="text-4xl font-bold mt-10 ml-4">
Assuming that all jobs arrive at same time!
</div>

</div>

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # (Slide Start {{{)

# Job Arrival is Unpredictable!

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

- Run a C program with an infinite loop:

<div class="border-2 rounded-2xl border-gray-700 bg-gray-300 p-5 mt-3 mb-6">

<pre>
$ ./bin/mem 1000
(304143) addr pointed to by p: 0x562ced0e92a0
(304143) value of p: 1001
(304143) value of p: 1002
(304143) value of p: 1003
^C
</pre>

</div>

- Run the C program program with an infinite loop again:

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

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
We need new scheduling evaluation metric!
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
STCF is great when CPU-bound job time is known
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Interactive computing renders STCF less useful
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Response time is arrival time to time first scheduled
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# ✨ Sketching the Key Ideas

<img src="/os-sketch-cpu-scheduling.svg" class="ml-20 mt-4 h-105" />

[//]: # "Slide End }}}"

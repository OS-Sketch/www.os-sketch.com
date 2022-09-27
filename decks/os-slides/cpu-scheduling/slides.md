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

# ✨ Sketching the Key Ideas

<img src="/os-sketch-process-execution.svg" class="ml-10 mt-8 h-100" />

[//]: # "Slide End }}}"

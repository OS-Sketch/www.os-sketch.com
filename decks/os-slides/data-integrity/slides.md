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

## Data Integrity

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

> How can the operating system ensure that **data written** to storage is
> **protected**? What steps must be taken to ensure that data protection can be
> done with both **low time and space** overheads?

</div>

<br>

<div v-click>

## Learning Objectives

> To **remember** and **understand** some of the foundations of data protection
> and integrity systems, grasping the abstractions and implementation
> strategies that enable programs to rely on the operating system to
> **persistently** store data, even in the presence of **disk failures**.

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Insights on bathtub curve for disk failure?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Disks are more likely to fail when first installed
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Disks enter a stable period when failure is unlikely
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Disks are more likely to fail after frequent use
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Failure Modes for Disk Drives

<v-clicks>

- Limited models for **disk drive failure**:

  - Either the entire disk is **working** or it **completely fails**
  - Detection of problems in the **fail-stop** disk model is relatively straightforward
  - Motivated the creation of redundant arrays of inexpensive disks, called **RAID**
  - Of course, there are **other types** of disk failures to also consider!

- While handling every problem is out of scope, the operating systems should
  address single-block called **latent-sector errors** and **block corruption**

  - LSE occurs when a disk sector fails in a detectable fashion
  - Error correcting codes can detect the existence of an LSE
  - Disk blocks can also corrupt for a wide variety of undiagnosable reasons
  - An error correcting code cannot detect a problem with disk firmware!

- Errors often emerge depending on **workloads** to which disk is subjected

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Handling Latent Sector Errors

<v-clicks>

- **RAID**: Redundant array of inexpensive disks is very helpful!

- **Latent sector errors** (LSEs) are straightforward to detect and handle!

- Mirrored RAID system can access the **redundant copy** of the data in array

- RAID-4 or RAID-5 systems can reconstruct the sector using **parity** content

- Additional challenges arise when the **disks fill** at the same time LSEs occur

- What is the main **cost** with these approaches? **Space overhead**!

- There is also some cost associated with mirroring data and computing parity

- Note that RAID systems use **dedicated hardware** to achieve reliability goals

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# ✨ Sketching the Key Ideas

<img src="/os-sketch-io-introduction.svg" class="ml-1 mt-8 h-100" />

[//]: # "Slide End }}}"

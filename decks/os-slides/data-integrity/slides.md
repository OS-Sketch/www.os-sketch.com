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

- **Any questions about handling latent sectors errors for data integrity?**

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Handling Block-Level Corruption

<v-clicks>

- What should the operating system do if a block on the disk **silently fails**?

- Understanding **checksums** and how the system computes them:

    - Mirrored RAID system can access the **redundant copy** of the data in array
    - A checksum is a **unique value** computed for a block of data
    - An operating system computes a **checksum** and **compares** it to known value
    - Wait, what if the checksum is **not completely accurate** and **does not detect**?
    - Need checksums that **do not** yield false positives or false negatives

</v-clicks>

<div class="border-2 rounded-2xl border-gray-700 bg-gray-300 p-5 mt-3 mb-5">
<pre>
cksum slides.md
2814442712 4977 slides.md
</pre>
</div>

<div class="border-2 rounded-2xl border-gray-700 bg-gray-300 p-5 mt-3 mb-5">
<pre>
cksum tags
123132981 4135 tags
</pre>
</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Checksums for detecting block corruption?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Like hashing, you want to avoid collisions
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Trade-offs in time overhead and quality of checksum
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Decide where to store the checksums on the disk
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Additional Data Integrity Insights

<v-clicks>

- Checksums are broadly useful for confirming correctness of file downloads

- Checksums can help to ensure that download did not corrupt an archive

- Package managers can use of checksums for corruption detection

- Additional problems with modern disk drives:

    - Misdirected writes can be detected with checksums
    - Missing writes cannot be detected with checksums
    - Specific files systems (e.g., ZFS and WaffleFS) also handle
    - Alternatives for missing writes include dedicated hardware

- Often useful to perform checks on the entire filesystem at intervals
- Of course, there is a cost associated with running comprehensive checks!

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Concluding insights about data integrity?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Tools exist for detecting and correcting problems
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Trade-offs in integrity and time+space overhead
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Makes connections to cryptography and hashing
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# ✨ Sketching the Key Ideas

<img src="/os-sketch-data-integrity.svg" class="ml-10 mt-8 h-100" />

[//]: # "Slide End }}}"

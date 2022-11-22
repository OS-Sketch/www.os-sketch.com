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

## Files and Directories

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

> How does the operating system use **abstractions** like the **file** and the
> **directory** to make it easy for programmers to access the contents of
> persistent storage? How does the **implementation** of a file system
> influence the way in which I implement programs and use an operating system?

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
What is persistent storage for data?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Continue to keep contents even after power cycles
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Enable storage and access of files and directories
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Durably store data for a considerable amount of time
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Understanding Files and Directories

<v-clicks>

- **Goal**: uniform and simple access to data in persistent storage

- Key concepts for understanding **files** and **directories**:

  - **File**: linear array of bytes that can be individually read and written
  - **Inode Name**: low-level name of a file, often encoded as a number
  - **Directory**: a file with a list of inode and human-readable files names
  - **Separator**: platform-dependent directory separate for file paths
  - **Sub-Directory**: a directory contained within another directory
  - **Absolute Path**: a fully qualified path starting at the file system root
  - **Relative Path**: a path that starts in the context of a non-root directory

- The current convention is that a file will have both a name and an extension

- Operating system must provide a way to manipulate files and directories

- Whenever possible, the implementation details are abstracted away from us!

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
What are the key file system operations?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Create a new file through an <code>Open</code> syscall
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Access a file with <code>read</code> and <code>write</code> syscalls
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Stop file access through the <code>close</code> syscall
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Managing Files and Directories

<v-clicks>

- System uses a **numerical** file descriptor for a human-readable name

- Additional insights into the tracking of **files** and **directories**:

  - Each process maintains a **file descriptor table** (FDT)
  - Parent and child processes can access the same file descriptor table
  - A process uses the FDT to support lookup into **open file table** (OFT)

- A `write` syscall means that a file must be persistent in the future

- For performance reasons, the operating system may **delay** this syscall!

- The `fsync` syscall ensure that the written file is immediately persisted

- The `flush=True` parameter in Python leads to an `fsync` call

- File system implementation must be both efficient and correct

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
What are additional file system operations?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Atomically rename a file with <code>rename</code> syscall
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
File metadata with <code>stat</code> and <code>fstat</code> syscalls
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Remove a file from system with <code>unlink</code> syscall
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
File system operations for directories?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Create a directory with the <code>mkdir</code> syscall
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Read directory contents with <code>readdir</code> syscall
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Delete a directory with the <code>rmdir</code> syscall
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # (Slide Start {{{)

# Using `ls -i` to Inspect the Inodes

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

### Each file and directory has a unique inode!

<v-clicks>

<div class="border-2 rounded-2xl border-gray-700 bg-gray-300 p-5 mt-5 mb-10">

<pre>
49556658 CODE_OF_CONDUCT.md  49556568 poetry.lock
49556813 CONTRIBUTING.md     10229066 __pycache__
 4072575 decks               49556812 pyproject.toml
 4213204 docs                49556646 README.md
10361886 includes            49556682 runtime.txt
49556687 LICENSE             10229064 scripts
49556958 mkdocs.yml          49556680 site
49556685 netlify.toml        51781485 src
49556660 output             49557110 tags
</pre>

</div>

<div class="border-2 rounded-2xl border-gray-700 bg-gray-300 p-5 mt-3 mb-10">

<pre>
4215461 components    4215456 public     4215455 slides.md
4215215 node_modules  4215460 README.md  4215465 styles
4215213 package.json  4215463 setup      4215470 tags
</pre>

</div>

</v-clicks>

[//]: # (Slide End }}})

---

[//]: # "Slide Start {{{"

# Hard and Soft Links in File Systems

<v-clicks>

- System uses a **numerical** file descriptor for a human-readable name

- Additional insights into the tracking of **files** and **directories**:

  - Each process maintains a **file descriptor table** (FDT)
  - Parent and child processes can access the same file descriptor table
  - A process uses the FDT to support lookup into **open file table** (OFT)

- A `write` syscall means that a file must be persistent in the future

- For performance reasons, the operating system may **delay** this syscall!

- The `fsync` syscall ensure that the written file is immediately persisted

- The `flush=True` parameter in Python leads to an `fsync` call

- File system implementation must be both efficient and correct

</v-clicks>

[//]: # "Slide End }}}"


---

[//]: # "Slide Start {{{"

# ✨ Sketching the Key Ideas

<img src="/os-sketch-files-directories.svg" class="ml-0 mt-8 h-100" />

[//]: # "Slide End }}}"

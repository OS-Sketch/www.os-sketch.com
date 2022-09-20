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
> an operating system creates and manages processes on behalf of a user.

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
<code>exec</code> : run program different than calling one
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

# ✨ Sketching the Key Ideas

<img src="/os-sketch-systems-introduction.svg" class="ml-10 mt-8 h-100" />

[//]: # "Slide End }}}"

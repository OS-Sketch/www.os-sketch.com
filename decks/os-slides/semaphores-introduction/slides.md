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

## Introducing Semaphores

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

> How can the use of **semaphores** support mutual exclusion and reliable
> **concurrency** in the operating system and programming languages? How are
> semaphores **similar** to and **different** from locks? How does the use of
> concurrency primitives influence the **ways** in which I create software?

</div>

<br>

<div v-click>

## Learning Objectives

> To **remember** and **understand** some of the foundations of concurrency,
> as implemented through the POSIX-based semaphore primitive.

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Trade-offs in concurrency & mutual exclusion?
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
Ensure protection of state in critical section
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-diamond class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Requires sophisticated primitives like semaphore
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Understanding Basics of Semaphores

<v-clicks>

- Single primitive for everything related to synchronization in an OS

- Semaphores can work as both a lock and a condition variable!

- Understanding and manipulating the states of a `semaphore` variable:

  - `sem_init` : create a semaphore for use between multiple threads

  - `sem_wait` : decrement value of semaphore and wait if it is negative

  - `sem_post` : increment value of semaphore and wake waiting thread

- When negative, the value of a semaphore is the number of waiting threads

- Concurrent threads can have the state of `run` , `ready` , or `sleep`

- POSIX standard describes and gives an implementation of semaphores

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Using Semaphores for Ordering

<v-clicks>

- Semaphores are a more general-purpose and powerful protection mechanism:

  - When used with **two states**, semaphores are like **concurrency locks**

  - When used for **thread ordering**, semaphores are like **condition variables**

  - Key distinction: **binary semaphores** versus **counting semaphores**

- Counting semaphores allow threads to **wait for conditions** to arise:

  - Parent thread may wait until a child thread has executed

  - One thread may wait until a list is either full or empty

  - Parent `Pthread_create` s to make child and `sem_wait` s

  - Child accesses the critical section and then calls `sem_post`

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Understanding the semaphore's value?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Often initialize the state to either 0 or 1!
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Start with 1: willing to "give away" one lock
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Start with 0: can "give away" nothing
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
What is the producer consumer model?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Bounded buffer that stores specific amount of state
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Producer will create the data put into the buffer
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-grid class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Consumer will take the data out of the buffer
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Implementing Bounded Producer

<div class="ml-6 -mt-2">

```c {all}
void *producer(void *arg) {
 int i;
 for (i = 0; i < loops; i++) {
  sem_wait(&empty);
  sem_wait(&mutex);
  put(i);
  sem_post(&mutex);
  sem_post(&full);
 }
}
```

- Combined usage of two different types of semaphores: both binary and counting!
- Critical section involves running function to put data into bounded buffer

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Implementing Bounded Consumer

<div class="ml-6 -mt-2 mb-5">

```c {all}
void *consumer(void *arg) {
 int i;
 for (i = 0; i < loops; i++) {
  sem_wait(&full);
  sem_wait(&mutex);
  int tmp = get();
  sem_post(&mutex);
  sem_post(&empty);
  printf("%d\n", tmp);
 }
}
```

<div class="-ml-6">
  Also involves a combined usage of two different types of semaphores: both binary and counting!
</div>

</div>

[//]: # "Slide End }}}"


---

[//]: # "Slide Start {{{"

# ✨ Sketching the Key Ideas

<img src="/os-sketch-semaphores-introduction.svg" class="ml-5 mt-8 h-105" />

[//]: # "Slide End }}}"

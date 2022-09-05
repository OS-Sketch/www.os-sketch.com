---
hide:
  - navigation
---

# Course Schedule

<!-- TODO: Use a comment to assign at least two students for each module. These -->
<!-- students will be responsible for the following tasks: -->
<!--   1) Create a sketch using Excalidraw to illustrate the key concepts in the module -->
<!--   2) Create and review a pull request to ensure that SVG files (i.e., normal -->
<!--   and inverted) are placed inside of the course slides and course web site. This -->
<!--   pull request should also include the original Excalidraw file as well! -->
<!--   3) Review the course slides for that week and raise at least one issue in -->
<!--   the GitHub Issue Tracker for improving the existing content -->

## Course Setup

### Professional Question

- What technical content about operating systems will we cover this semester,
  how will we assess our mastery of this technical material, and how will we
  structure all aspects of this advanced course in operating systems?

### Next Steps

- Review and participate in all the discussions in the [OS Sketch Issue
  Tracker](https://github.com/OS-Sketch/www.os-sketch.com/issues) for more
  details.

## Systems Introduction

### Technical Questions

- How can does the operating system use the principle of **virtualization** to
  manage the resources of a computer such as the process, memory, and file
  system? How does virtualization influence the way in which I program and use
  an operating system?

### Next Steps

- *Introduction* and *Processes* chapters in [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/)
- Check out the [course slides](/slides/operating-systems/systems-introduction/) for a detailed investigation of these chapters!

???+ note "Technical Concepts"

    - **Virtualization**: the process of taking a physical resource such as a
      processor or memory and transforming it into a more general, powerful, and
      easy-to-use virtual form.

## Locks and Conditional Variables

### Technical Questions

- What are locks, and how do they aid in **concurrency**?  What are some problems using locks can cause?  What is the greatest benefit we get from condition variables in relation to locks?  How do these two ideas interact?

### Next Steps

- *Locks* and *Conditional Variables* chapters in [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/)

"Technical Concepts" in chapters 28 and 30

      - **Spinning**: a thread being told to wait before the action is executed based on a lock being in place.
      - **Mutual Exclusion**: if one thread is in the critical section it excludes others from entering.
      - **Fairness**: does each thread contending for the lock get an equal shot at it?
      - **Performance**: time added by using the lock.
      - **Condition variable**: an explicit queue threads can put themselves on when some state of execution is less desirable than another thread.  When it changes state the other threads can be woken up and allowed to continue.
      - **Wait/Signal**: the actions used in a conditional variable.  The thread waits on a specific condition to be met and then signals the sleeping threads to be executed.
      - **Bounded Buffer**: a system of multiple producer threads and consumer threads which is shared.
      

## Course Timeline

| Class Date            | Chapter/Topics                                               | Expert/Presenter |
|-----------------------|--------------------------------------------------------------|------------------|
| 9/1                   | Continued work from lab                                      |                  |
| 9/6                   | 2/4. Introduction/Processes                                  |                  |
| 9/8                   | Processes Continued                                          |                  |
| 9/13                  | 5/14/6. Process API Memory API, Direct Execution             |                  |
| 9/15                  | Continued                                                    |                  |
| 9/20                  | 7/9. CPU and Lottery Scheduling                              |                  |
| 9/22                  | Continued                                                    |                  |
| 9/27                  | 13/15 Address Spaces, Address mechanism                      |                  |
| 9/29                  | Continued                                                    |                  |
| 10/4                  | 16/18 Segmentation and Intro into Paging                     |                  |
| 10/6                  | Continued                                                    |                  |
| Fall Break 🍂         | —                                                            | —                |
| 10/13                 | 21/22. Swapping: Mechanisms and Policies                     |                  |
| 10/18                 | Continued                                                    |                  |
| 10/20                 | 26 Concurrency (code)                                        |                  |
| 10/27                 | 27. Thread API (code)                                        |                  |
| 11/1                  | 28. Locks (Code)                                             |                  |
| 11/3                  | 30. Condition Variables (code)                               |                  |
| 11/8                  | 31. Semaphores                                               |                  |
| 11/10                 | Midterm                                                      |                  |
| 11/15                 | 36. I/O Devices                                              |                  |
| 11/17                 | 39/40. Files and Dictionaries and File System Implementation |                  |
| 11/22                 | Continued                                                    |                  |
| Thanksgiving Break 🦃 | —                                                            | —                |
| 11/29                 | *One of the file systems                                     |                  |
| 12/1                  | 45 Data Integrity and Protection                             |                  |
| 12/6                  | 48. Distributed Systems                                      |                  |
| 12/8                  | 53. Intro Security                                           |                  |
| 12/13                 | Review For Final                                             |


## Important terms

- Chapter 2 
    Virtualization
    Concurrency
    Persistence

- Chapter 4
    Process 
    Process API
    Process state 
    Process list

- Chapter 5
    Process Identifier
    Fork
    Scheduler
    Concurrency

- Chapter 14
    Stack Memory
    Malloc
    Buffer Overflow
    Purify and Valgrind 

- Chapter 6
    Time Sharing
    Limited Direct Execution
    User and Kernel Mode
    System Call 
    Context Switch


## Learning Opportunities

Interested in learning more about any of the topics on this schedule? If you
are, then make sure to connect with members of the [OS Sketch
community](/operating-systems/learning-community) for more learning
opportunities. Remember, this course emphasizes building mastery of the course's
[learning objectives](../learning-objectives) through the process of "learning
by doing" As such, you can best understand the content on this schedule by
completing all of the projects on this site!


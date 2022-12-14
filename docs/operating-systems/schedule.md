---
hide:
  - navigation
---

<style>
  background-orange{
    background-color: #f88117
  }
  background-blue{
    background-color: #23abcc
  }
  background-green{
    background-color: #4dc516
  }
  background-blue-green{
    background-color: #3ea89e
    }
  </style>

# Course Schedule

## Course Setup

### Technical Experts Duties

- Review technical content for the assigned module with Professor Kapfhammer
- Create a technical question that is the focal point for the assigned module
- Create a technical diagram that "sketches" all content for that module
- Assist with creating and proof-reading technical content for that module
- Present the technical diagram and answer any questions about the presented content

### Professional Question

- What technical content about operating systems will we cover this semester,
  how will we assess our mastery of this technical material, and how will we
  structure all aspects of this advanced course in operating systems?

### Next Steps

- Review and participate in all the discussions in the [OS Sketch Issue
  Tracker](https://github.com/OS-Sketch/www.os-sketch.com/issues) for more
  details
- Review the [course timeline](#course-timeline) for more details about reading
  assignments

## Systems Introduction

### Technical Questions

- How does the operating system use the principle of **virtualization** to
  manage the resources of a computer such as the process, memory, and file
  system? How does virtualization influence the way in which I write programs
  and use an operating system?

### Next Steps

- Read the chapters called *Introduction* (Chapter 2) and *Processes* (Chapter
  4) in [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/)
- Study the [course slides](/slides/operating-systems/systems-introduction/)
  for a detailed investigation of these chapters
- Review the [important terms](#important-terms) for definitions of the
  key terms associated with the assigned chapters
- Check out the [operating system sketch](/operating-systems/sketches/#systems-introduction)
  associated with this module

## Process Execution

### Technical Questions

- How does the operating system manage the **execution** of processes and enable
  processes to **access memory**? How does this behavior of the operating system
  influence the ways in which I program and use software tools?

### Next Steps

- Read the chapters called *Process API* (Chapter 5), *Direct Execution*
  (Chapter 6), and *Memory API* (Chapter 14) in
  [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/)
- Study the [course slides](/slides/operating-systems/process-execution/)
  for a detailed investigation of these chapters
- Review the [important terms](#important-terms) for definitions of the
  key terms associated with the assigned chapters
- Check out the [operating system sketch](/operating-systems/sketches/#process-execution)
  associated with this module

## CPU Scheduling

### Technical Questions

- How does the operating system separate **policy** from **mechanism** and make
  decisions for which **process** to **execute**? How does this behavior of the
  operating system influence the ways in which I program and use software?

### Next Steps

- Read the chapters called *CPU Scheduling* (Chapter 7) and *Lottery
  Scheduling* (Chapter 9) in [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/)
- Check out the [course
  slides](/slides/operating-systems/cpu-scheduling/) for a detailed
  investigation of these chapters
- Review the [important terms](#important-terms) for definitions of the
  terms associated with the assigned chapters
- Check out the [operating system sketch](/operating-systems/sketches/#cpu-scheduling)
  associated with this module

## Address Spaces

### Technical Questions

- What are the policies and mechanisms that the operating system uses to
 facilitate **memory access** for processes? How does this behavior of the
 operating system influence the **ways** in which we program and use software?

### Next Steps

- Read the chapters called *Address Spaces* (Chapter 13) and *Address
  Mechanisms* (Chapter 15) in [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/)
- Check out the [course
  slides](/slides/operating-systems/address-spaces/) for a detailed
  investigation of these chapters
- Review the [important terms](#important-terms) for definitions of the
  terms associated with the assigned chapters
- Check out the [operating system sketch](/operating-systems/sketches/#address-spaces)
  associated with this module

## Segmentation and Paging

### Technical Questions

- What are the general-purpose policies and mechanisms that the operating system
  uses to facilitate **memory access** for processes? How does this behavior
  influence the **ways** in which I program and use software?

### Next Steps

- Read the chapters called *Segmentation* (Chapter 16) and *Paging* (Chapter
  18) chapters in [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/)
- Check out the [course slides](/slides/operating-systems/segmentation-paging/)
  for a detailed investigation of these chapters
- Review the [important terms](#important-terms) for definitions of the terms
  associated with the assigned chapters
- Check out the [operating system sketch](/operating-systems/sketches/#segmentation-and-paging)
  associated with this module

## Memory Swapping

### Technical Questions

- What are the general-purpose policies and mechanisms that the operating
  system uses to move **memory** units from physical memory to the disk? How
  does this behavior influence the **ways** in which I program and use
  software?

### Next Steps

- Read the chapters called *Swapping Mechanisms* (Chapter 21) and *Swapping
  Policies* (Chapter 22) in [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/)
- Check out the [course
  slides](/slides/operating-systems/memory-swapping/) for a detailed
  investigation of these chapters
- Review the [important terms](#important-terms) to find definitions of the
  terms associated with the assigned chapters
- Check out the [operating system sketch](/operating-systems/sketches/#memory-swapping)
  associated with this module


## Introducing Concurrency

### Technical Questions

- What are the trade-offs associated with implementing support for **concurrency**
  in the operating system and programming languages? How does the use of
  concurrency primitives influence the **ways** in which I program and test software?

### Next Steps

- Read the chapters called *Concurrency and Threads* (Chapter 26) and *Thread API* (Chapter 27) in
  [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/)
- Check out the [course
  slides](/slides/operating-systems/concurrency-introduction/) for a detailed
  investigation of these chapters
- Review the [important terms](#important-terms) to find definitions of the
  terms associated with the assigned chapters
- Check out the [operating system sketch](/operating-systems/sketches/#introducing-concurrency)
  associated with this module

## Locking Mechanisms

### Technical Questions

- How can the use of **locks** support mutual exclusion and reliable
  **concurrency** in the operating system and programming languages? How does
  concurrency influence the behavior of a program? How does the use of
  concurrency primitives influence the **ways** in which I create software?

### Next Steps

- Read the chapters called *Locks* (Chapter 28) and *Condition Variables* (Chapter 30) in
  [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/)
- Check out the [course slides](/slides/operating-systems/locks-introduction/)
  for a detailed investigation of these chapters
- Review the [important terms](#important-terms) to find definitions of the
  terms associated with the assigned chapters
- Check out the [operating system sketches](/operating-systems/sketches/#locks)
  associated with this module

## Using Semaphores

### Technical Questions

- How can the use of **semaphores** support mutual exclusion and reliable
 **concurrency** in the operating system and programming languages? How are
 semaphores **similar** to and **different** from locks? How does the use of
 concurrency primitives influence the **ways** in which I create software?

### Next Steps

- Read the chapter called *Semaphores* (Chapter 31) in
  [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/)
- Check out the [course slides](/slides/operating-systems/semaphores-introduction/)
  for a detailed investigation of these chapters!
- Review the [important terms](#important-terms) to find definitions of the
  terms associated with the assigned chapters
- Check out the [operating system sketch](/operating-systems/sketches/#semaphores)
  associated with this module

## I/O Devices

### Technical Questions

- How does the operating system use the principle of **virtualization** to
  manage the input/output devices connected to a computer? How do
  virtualization **policies** and **mechanisms** for I/O devices influence the
  way in which I implement programs and use an operating system?

### Next Steps

- Read the chapter called *I/O Devices* chapter in
  [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/)
- Check out the [course slides](/slides/operating-systems/io-introduction/) for
  a detailed investigation of these chapters!
- Review the [important terms](#important-terms) to find definitions of the
  terms associated with the assigned chapters
- Check out the [operating system
  sketch](/operating-systems/sketches/#io-devices) associated with this module

## File Systems and Directories

### Technical Questions

- How does the operating system use **abstractions** like the **file** and the
  **directory** to make it easy for programmers to access the contents of
  persistent storage? How does the **implementation** of a file system
  influence the way in which I implement programs and use an operating system?

### Next Steps

- Read the chapters called *File and Directories* (Chapter 39) and *File System
  Implementation* (Chapter 40) in
  [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/)
- Check out the [course slides](/slides/operating-systems/files-directories/)
  for a detailed investigation of these chapters!
- Review the [important terms](#important-terms) to find definitions of the
  terms associated with the assigned chapters
- Check out the [operating system
  sketch](/operating-systems/sketches/#files-and-directories) associated with
  this module

## Network File Systems

### Technical Questions

- What are the **benefits** and **drawbacks** of a network file system? How can
  you use the principles from the field of operating systems to **implement**
  and **test** a file system that is remote from the computer that accesses it?

### Next Steps

- Read the chapter called *Network File System (NFS)* (Chapter 49) in
  [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/)
- Check out the [course slides](/slides/operating-systems/nfs-introduction/)
  for a detailed investigation of this chapter
- Review the [important terms](#important-terms) to find definitions of the
  terms associated with the assigned chapter
- Check out the [operating system sketch](/operating-systems/sketches/#network-file-system)
  associated with this module

## Data Integrity

### Technical Questions

- How can the operating system ensure that **data written** to storage is
  **protected**? What steps must be taken to ensure that data protection can be
  done with both **low time and space** overheads?

### Next Steps

- Read the chapter called *Data Integrity and Protection* (Chapter 45) in
  [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/)
- Check out the [course slides](/slides/operating-systems/data-integrity/)
  for a detailed investigation of these chapters
- Review the [important terms](#important-terms) to find definitions of the
  terms associated with the assigned chapter
- Check out the [operating system sketch](/operating-systems/sketches/##data-integrity-and-protection)
  associated with this module

## Distributed Systems

### Technical Questions

- How can we apply the principles of operating systems to the design and
  implementation of a distributed system that involves clients and servers not
  located on the same network? In particular, how can we build systems that
  operate reliably even when their components are prone to failure?

### Next Steps

- Read the chapter called *Distributed Systems* (Chapter 48) in
  [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/)
- Check out the [course slides](/slides/operating-systems/distributed-systems/)
  for a detailed investigation of these chapters
- Review the [important terms](#important-terms) to find definitions of the
  terms associated with the assigned chapter
- Check out the [operating system sketch](/operating-systems/sketches/#distributed-systems)
  associated with this module

## Introducing Security

### Technical Questions

- How can we apply the principles of computer security to ensure that large and
  complex operating systems permit resource sharing without allowing access to
  not-permitted resources or impermissible actions to take place?

### Next Steps

- Read the chapter called *Introduction to Security* (Chapter 53) and quickly
  scan the chapters called *Authentication* (Chapter 54) and *Access Control*
  (Chapter 55) in [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/)
- Check out the [course
  slides](/slides/operating-systems/security-introduction/) for a detailed
  investigation of these chapters
- Review the [important terms](#important-terms) to find definitions of the
  terms associated with the assigned chapter

## Course Timeline

| Class Date            | Chapter/Topics                                               | Expert/Presenter |
|-----------------------|--------------------------------------------------------------|------------------|
| 9/13                  | <background-orange>2/4. <a class = "booklink" style="color:#000000;text-decoration:underline" href="https://pages.cs.wisc.edu/~remzi/OSTEP/intro.pdf" target="_blank">Introduction</a>/ <a class = "booklink" style="color:#000000;text-decoration:underline" href="https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf" target="_blank">Processes</a></background-orange>                                   | Peter, Anthony   |
| 9/15                  | <background-orange>Processes Continued</background-orange>                                          |                  |
| 9/20                  | <background-orange>5/14/6. <a class = "booklink" style="color:#000000;text-decoration:underline" href="https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-api.pdf" target="_blank">Process API</a>, <a class = "booklink" style="color:#000000;text-decoration:underline" href="https://pages.cs.wisc.edu/~remzi/OSTEP/vm-api.pdf" target="_blank">Memory API</a>, <a class = "booklink" style="color:#000000;text-decoration:underline" href="https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-mechanisms.pdf" target="_blank">Direct Execution</a></background-orange>              | Lex, Caden       |
| 9/22                  | <background-orange>Continued </background-orange>                                                   |                  |
| 9/27                  | <background-orange>7/9. <a class = "booklink" style="color:#000000;text-decoration:underline" href="https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched.pdf" target="_blank">CPU</a> and <a class = "booklink" style="color:#000000;text-decoration:underline" href="https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched-lottery.pdf" target="_blank">Lottery Scheduling</a> </background-orange>                              | Favour, Katie    |
| 9/29                  | <background-orange>Continued</background-orange>                                                    |                  |
| 10/4                  | <background-orange>13/15. <a class = "booklink" style="color:#000000;text-decoration:underline" href="https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf" target="_blank">Address Spaces</a>, <a class = "booklink" style="color:#000000;text-decoration:underline" href="https://pages.cs.wisc.edu/~remzi/OSTEP/vm-mechanism.pdf" target="_blank">Address Mechanism</a></background-orange>                      | Thomas, Abagail  |
| 10/6                  | <background-orange>Continued</background-orange>                                                    |                  |
|                       | ???? Fall Break ????                                                                                             |                 |
| 10/13                 | <background-orange>16/18. <a class = "booklink" style="color:#000000;text-decoration:underline" href="https://pages.cs.wisc.edu/~remzi/OSTEP/vm-segmentation.pdf" target="_blank">Segmentation</a> and <a class = "booklink" style="color:#000000;text-decoration:underline" href="https://pages.cs.wisc.edu/~remzi/OSTEP/vm-paging.pdf" target="_blank">Intro into Paging</a></background-orange>                     | Esteban, Caden       |
| 10/18                 | <background-orange>21/22. <a class = "booklink" style="color:#000000;text-decoration:underline"href="https://pages.cs.wisc.edu/~remzi/OSTEP/vm-beyondphys.pdf" target="_blank">Swapping: Mechanisms</a> and <a class = "booklink" style="color:#000000;text-decoration:underline" href="https://pages.cs.wisc.edu/~remzi/OSTEP/vm-beyondphys-policy.pdf" target="_blank">Policies</a></background-orange>                     | Jeff, Garrison             |
| 10/20                 | <background-orange>Continued</background-orange>                                                    |                  |
| 10/27                 | <background-blue>26. <a class = "booklink" style="color:#000000;text-decoration:underline" href="https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf" target="_blank">Concurrency<a> <a href="https://github.com/remzi-arpacidusseau/ostep-code/tree/master/threads-intro" target="_blank">(code)</a></background-blue>                                       | Paige            |
| 11/1                  | <background-blue>27. <a class = "booklink" style="color:#000000;text-decoration:underline" href="https://pages.cs.wisc.edu/~remzi/OSTEP/threads-api.pdf" target="_blank">Thread API</a> <a href="https://github.com/remzi-arpacidusseau/ostep-code/tree/master/threads-api" target="_blank">(code)</a></background-blue>                                        | Zackery          |
| 11/8                  | <background-blue>28. <a class = "booklink" style="color:#000000;text-decoration:underline" href="https://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks.pdf" target="_blank">Locks Pt.1</a> <a href="https://github.com/remzi-arpacidusseau/ostep-code/tree/master/threads-locks" target="_blank">(code)</a></background-blue>                                            | Michael          |
| 11/10                 | <background-blue>28. <a class = "booklink" style="color:#000000;text-decoration:underline" href="https://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks.pdf" target="_blank">Locks Pt.2</a> and<a href="https://pages.cs.wisc.edu/~remzi/OSTEP/threads-cv.pdf" target="_blank"> Condition Variables</a></background-blue> | Michael, Gary      |
| 11/15                 | <background-blue>31. <a class = "booklink" style="color:#000000;text-decoration:underline" href="https://pages.cs.wisc.edu/~remzi/OSTEP/threads-sema.pdf" target="_blank">Semaphores</a> <a href="https://github.com/remzi-arpacidusseau/ostep-code/tree/master/threads-sema" target="_blank">(code)</a></background-blue>               |    Yanqiao           |
| 11/16                 | ???? Mid-term Exam During lab ????                                                      |                 |
| 11/17                 | <background-green>36. <a class = "booklink" style="color:#000000;text-decoration:underline" href="https://pages.cs.wisc.edu/~remzi/OSTEP/file-devices.pdf" target="_blank">I/O Devices</a></background-green>                                              | Kyrie            |
| 11/22                 | <background-green>39/40. <a class = "booklink" style="color:#000000;text-decoration:underline" href="https://pages.cs.wisc.edu/~remzi/OSTEP/file-intro.pdf" target="_blank">Files and Directories</a> and <a class = "booklink" style="color:#000000;text-decoration:underline" href="https://pages.cs.wisc.edu/~remzi/OSTEP/file-implementation.pdf" target="_blank">File System Implementation</a></background-green> | Dylan, Kobe      |
|                       | ???? Thanksgiving Break ????                                                                                    |                 |
| 11/29                 | <background-green>Continued</background-green>                                                   |                  |
| 12/1                  | <background-green>49. <a class = "booklink" style="color:#000000;text-decoration:underline" href="https://pages.cs.wisc.edu/~remzi/OSTEP/dist-nfs.pdf" target="_blank">Network File Systems</a></background-green>                                     | Liam B, Liam M            |
| 12/6                  | <background-green>45. <a class = "booklink" style="color:#000000;text-decoration:underline" href="https://pages.cs.wisc.edu/~remzi/OSTEP/file-integrity.pdf" target="_blank">Data Integrity and Protection</a> </background-green>     | Jordan           |
| 12/8                  | <background-green>48. <a class = "booklink" style="color:#000000;text-decoration:underline" href="https://pages.cs.wisc.edu/~remzi/OSTEP/dist-intro.pdf" target="_blank">Distributed Systems</a></background-green>                                      | Bill, Andre      |
| 12/13                 | <background-blue-green>53. <a class = "booklink" style="color:#000000;text-decoration:underline" href="https://pages.cs.wisc.edu/~remzi/OSTEP/security-intro.pdf" target="_blank">Intro Security</a></background-blue-green>     | Jordan           |
| 12/14                 | ???? Review For Final and Project Demos (2:30 - 4:30 PM) ????                                            |                  |

[Return to top of the page](#course-schedule)

## Important Terms

### Introduction: Chapter 2

???+ note "Technical Concepts"

    - **Virtualization** - the process by which the operating system takes a
      physical resource (such as the processor, or memory, or a disk) and
      transforms it into a more general, more powerful, more secure, and
      easier-to-use virtual version of itself
    - **Concurrency** - managed by the operating system and/or the programming
      langauge, the situation in which multiple computations happen at the same
      time
    - **Persistence** - the process of storing data in a computer system, as a
      way of ensuring that data survives after the ending of the process that
      created it
    - **Journaling** - also known as copy-on-write, is a special ordering protocol
      to ensure that if the disk is to fail during a write the system can recover
      to a reasonable state going forward
    - **Abstraction** - The abstraction process is a fundemental piece to the
      coding method that helps break all of the requirements of a large program
      into small and understandable pieces. I.E. = writing a high level c language
      program without needing to focus on the assembly language, or writing code
      in assembly without worrying about logic gates.

    ###### [Return](#systems-introduction) to the *Systems Introduction* module

### Processes: Chapter 4

???+ note "Technical Concepts"

    - **Process** - it is the operating system that takes these bytes and gets them
      running transforming the program into something useful
    - **Process API** - consists of calls programs can make related to processes
      Typically, this includes creation, destruction, and other useful calls
    - **Process state** - including running, ready to run, and blocked; different
      events (e.g., getting scheduled or de-scheduled, or waiting for an I/O to
      complete) transition a process from one of these states to the other
    - **Process list** - contains information about all processes in the system
    - **Process Control Block** - An individual structure that stores all of the
      information about a process inorder to keep track of all the running
      programs in a system.
    - **Context Switch ** - gives the OS the ability to stop running one program and start running another on a given CPU

    ###### [Return](#systems-introduction) to the *Systems Introduction* module

### Process API: Chapter 5

???+ note "Technical Concepts"

    - **Process Identifier** - used to name the process if one wants to do something with the process, such as (for example) stop it from running
    - **Fork** - is used in UNIX systems to create a new process
    - **Exec** - allows a child process to break free from its similarity in
      its parent function and execute an entirely new program
    - **Scheduler** - determines which process runs at a given moment in time
    - **Superuser** - controls all processes (and indeed do many other things); this role should be assumed infrequently and with caution for security reasons

    ###### [Return](#process-execution) to the *Process Execution* module

### Direct Execution: Chapter 6

???+ note "Technical Concepts"

    - **Time Sharing** - when you run one process for a little while,then run another one, and so forth
    - **Limited Direct Execution** - to make a program run as fast as one might expect
    - **User and Kernel Mode** - the approach we take is to introduce a new processor mode. The operating system runs in
    - **Context Switch** - when the OS, during a timer interrupt or system call, might wish to switch from running the current process to a different one
    - **System-call** - allows the kernel to have access to key functionality of the users programs I.E: file system, create/destroy process, process communication, and memory allocation

    ###### [Return](#process-execution) to the *Process Execution* module

### Memory API: Chapter 14

???+ note "Technical Concepts"

    - **Stack Memory** - allocations and deallocations of it are managed implicitly by the compiler for you
    - **Buffer Overflow** - a related error is not allocating enough memory
    - **Purify and Valgrind** - both are excellent at helping you locate the source of your memory-related problems
    - **Heap Memory** - all allocation and deallocation of heap memory is controlled soley by the programmer
    - **Malloc()** - you pass malloc a size you request for room on the heap that either passes you a pointer to your newly allocated space or fails and returns NULL

    ###### [Return](#process-execution) to the *Process Execution* module

### CPU Scheduling: Chapter 7

???+ note "Technical Concepts"

    - **Workload** - simplifying assumptions about the processes running in the system
    - **First In, First Out (FIFO)** - means the first element in, is the first element out
    - **Shortest Job First (SJF)** - runs the shortest job first, then the next shortest, and so on
    - **Turnaround Time** - the time that the job takes to complete minus the time it
      took for the job to arrive in the system
    - **Response Time** - the time from when a process was scheduled to the time it arrived in the system

    ###### [Return](#cpu-scheduling) to the *CPU Scheduling* module

### Lottery Scheduling: Chapter 9

???+ note "Technical Concepts"

    - **Proportional-Share** - instead of optimizing for turnaround or response time, a scheduler might instead try to guarantee that each job obtains a certain percentage of CPU time
    - **Ticket** - used to represent the share of a resource that a process should receive
    - **Ticket Currency** - allows a user with a set of tickets to allocate tickets among their own jobs in whatever currency they would like
    - **Ticket Transfer** - a process can temporarily hand off its tickets to another process
    - **Ticket Inflation** - a process can temporarily raise or lower the number of tickets it owns

    ###### [Return](#cpu-scheduling) to the *CPU Scheduling* module

### Address Spaces: Chapter 13

???+ note "Technical Concepts"

    - **Stack** - a linear data structure that follows the principal of Last In First Out (LIFO). This means the last element inserted inside the stack is removed first
    - **Heap** - an area of pre-reserved computer main storage (memory) that a program process can use to store data in some variable amount that won't be known until the program is running
    - **Virtualizing Memory** - the system can load larger or multiple programs running at the same time, enable each one to operate as if it has more space, without having to purchase more RAM
    - **Address Space** - the address space of a process contains the view of memories state in the running program
    - **Virtual Address** - this is a virtualized reference point of a physical address that the program can affect without triggering the physical address space until warrented

    ###### [Return](#address-spaces) to the *Addresses Spaces* module

### Address Translation: Chapter 15

???+ note "Technical Concepts"

    - **Limited Direct Execution (LDE)** - letting the program run directly on the hardware; however at certain key points in time, arrange so that the OS gets involved and makes sure the "right" thing happens
    - **Address Translation** - the hardware transforms each memory access, changing the virtual address provided by the instruction to a physical address where the desired information is actually located
    - **Static Relocation** - which a piece of software known as the loader takes an executable that is about to be run and rewrites its addresses to the desired offset in physical memory
    - **Free List** - a list of the ranges of the physical memory which are not currently in use
    - **Memory Management Unit (MMU)** - the part of the centrilized processing unit that accounts for address translation

    ###### [Return](#address-spaces) to the *Addresses Spaces* module

### Segmentation: Chapter 16

???+ note "Technical Concepts"

    - **Segmentation** - is having an enclosed portion of the address space of any particular length. There are three logically different segments: code, stack, and heap, that all do different things
    - **Segmentation Fault** - arises from a memory access on a segmented machine to an illegal address
    - **Sparse Address Spaces** - large address spaces with large amounts of unused address space
    - **External Fragmentation** - a general problem that arises when physical memory quickly becomes full of little holes of free space, making it difficult to allocate new segments, or to grow existing ones
    - **Sparse Address Spaces** - in the physical memory, this is a address space with a larger portion of the space not being used

    ###### [Return](#segmentation-and-paging) to the *Segmentation and Paging* module

### Introduction To Paging: Chapter 18

???+ note "Technical Concepts"

    - **Paging** - the process's address space is split into a number of variable-sized units
    - **Page Tables** - operating system structure used to store per-process address space
    - **Virtual Page Number (VPN)** - virtual address that the process generates
    - **Physical Frame Number (PFN)** - where the virtual page number is indexed in the frames
    - **Physical Page Number (PPN)** - same as PFN

    ###### [Return](#segmentation-and-paging) to the *Segmentation and Paging* module

### Swapping Mechanisms: Chapter 21

???+ note "Technical Concepts"

    - **High Watermark (HW)** - a way the that the operating system keeps a small amount of memory free
    - **Low Watermark (LW)** - a way the that the operating system keeps a small amount of memory free
    - **Swap Daemon** - the process in which the operating system sorts LW amd HW to keep memory free
    - **Present Bit** - when the hardware looks in the
    PTE, its looking to see where the present bit is located and if the page is in the memory(1) or on the disk somewhere(0)
    - **Page-Fault Handler** - When the present bit is not functioning the Page-Fault Handler arranges for the transfer of the desired page from disk to memory

    ###### [Return](#swapping) to the *Swapping* module

### Swapping Policies: Chapter 22

???+ note "Technical Concepts"

    - **Average Memory Access Time (AMAT)** - the number of cache hits and misses that a page is found
    - **Temporal Locality** - programs keep locality in their access streams when storing and accessing memory
    - **Clock Algorithm** - the way an operating system approximates LRU by randomly picking a page
    - **Modified Bit** - a bit that is used in the page-replacement process
    - **FIFO replacement** - fifo replacement (first-in, first-out) enters the system; when a re-placement occurs and the page on the tail of the queue (the ???first-in??? page) is evicted

    ###### [Return](#swapping) to the *Swapping* module

### Concurrency and Threads: Chapter 26

???+ note "Technical Concepts"

    - **Thread Control Blocks (TCBs)** - stores the state of a thread in a process
    - **Disassembler** - shows what assembly instructions were used in the program
    - **Transaction** - grouping of many actions into a single atomic action
    - **Critical Section** - piece of code that when accesses a shared resource, usually a variable or data structure
    - **Race Condition** - arises if multiple threads of execution enter the critical section at roughly the same time
    - **Parallelization** - the practice of taking a single-threaded program into a program that run this work on multiple CPU cores

    ###### [Return](#concurrency) to the *Concurrency* module

### Thread API: Chapter 27

???+ note "Technical Concepts"

    - **Function Pointer** - looks for which function threads should start running in
    - **Procedure Call** - creates a thread or multiple threads
    - **Critical Section** - region of code that needs to be protected for operation
    - **Heap** - allows you to share data between threads
    - **Lack of Proper Initialization** - a error that occurs when locks are not properly initialized to begin with creating incorrect values to begin with
    - **Condition Variable** - useful when some kind os signaling must take place between threads, especial if one thread is waiting on another

    ###### [Return](#thread-api-and-locks) to the *Thread API and Locks* module

### Locks: Chapter 28

???+ note "Technical Concepts"

    - **Spinning** - a thread being told to wait before the action is executed based on a lock being in place
    - **Mutual Exclusion** - if one thread is in the critical section it excludes others from entering
    - **Fairness** - does each thread contending for the lock get an equal shot at it
    - **Performance** - time added by using the lock
    - **Preemptive Scheduler** - to work correctly on a single processor, it requires a preemptive scheduler it will interrupt a thread via a timer, in order to run a different thread
    - **Flags** - Variables used to indicate whether a thread has possession over a lock

    ###### [Return](#thread-api-and-locks) to the *Thread API and Locks* module

### Condition Variables: Chapter 30

???+ note "Technical Concepts"

    - **Condition variable** - an explicit queue threads can put themselves on when some state of execution is less desirable than another thread;  when it changes state the other threads can be woken up and allowed to continue
    - **Wait/Signal** - the actions used in a conditional variable.  The thread waits on a specific condition to be met and then signals the sleeping threads to be executed
    - **Bounded Buffer** - a system of multiple producer threads and consumer threads which is shared
    - **Producer/Consumer Threads** - for a producer it puts a integer into the shared buffer loops a number of times, a consumer that gets the data out of that shared buffer (forever), each time printing out the data item it pulled from the shared buffer
    - **Mesa semantics** - When a signal is made, the thread is taken out of the waiting queue.
    - **Hoare semantics** - Is harder to implement than Mesa semantics, but runs the waken thread more efficiently

    ###### [Return](#variations-of-locks) to the *Variations of Locks* module

### Semaphores: Chapter 31

???+ note "Technical Concepts"

    - **Deadlock** - a problem that occurs when a consumer thread is called before the producer when trying to use mutual exclusion
    - **Throttling** - an imposed limit to the number of threads that can be simultaneously executed on a piece of code.  Used to keep the system from bogging down
    - **Zemaphore** - an easier-to-implement version of the semaphore where we don???t maintain the value of the semaphore, when negative, reflects the number of waiting threads
    - **Hill???s Law** - sometimes simple and dumb is better.  Just because you can make something sophisticated to solve a problem doesn???t mean it???s the best answer
    - **Scheduler State** - there are three different states,  Run (the thread is running), Ready (i.e., runnable but not running), and Sleep (the thread is blocked)
    - **Binary Sephamore** - Sephamores that contain locks. These locks only contain two states, held and not held

    ###### [Return](#variations-of-locks) to the *Variations of Locks* module

### I/O Devices: Chapter 36

???+ note "Technical Concepts"

    - **DMA (direct memory access)** - a device within a system that orchestrates transfers between devices and memory without much CPU intervention
    - **Memory-mapped I/O** - another method to interact with devices.  With this version the hardware makes device registers available as if they were memory locations  Helpful because no new instructions are needed to support it
    - **Hardware Interface** - the way for the software to communicate and interact with the hardware system
    - **Internal Structure** - responsible for implementing the abstraction the device presents to the system
    - **I/O instructions** - a way for the OS to send data to specific device registers and thus allow the construction of the protocols 
    - **Peripheral Bus** - These connect slower devices to the system. This would include hard-drives, printers, and keyboards.

    ###### [Return](#io-devices) to the *I/O Devices* module

### Files and Directories: Chapter 39

???+ note "Technical Concepts"

    - **Persistent Storage** - a permanent storage device that keeps information intact after a loss of power
    - **File** - an array of bytes that can be created, read, written and deleted.  Low level name is i-number
    - **Directory** - an array of tuples, each containing a human-readable and low-level name to which it is mapped
    - **Directory Tree** - organizes all files into a tree, starting with the root.
    - **Hard Link** - an entry in the file system tree.  Takes two arguments (old path name and new) and creates another way to refer to that same file
    - **Symbolic (soft) Link** - different type of link that allows links to files in other disk partitions than the one the original file is in

    ###### [Return](#file-systems-and-directories) to the *File Systems and Directories* module

### File System Implementation: Chapter 40

???+ note "Technical Concepts"

    - **VSFS (Very Simple File System)** - a simplified version of UNIX and utilizes basic on-disk structures, access methods, and multiple file system
    - **Access Methods** - the methods which allow for calls to be made. They include actions such as open(), read(), and write()
    - **Metadeta** - types of data about data. Mainly consists of data about data blocks, file size, owner and access rights, etc.
    - **Inode** - a series of nodes arranged in an array and indexed into when the user is accessing a specific inode.
    - **Indirect Pointer** - a type of pointer that points to other pointers which direct the program to a specific memory address or another pointer
    - **Fixed-Size Cache** - a small amount of fast memory inside of a processor to improve the speed of which computational tasks are completed

    ###### [Return](#file-systems-and-directories) to the *File Systems and Directories* module

### Network File Systems: Chapter 49

???+ note "Technical Concepts"

    - **Stateless Protocol** - simplistic crash recovery process where the server restarts and works as it did previously
    - **Recovery Protocol** - a specific protocol where there's enough memory available to tell the server what it needs to know
    - **Mount Protocol** - the first process through which the clients and servers connect together
    - **Virtual File System (VFS)** - allows for the use of multiple file systems to be utilized for a given operating system
    - **Write Buffering** - the delayed sending of the clients data to the server. The submitted data to the network is first held locally in the client's cache
    - **Idempotency** - any function that can be executed several times without changing the final result beyond its first iteration.
    - **Cache** - a transient high-speed data storage layer allowing the user to avoid communication with the network to access data.
    - **Flush-on-Close** - when a file is written to and closed, the client "flushes" all updates to the server to ensure future clients will see the latest file version.
    - **Stale Cache** - a cache, where the object in the cache is not the most recent version committed to the data source.

    ###### [Return](#file-systems-and-directories) to the *File Systems and Directories* module

### Data Integrity and Protection: Chapter 45

???+ note "Technical Concepts"

    - **Fail-Stop** - an early feature of RAID systems where either the disk is working or not at all
    - **Silent Faults** - when the storage drive disk doesn't give any appearance of a problem when the data returned is corrupted
    - **Misdirected Write** - when data is written correctly to the disk storage but in the wrong memory address
    - **Cyclic Redundancy Check (CRC)** - remainder of binary division between a large binary number (D) and an agreed value of (k)
    - **Lost Write** - the device doesn't inform the upper layer that a write finished but the new changes never persisted into the next state, thus exposing the past state before the write
    - **Error Correcting Codes (ECC)** - used by the drive to determine whether the on-disk bits in a block are good or bad. in some cases the ecc will fix the bits but if it doesn't have enough information it will print error.

    ###### [Return](#data-integrity-and-security) to the *Data Integrity and Security* module

### Intro Security: Chapter 53

???+ note "Technical Concepts"

    - **Trusted Platform Module (TPM)** - authenticated to users that they were starting up the operating system and version they had intended to do so
    - **Access Control Mechanisms** - the process through which an operating system determines if the user has the proper authorization to perform the requested action
    - **Non-Repudiation** - the authentication of prior actions in the operating system that cannot be forged
    - **Security Policies** - a list of rules and specifications for ensuring security in an operating system environment
    - **Fail-safe defaults** - Defaults for policies to be more secure

    ###### [Return](#data-integrity-and-security) to the *Data Integrity and Security* module

### Distributed Systems: Chapter 48

???+ note "Technical Concepts"

    - **Checksums** - method to detect memory corruption quickly
    - **End-to-end argument** - method through which packet loss, aka data loss, is avoided
    - **UDP/IP** - common networking stack that involves the use of sockets to communicate with an endpoint, and send datagrams which are short messages
    - **TCP/IP** - commonly used reliable networking stack involving machinery to handle network congestion, multiple outstanding requests and other optimizations
    - **Acknowledgment** - a technique involving the message receiver sending back an acknowledgment to the sender
    - **Timeout/Retry** - an approach used for handling dropped message requests
    - **Sequence Counter** - an approach used for incrementing and tracking messages between the sender and receiver
    - **Distributed Shared Memory (DSM)** - allows for multiple computers on the network to share large virtual address space, akin to how processors have multiple cores which allow for the use of threading
    - **Remote Procedure Call (RPC)** - simple and easy way to execute code on a remote machine
    - **Stub Generator** - creates client and server stubs containing functions specified in the interface to be used in the RPC service
    - **Message Buffer** - a contiguous array of bytes of some size
    - **Marshaling/Serialization** - packing necessary information such as an identifier and arguments into a single contiguous buffer
    - **Unmarshaling/Deserialization** - unpacking the returned information from more complex functions, extracting identifier and arguments
    - **Run-time Library** - used for handling much of the RPC system, including most performance and reliability issues

    ###### [Return](#distributed-systems) to the *Distributed Systems* module

## Learning Opportunities

Interested in learning more about any of the topics on this schedule? If you
are, then make sure to connect with members of the [OS Sketch community](/operating-systems/learning-community)
for more learning opportunities. Remember, this course emphasizes building mastery of the course's
[learning objectives](../learning-objectives) through the process of "learning
by doing". As such, you can best understand the content on this schedule by
completing all of the projects on this site!

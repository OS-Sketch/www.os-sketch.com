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

### Technical Experts Duties 
- Review content with Professsor Kaphammer
- Make a os diagram
- Additionally help with adding content

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

## Semaphores

### Technical Questions

- What are we lacking from conditional variables and locks that Semaphores solve?  How does this fit into concurrency?

### Next Steps

- *Semaphores* chapter in [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/)

## I/O Devices, Files and Directories

### Technical Questions

- How should I/O be integrated into the system?  How can we make them efficient?
- How should the OS manage a persistent device? What are the APIs?  What are the important aspects of the implementation?

### Next Steps

- *I/O Devices* and *Files and Directories* chapters in [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/)

---

## Locks and Conditional Variables

### Technical Questions

- What are locks, and how do they aid in **concurrency**?  What are some problems using locks can cause?  What is the greatest benefit we get from condition variables in relation to locks?  How do these two ideas interact?

### Next Steps


## File System Implementation

### Technical Questions

- How do operating systems manage their files, what data is stored about the data in the file system(s), and where is that meta data stored?

### Next Steps
- *File System Implementation*[OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/file-implementation.pdf)

## Data Integrity and Protection

### Technical Questions

- How do data sysetms maintain their reliability, and how can they best ensure storage accuracy and safety?

### Next Steps
- *Data Integrity and Protection* chapters in [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/file-integrity.pdf)

## Distributed Systems

### Technical Questions

- What is a **distributed system** and how do they function while minimizing any communication failures? How do clients and servers communicate with each other and maximize speed and functionality?

### Next Steps

- *Distributed Systems* chapters in [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/dist-intro.pdf)


## Intro Security

### Technical Questions

- What importance does security have in an operating system? How do security failures contribute to reduced security How can security goals be achieved? What mechanisms support general security policies in an operating system?

### Next Steps
- *Intro Security* chapters in [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/security-intro.pdf)

## Course Timeline

| Class Date            | Chapter/Topics                                               | Expert/Presenter |
|-----------------------|--------------------------------------------------------------|------------------|
| 9/1                   | Continued work from lab                                      |                  |
| 9/13                  | 2/4. Introduction/Processes                                  | Peter            |
| 9/15                  | Processes Continued                                          |                  |
| 9/20                  | 5/14/6. Process API Memory API, Direct Execution             | Lex              |
| 9/22                  | Continued                                                    |                  |
| 9/27                  | 7/9. CPU and Lottery Scheduling                              |                  |
| 9/29                  | Continued                                                    |                  |
| 10/4                  | 13/15 Address Spaces, Address mechanism                      |                  |
| 10/6                  | Continued                                                    |                  |
| Fall Break 🍂        | -                                                             |-                 |
| 10/13                 | 16/18 Segmentation and Intro into Paging                     |                  |
| 10/18                 | 21/22. Swapping: Mechanisms and Policies                     |                  |
| 10/20                 | Continued                                                    |                  |
| 10/27                 | 26 Concurrency (code)                                        |                  |
| 11/1                  | 27. Thread API (code)                                        |                  |
| 11/3                  | 28. Locks (Code)                                             |                  |
| 11/8                  | 30. Condition Variables (code)                               |                  |
| 11/10                 | 31. Semaphores                                               |                  |
| 11/15                 | Midterm                                                      |                  |
| 11/17                 | 36. I/O Devices                                              |                  |
| 11/22                 | 39/40. Files and Dictionaries and File System Implementation | Dylan            |
| Thanksgiving Break 🦃| -                                                             | -                |
| 11/29                 | Continued                                                    |                  |
| 12/1                  | 49. Network File Systems                                     | Liam             |
| 12/6                  | 45/53. Data Integrity and Protection and Intro Security      | Jordan           |
| 12/8                  | 48. Distributed Systems                                      |                  |
| 12/13                 | Review For Final                                             |                  |


## Important terms

Introduction: Chapter 2

1. **Virtualization** - the OS takes a physical resource (such as the processor, or memory, or a disk) and transforms it into a more general powerful, and easy-to-use virtual form of itself.
2. **Concurrency** - When multiple computations are happening at the same time
3. **Persistence** - The context of storing data in a computer system, this means that the data survives after the process with which it was created has ended.

Processes: Chapter 4

1. **Process** - It is the operating system that takes these bytes and gets them running transforming the program into something useful.
2. **Process API** - consists of calls programs can make related to processes. Typically, this includes creation, destruction, and other useful calls.
3. **Process state** -  Including running, ready to run, and blocked. Different events (e.g., getting scheduled or descheduled, or waiting for an I/O to complete) transition a process from one of these states to the other.
4. **Process list** - Contains information about all processes in the system.

Process API: Chapter 5

1. **Process Identifier** - Used to name the process if one wants to do something with the process, such as (for example) stop it from running. 
2. **Fork** - Is used in UNIX systems to create a new process.
3. **Scheduler** - Determines which process runs at a given moment in time.
4. **Superuser** - Controls all processes (and indeed do many other things); this role should be assumed infrequently and with caution for security reasons.

Direct Execution: Chapter 6

1. **Time Sharing** - When you run one process for a little while,then run another one, and so forth. 
2. **Limited Direct Execution** - To make a program run as fast as one might expect.
3. **User and Kernel Mode** - The approach we take is to introduce a new processor mode. The operating system runs in.
4. **Context Switch** - When the OS, during a timer interrupt or system call, might wish to switch from running the current process to a different one.

CPU Scheduling: Chapter 7

1. **Workload** - simplifying assumptions about the processes running in the system
2. **First In, First Out (FIFO)** - means the first element in, is the first element out
3. **Shortest Job First (SJF)** - runs the shortest job first, then the next shortest, and so on

Lottery Scheduling: Chapter 9

1. **Proportional-Share** - instead of optimizing for turnaround or response time, a scheduler might instead try to guarantee that each job obtains a certain percentage of CPU time
2. **Ticket** - used to represent the share of a resource that a process should receive
3. **Ticket Currency** - allows a user with a set of tickets to allocate tickets among their own jobs in whatever currency they would like
4. **Ticket Transer** - a process can temporarily hand off its tickets to another process
5. **Ticket Inflation** - a process can temporarily raise or lower the number of tickets it owns

Address Spaces: Chapter 13

1. **Stack** - a linear data structure that follows the principal of Last In First Out (LIFO). This means the last element inserted inside the stack is removed first.
2. **Heap** - an area of pre-reserved computer main storage (memory) that a program process can use to store data in some variable amount that won't be known until the program is running
3. **Virtualizing Memory** - the system can load larger or multiple programs running at the same time, enable each on eot operate as if it has more space, without having to purchase more RAM

Memory API: Chapter 14

1. **Stack Memory** - Allocations and deallocations of it are managed implicitly by the compiler for you.  
2. **Buffer Overflow** - A related error is not allocating enough memory.
3. **Purify and Valgrind** - Both are excellent at helping you locate the source of your memory-related problems

Address Translation: Chapter 15

1. **Limited Direct Execution (LDE)** - letting the program run directly on the hardware; however at certain key points in time, arrange so that the OS gets involved and makes sure the "right" thing happens.
2. **Address Translation** - the hardware transforms each memory access, changing the virtual address provided by the instruction to a physical address where the desired information is actually located.
3. **Static Relocation** - which a piece of software known as the loader takes an executable that is about to be run and rewrites its addresses to the desired offset in physical memory
4. **Free List** - a list of the ranges of the physical memory which are not currently in use.

Segmentation: Chapter 16

1. **Segmentation Fault** - arises from a memory access on a segmented machine to an illegal address.
2. **Sparse Address Spaces** - large address spaces with large amounts of unused address space.
3. **External Fragmentation** - a general problem that arises when physical memory quickly becomes full of little holes of free space, making it difficult to allocate new segments, or to grow existing ones.

Introduction To Paging: Chapter 18

1. **Paging** - the process's address space is split into a number of variable-sized units.
2. **Page Tables** - operating system structure used to store per-process address space.
3. **Virtual Page Number (VPN)** - virtual address that the process generates.
4. **Physical Frame Number (PFN)** - where the virtual page number is indexed in the frames.
5. **Physical Page Number (PPN)** - Same as PFN.

Swapping Mechanisms: Chapter 21

1. **High Watermark (HW)** - a way the that the operating system keeps a small amount of memory free.
2. **Low Watermark (LW)** - a way the that the operating system keeps a small amount of memory free.
3. **Swap Daemon** - the process in which the operating system sorts LW amd HW to keep memory free.

Swapping Policies: Chapter 22

1. **Average Memory Access Time (AMAT)** - the number of cache hits and misses that a page is found.
2. **Temporal Locality** - programs keep locality in their access streams when storing and accessing memory.
3. **Clock Algorithm** - the way an operating system approximates LRU by randomly picking a page.
4. **Modified Bit** - a bit that is used in the page-replacement process.

Concurrency and Threads: Chapter 26

1. **Thread Control Blocks (TCBs)** - stores the state of a thread in a process.
2. **Disassembler** - shows what assembly instructions were used in the program.
3. **Transaction** - grouping of many actions into a single atomic action.
4. **Critical Section** - piece of code that when accesses a shared resource, usually a variable or data structure.
5. **Race Condition** - arises if multiple threads of execution enter the critical section at roughly the same time.

Thread API: Chapter 27

1. **Function Pointer** - looks for which function threads should start running in.
2. **Procedure Call** - creates a thread or multiple threads.
3. **Critical Section** - region of code that needs to be protected for operation.

Locks: Chapter 28

1. **Spinning** - a thread being told to wait before the action is executed based on a lock being in place.
2. **Mutual Exclusion**: if one thread is in the critical section it excludes others from entering.
3. **Fairness**: does each thread contending for the lock get an equal shot at it.
4. **Performance**: time added by using the lock.

Condition Variables: Chapter 30

1. **Condition variable**: an explicit queue threads can put themselves on when some state of execution is less desirable than another thread.  When it changes state the other threads can be woken up and allowed to continue.
2. **Wait/Signal**: the actions used in a conditional variable.  The thread waits on a specific condition to be met and then signals the sleeping threads to be executed.
3. **Bounded Buffer**: a system of multiple producer threads and consumer threads which is shared.

Semaphores: Chapter 31

1. **Deadlock** - A problem that occurs when a consumer thread is called before the producer when trying to use mutual exclusion.
2. **Throttling** - An imposed limit to the number of threads that can be simultaneously executed on a piece of code.  Used to keep the system from bogging down.
3. **Zemaphore** - An easier-to-implement version of the semaphore where we don’t maintain the value of the semaphore, when negative, reflects the number of waiting threads.
4. **Hill’s Law** - Sometimes simple and dumb is better.  Just because you can make something sophisticated to solve a problem doesn’t mean it’s the best answer.

I/O Devices: Chapter 36

1. **DMA (direct memory access)** - a device within a system that orchestrates transfers between devices and memory without much CPU intervention.
2. **Memory-mapped I/O** - Another method to interact with devices.  With this version the hardware makes device registers available as if they were memory locations.  Helpful because no new instructions are needed to support it.
3. **Hardware Interface** - The way for the software to communicate and interact with the hardware system.
4. **Internal Structure** - Responsible for implementing the abstraction the device presents to the system.

Files and Directories: Chapter 39

1. **Persistent Storage** - A permanent storage device that keeps information intact after a loss of power.
2. **File** - An array of bytes that can be created, read, written and deleted.  Low level name is i-number.
3. **Directory** - An array of tuples, each containing a human-readable and low-level name to which it is mapped.
4. **Directory Tree** - Organizes all files into a tree, starting with the root.
5. **Hard Link** - An entry in the file system tree.  Takes two arguments (old path name and new) and creates another way to refer to that same file.
6. **Symbolic (soft) Link** - Different type of link that allows links to files in other disk partitions than the one the original file is in.

File System Implementation: Chapter 40

1. **vsfs (Very Simple File System)** A simplified version of UNIX and utilizes basic on-disk structures, access methods, and multiple file system.
2. **Access Methods** The methods which allow for calls to be made. They include actions such as open(), read(), and write().
3. **Metadeta** Types of data about data. Mainly consists of data about data blocks, file size, owner and access rights, etc.
4. **Inode** A series of nodes arranged in an array and indexed into when the user is accessing a specific inode.
5. **Indirect Pointer** A type of pointer that points to other pointers which direct the program to a specific memory address or another pointer.
6. **Fixed-Size Cache** A small amount of fast memory inside of a processor to improve the speed of which computational tasks are completed.

Network File Systems: Chapter 49

1. **Stateless Protocol** Simplistic crash recovery process where the server restarts and works as it did previously.
2. **Recovery Protocol** A specific protocol where there's enough memory available to tell the server what it needs to know.
3. **Mount Protocol** The first process through which the clients and servers connect together.
4. **Virtual File System (VFS)** Allows for the use of multiple file systems to be utilized for a given operating system.
5. **Write Buffering** The delayed sending of the clients data to the server. The submitted data to the network is first held locally in the client's cache.

Data Integrity and Protection: Chapter 45

1. **Fail-Stop** An early feature of RAID systems where either the disk is working or not at all.
2. **Silent Faults** When the storage drive disk doesn't give any appearance of a problem when the data returned is corrupted.
3. **Misdirected Write** When data is written correctly to the disk storage but in the wrong memory address.
4. **Cyclic Redundancy Check (CRC)** Remainder of binary division between a large binary number (D) and an agreed value of (k)
5. **Lost Write** The device doesn't inform the upper layer that a write finished but the new changes never persisted into the next state, thus exposing the past state before the write.

Distributed Systems: Chapter 48

1. **Checksums** Method to detect memory corruption quickly.
2. **End-to-end argument** Method through which packet loss, aka data loss, is avoided.
3. **UDP/IP** Common networking stack that involves the use of sockets to communicate with an endpoint, and send datagrams which are short messages.
4. **Distributed Shared Memory (DSM)** Allows for multiple computers on the network to share large virtual address space, akin to how processors have multiple cores which allow for the use of threading.
5. **Remote Procedure Call (RPC)** Simple and easy way to execute code on a remote machine.

Intro Security: Chapter 53

1. **Trusted Platform Module (TPM)** Authenticated to users that they were starting up the operating system and version they had intended to do so.
2. **Access Control Mechanisms** The process through which an operating system determines if the user has the proper authorization to perform the requested action. 
3. **Non-Repudiation** The authentication of prior actions in the operating system that cannot be forged.
4. **Security Policies** A list of rules and specifications for ensuring security in an operating system environment.

## Learning Opportunities

Interested in learning more about any of the topics on this schedule? If you
are, then make sure to connect with members of the [OS Sketch
community](/operating-systems/learning-community) for more learning
opportunities. Remember, this course emphasizes building mastery of the course's
[learning objectives](../learning-objectives) through the process of "learning
by doing" As such, you can best understand the content on this schedule by
completing all of the projects on this site!

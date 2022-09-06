---
hide:
  - navigation
tags:
  - Logistics
  - Resources
  - Planning
---

<!-- TODO: Review the content in the OSTEP book and identify key chapters and topics -->
<!-- to cover during a single academic semester, which each module lasting one week. -->

<!-- TODO: Instead of using the word "understand" when you are writing a learning -->
<!-- objective, write the objective so that there is an action that will -->
<!-- unambiguously demonstrate that a learner has achieved the objective. -->

<!-- TODO: Make sure that all of the learning objectives are both clear and -->
<!-- measurable. You should write a draft of the learning objective and then as -->
<!-- another member of your team and/or the instructor to review it to ensure its -->
<!-- correctness. Remember that all learners will be bound by these objectives! -->

<!-- References: -->
<!-- https://rtalbert.org/steps-toward-excellence-the-power-of-learning-objectives/ -->
<!-- https://rtalbert.org/how-to-write-learning-objectives/ -->

# Learning Objectives

## Virtualization

  - Given the opportunity to describe the processes of the OS virtualizing resources and doing it efficiently.
  - Identify the main physical parts that make up the PC for the OS to run.
  - To have some idea of what an OS actually does.


### Processes
  - Being able to define what a process is.
  - Know what a process API is.
  - Being able to trace process state in both CPU and I/O.
### Direct Execution

- Given a Limited Direct Execution, a student should be able to trace the steps of the execution.
- When provided with a system call, a student should be able to measure its estimated cost.
- A student should be able to trace the steps of Context Switch code.
- Given context switch code, a student should be able to measure its cost using the lmbench tool.

### CPU Scheduling

Stride scheduling is made without using randomization in mind, why do people use stride scheduling? And why is it so straightforward? 

  - A person reading chapter 9 must know the importance of stride scheduling and master the concept of fairness metric.
  - Having the ability to define the main differences between lottery scheduling, stride scheduling, and the Completely Fair Scheduling of Linux.

  - Have the ability to recognize the real scheduler vs. the fake. 
  - Being able to define one clear issue if you use a scheduler.

### Memory Management

  - Have the basic ability to locate and mix memory issues.
  - Define reasons on memory mangement issues.
  - Begin to know the importance of memory in OS.

### Segmentation

  - Justify the decision on why hardware uses segment registers during translation.
  - Compare and contrast fined-grained and coarse-grained segmentation with addresses.
  - Given the idea of segmentation, explain how solving problems help us build more effective virtualization of memory.

### Paging

  - To be able to describe how to avoid the problems of segmentation by virtualizing memory with pages.
  - Given the idea that OS usually keeps a per-process data structure; page table, describe the major role of the page table.
  - To be able to identify the main purpose of using pages and how you take advantage by using it. 


### Swapping

  - Explain how swap space works for the OS to move pages back and forth.
  - Be able to describe the page fault work and why hardware does not handle page faults as the OS does. 
  - Having the ability to explain how replacements occur and how high watermark and low watermark have a big impact on this.


## Concurrency

### Threads

- A student should be able to articulate the value and purpose of threads
- A student should be able to write and execute the code necessary to create threads.
- Additionally, a student should be able to pass arguments to threads.
- Given a situation in which threads access shared data, a student should be able to address the issue through building support for synchronized primitives to support atomicity.
- A student should be able to build mechanisms to support the sleeping and waking interaction between processes.

### Locks
 
 - Demostrate the ability to create and maintain a lock.
 - Demostrate a key understanding of locks and different techniques required to make a lock.
 - Explain what compare-and-swap is and compare-and-exchange is.
### Semaphores

  - Explain what a semaphore is and why it is important to an OS. 
  - Define the different types of semaphores.
  - Shows proficiency in using semaphores. 

## Persistence

A person learning about operating systems needs to be able to know the parts of a computer that get preserved after shutdown
and know how to handle failures in the operating system.

### Input/Output Devices

  - Depending on the operating system, decide whether to lower CPU overhead with interrupts
  - Depending on the operating system, decide whether to lower PIO overhead with Direct Memory Allocation
  - Design both methods of device communication, those being I/O instructions and memory-mapped I/O

### Files and Dictionaries

  - Make the correct system calls when trying to create, rename, remove, write to, read from, or get the metadata from a file.
  - Make the correct system calls when trying to create, read, or remove directories.

### File System Implementation

  - Create an appropriate design of the overall on-disk organization of data in a Very Simple File System.
  - Given an inode number, calculate the location of that inode in the disk.
  - Depending on the files being dealt with, decide whether to use direct pointers, indirect pointers, or extents.

### Data Integrity and Protection

  - Given a certain disk failure, identify the failure mode.
  - Be able to handle the latent sector error failure mode.
  - Be able to handle the data corruption failure mode.
  - Given a data corruption failure mode and a data integrity budget, choose the best checksum function.

## Security
  In order to create and maintain a high quality software, you must have the ability to secure it. From this point onwards, you will learn techniques that can help you with your future projects.
### Authentication

  Authentication is one of the most important topics covered in chapter 54. To display proficiency in this chapter, the reader must be able to tell the difference between authentication and authorization. 
  - Correctly identify the difference between agent, principal, credential, and object in OS.
  - Correctly identify the 3 main ways to authenticate users. 
  - correctly identify the 3 main ways to authenticate users. 
  - Explain the importance of hashes, cryptographic hashes, and what does it prevent.
  - Demonstrate the ability to authentication by what you know
  - Demonstrate the ability to authentication by what you have 
  - Demonstrate the ability to authentication by what you are

### Access Control

  - Have the ability to figure out if a request fits within your security policy, if it does, operate, if not, do not operate. 
  - Explain the difference between authorization and authentication. 
  - Have the ability to explain the difference between capability-based systems and access control list systems. (ch 55, pg4)

## Cryptography

  - Correctly explain the meaning of cryptography. (ch 56, pg 1) 
  - Explain what a cipher and a key is. 
  - Explain the meaning behind “The cryptography's benefit relies entirely on the secrecy of the key.”
  - Differentiate between private and public keys in cryptography.

### Distributed System Security 

  - Explain the importance of distributed systems to modern computing. 
  - Explain the reason behind using symmetric cryptography to transport data.
  - Define other authentication approaches.

## Advanced Programming

A person who is learning the fundamentals of operating systems should
demonstrate mastery of the following programming skills in all of the necessary
programming languages:

### Programming

- Write short programs up to five hundred lines that have the following
  characteristics for the chosen programming language:
    - Has function and variable names that adhere to an industry-standard coding
      style for the chosen programming language.
    - All program components have descriptive comments that adhere to an
      industry-standard coding style.
    - Features a source code format that adheres to an industry-standard coding
      style for the chosen language.
    - Passes an automated test suite, written with an industry-standard
      framework for the chosen language, showing that it correctly implements
      the specification for the function or component.
    - Performs the specified operation in an efficient fashion, as determined
      through experiments that evaluate the components's performance in minutes,
      seconds, or milliseconds.
    - Features functions that correctly use the basic building blocks of the
      chosen programming language in a way that passes the function's test
      suite, works efficiently, and conveys the function's intended purpose.
    - Correctly performs file and console input and output, ensuring that all
      input and output is displayed and stored correctly, is not corrupted, and
      is processed efficiently.
    - Correctly simulates aspects of an operating system (e.g., process
      scheduling) through the use of a program.

### Programming Tools

- Use a Docker and/or operating system-based programming environment that
  supports a recent version of the C, Go, and Python programming languages to
  complete these tasks while implementing a program of up to five hundred lines
  of code:
    - Install, upgrade, and use a recent version of the
      [Python](https://www.python.org/) programming language environment to
      create, run, and debug a Python program with a terminal window, a text
      editor, and the [Poetry](https://python-poetry.org/) package manager.
    - Install, upgrade, and use a recent version of the
      [C](https://gcc.gnu.org/) programming language toolchain to create, run,
      test, and debug a C program through a terminal window and/or a text
      editor.
    - Install, upgrade, and use a recent version of the [Go](https://go.dev/)
      programming language environment to create, run, test, debug, and format a
      Go program through a terminal window and/or a text editor.
    - Leveraging plugins for workflow enhancement, use a text editor like [VS
      Code](https://code.visualstudio.com/) to implement, test, debug, document,
      and manage the source code of a program in the C, Go, or Python
      programming languages.

## Version Control

- Use the [GitHub](https://github.com/) platform and the
  [Git](https://git-scm.com/) version control system in the following fashion:
    - Using SSH keys, clone a GitHub repository without error using either a
      command in a terminal window or an extension for Git integration in a text
      editor like VS Code.
    - Write short and descriptive commit messages that use the [Conventional
      Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard explain
      the specific way in which a commit changes the source code and
      documentation in the GitHub repository.
    - Navigate reports produced by [GitHub
      Actions](https://github.com/features/actions) so as to determine which
      aspects of a GitHub repository do and do not adhere to a project's
      specification, iteratively fixing broken components until the project
      works.
    - In either a team-based on individual context, use the [GitHub Flow
      model](https://guides.github.com/introduction/flow/) to implement specific
      features in a branch of a GitHub repository and then merge that branch to
      the main one only after all the checks run by GitHub Actions pass as
      required and code reviews confirm the code's correctness. When modifying
      the source code of the OS-Sketch web site, use a preview build created by
      [Netlify](https://www.netlify.com/) to survey the site's content and
      layout.
    - Create and discuss programming and technical writing issues with the
      [GitHub Issue
      Tracker](https://github.com/OS-Sketch/www.os-sketch.com/issues) and the
      [GitHub Discussion
      Forum](https://github.com/OS-Sketch/www.os-sketch.com/discussions),
      furnishing descriptive titles and problem descriptions that adhere to
      industry best practices and project templates.
    - Submit completed projects that pass all of the automated
      instructor-provided and industry-standard checks, as evidenced through the
      report of a passing build run in [GitHub
      Actions](https://github.com/features/actions).

## Effective Learning

A person learning about operating systems will demonstrate mastery of the
following technology-mediated learning skills:

- Follow a systematic process when using resources to implement C, Go, and
  Python programs:
    - After detecting an error in a program through the use of either automated
      or manual debugging, develop a satisfactory understanding of the problem's
      likely root cause and then search sites like [Stack
      Overflow](https://stackoverflow.com/) for potential solutions.
    - After evaluating suggested solutions to a programming problem that
      originate from sites like [Stack Overflow](https://stackoverflow.com/),
      develop a way to fix an error in a program, try that approach, and then
      incrementally improve it.
    - Independently develop solutions to programming problems even if the
      specifical technical challenge that you face was not previously covered in
      a course session or as part of your prior review of technical content.

- Use [Discord](https://discord.com/) to effectively communicate about
  technology in the following fashion:
    - In the correct public channel, post a question that includes source code
      segments, screenshots, and a description of the steps taken in an attempt
      to document and then ultimately solve a problem.
    - Answer questions that were posted in a public channel, responding with
      source code segments, screenshots, and links to external references,
      pointing the person who asked the question in the right direction without
      solving the problem for them and limiting their opportunity to learn more
      about the topic in question.
    - By sharing the acquired knowledge or skill, how you can be contacted, and
      how you can help, offer to help others who may need to learn technical
      knowledge and skills in the field of operating systems that a learner has
      already mastered.

## Improving Objectives

As [Robert Talbert](https://rtalbert.org/) explains, a learning objective is
**clear** when it is "clear from the students' perspective" and **measurable**
when there is "some way to know whether the objective has been met" or "how far
away the learner is from meeting it".[^1] Do you see a way in which we can
improve the learning objectives for the OS-Sketch site? If you do, then please
participate in the [OS Sketch community](../learning-community/) by sharing your
ideas for improving them!

[^1]: See [Robert Talbert](https://rtalbert.org/)'s article entitled [How to
Write Learning
Objectives](https://rtalbert.org/how-to-write-learning-objectives/) for more
details about how to design learning objectives for an academic course. From
your perspective what does it mean to write learning objectives that are both
clear and measurable for an advanced course on the topic of operating systems?

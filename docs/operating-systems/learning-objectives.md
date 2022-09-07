---
hide:
  - navigation
tags:
  - Logistics
  - Resources
  - Planning
---

<!-- Review the content in the OSTEP book and identify key chapters and topics -->
<!-- to cover during a single academic semester, which each module lasting one week. -->

<!-- Instead of using the word "understand" when you are writing a learning -->
<!-- objective, write the objective so that there is an action that will -->
<!-- unambiguously demonstrate that a learner has achieved the objective. -->

<!-- Make sure that all of the learning objectives are both clear and -->
<!-- measurable. You should write a draft of the learning objective and then as -->
<!-- another member of your team and/or the instructor to review it to ensure its -->
<!-- correctness. Remember that all learners will be bound by these objectives! -->

<!-- References: -->
<!-- https://rtalbert.org/steps-toward-excellence-the-power-of-learning-objectives/ -->
<!-- https://rtalbert.org/how-to-write-learning-objectives/ -->

# Learning Objectives

## Virtualization

A person learning about operating systems needs to be able to know that *virtualization* allows a single physical CPU to simulate the functionality of multiple virtual CPUs, which maximizes a machine's capacity in handling applications.

### Introduction

- Map out the processes of the OS virtualizing resources and doing it efficiently
- Make a hardware design of the operating system

### Processes

- Design the lifecycle of a process
- Choose what process would run first based on a scheduling policy and a list of processes
- Trace multiple processes going through states

### Direct Execution

- Trace the steps of a Limited Direct Execution
- Measure the estimated cost of a given system call
- Trace the steps of Context Switch code
- Measure the cost of context switch code using the `lmbench` tool

### CPU Scheduling

- Describe the importance of stride scheduling and master the concept of fairness metric
- Having the ability to define the main differences between lottery scheduling, stride scheduling, and the Completely Fair Scheduling of Linux
- Have the ability to recognize the real scheduler vs. the fake
- Being able to define one clear issue if you use a scheduler

### Memory Management

- Have the basic ability to locate and mix memory issues
- Define reasons on memory management issues
- Begin to know the importance of memory in OS

### Segmentation

- Justify the decision on why hardware uses segment registers during translation
- Compare and contrast fined-grained and coarse-grained segmentation with addresses
- Solve problems using segmentation, to build a more effective virtualization memory

### Paging

- Avoid the problems of segmentation by virtualizing memory with pages
- Describe the major role of the page table having in mind the idea that OS keeps a per-process data structure
- Identify the main purpose of using pages and how you take advantage by using it

### Swapping

- Swap space for the OS to move pages back and forth
- Describe the page fault work and why hardware does not handle page faults as the OS does
- Perform replacements and using high watermark and low watermark

## Concurrency

A person learning about operating systems needs to be able to add features to an operating system so that
multiple processes can be run at the same time

### Threads

- Articulate the value and purpose of threads
- Write and execute the code necessary to create threads
- Pass arguments to threads
- Address the issue of shared data through building support for synchronized primitives to support atomicity
- Build mechanisms to support the sleeping and waking interaction between processes

### Locks

- Create and maintain a lock
- Articulate the purpose of locks and different techniques required to make a lock
- Implement a compare-and-swap and compare-and-exchange in a OS

### Semaphores

- Define what a semaphore is and why it is important to an OS
- Define the different types of semaphores
- Show proficiency in using semaphores

## Persistence

A person learning about operating systems needs to be able to know the parts of a computer that persists after shutdown and know how to handle failures in the operating system.

### Input/Output Devices

- Decide whether to lower CPU overhead with interrupts depending on the operating system
- Decide whether to lower PIO overhead with Direct Memory Allocation depending on the operating system
- Design both methods of device communication, those being I/O instructions and memory-mapped I/O

### Files and Dictionaries

- Make the correct system calls when trying to create, rename, remove, write to, read from, or get the metadata from a file
- Make the correct system calls when trying to create, read, or remove directories

### File System Implementation

- Create an appropriate design of the overall on-disk organization of data in a Very Simple File System
- Calculate the location of that inode in the disk given an inode number
- Depending on the files being dealt with, decide whether to use direct pointers, indirect pointers, or extents

### Data Integrity and Protection

- Identify the failure mode given a certain disk failure
- Handle the latent sector error failure mode
- Handle the data corruption failure mode
- Choose the best checksum function given a data corruption failure mode and a data integrity budget

## Security

A person learning security must be able to implement an basic security system that can prevent attacks from getting information on your consumers. Within the security section, users are able to learn key concepts and techniques required to model an top of the line security system for an OS.

### Authentication

- Implement basic knowledge of agent, principal, credential, and object into an OS
- Implement and working authentication by using sensitivity and hashes as a basic concept
- Be able to label weakness of each hashes method within an OS

### Access Control

- Summarize the two most important step within access control
- Differentiate between authorization and authentication within access control
- Given a list of scenario, be able to distinguish if they are discretionary or mandatory access control

## Cryptography

- Implement a basic cypher within your OS
- User need to memorize this statement “The cryptography's benefit relies entirely on the secrecy of the key.”
- User can implement cryptographic hashes to protect OS from potential attack

### Distributed System Security

- Given a list of websites, be able to tell if they are secure or not
- User are able to create and secure distributed system
- From a list of 5 definitions, being able to pick out authentication approaches within them

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

---
hide:
  - navigation
---

# Learning Objectives

## Virtualization

### Processes

### CPU Scheduling

### Memory Management

### Paging

### Swapping

## Concurrency

### Threads

### Locks

### Semaphores

## Persistence

### Input/Output Devices

### File Systems

## Rigorous Programming

A person who is learning the fundamentals of operating systems should
demonstrate mastery of the following programming skills:

### Python Programming

- Write short Python functions of ten to twenty lines that have the following
  characteristics:
    - Has function and variable names that adhere to an industry-standard coding
      style.
    - Has descriptive comments for module definition and both the function's
      declaration and the function's code that adhere to an industry-standard
      coding style.
    - Features a source code format that adheres to an industry-standard coding
      style.
    - Passes an automated test suite, written with an industry-standard
      framework such as [Pytest](https://docs.pytest.org/), showing that it
      correctly implements the specification for the function.
    - Has an automated test suite, written with an industry-standard framework
      such as [Pytest](https://docs.pytest.org/), that covers at least the 80%
      of the statements and branches in the function.
    - Performs the specified operation in an efficient fashion, as determined
      through experiments that evaluate the function's performance in seconds or
      milliseconds.
    - Correctly uses assignment statements, iteration constructs, conditional
      logic, function invocation, and function recursion in a way that passes
      the function's test suite, works efficiently, and conveys the intended
      function's purpose in a Pythonic fashion.
    - Correctly performs file and console input and output, ensuring that all
      input and output is displayed and stored correctly, is not corrupted, and
      is processed efficiently.
    - Correctly simulate aspects of an operating system through the use of a
      Python program.
- Write correct Python programs consisting of between one and five hundred lines
  of source code that correctly solve problems using data structures like a list
  or dictionary.
- Uses the features of the Python programming language to create classes and
  instances of these classes that solve problems by using object-oriented
  programming.

### Programming Tools

- Use a programming environment that supports a recent version of the C, Go, and
  Python programming languages to complete these tasks while implementing a
  program between one and five hundred lines of code:
    - Install, upgrade, and use [Python](https://www.python.org/) 3.10
      programming environment to create, run, and debug a Python program through
      a terminal window and/or a text editor.
    - Use [Poetry](https://python-poetry.org/) to install a Python program's
      dependencies, create a virtual environment, and run it without error in an
      isolated and self-contained configuration.
    - Use and create a test suite implemented with
      [Pytest](https://docs.pytest.org/) to detect a failure in a Python program
      and then effectively use tools like a text editor and a terminal window to
      find and fix the fault, ultimately confirming that the Python program no
      longer contains the fault and that the fix did not compromise other
      functions in the program.
    - Install, upgrade, and use a recent version of the [C programming language
      toolchain](https://gcc.gnu.org/)
    - Use a text editor like [VS Code](https://code.visualstudio.com/) to
      implement, test, debug, document, and manage the source code of a Python
      program, leveraging plugins for workflow enhancement.

If you are a student at Allegheny College, you must complete your course
projects using a [Department Approved
Laptop](https://www.cs.allegheny.edu/resources/laptops/). This is primarily due
to the fact that your laptop must be approved for running [Docker
Desktop](https://www.docker.com/products/docker-desktop) on MacOS and Windows
and [Docker Engine](https://docs.docker.com/engine/install/ubuntu/) on Linux. If
you are not sure whether or not your computer supports Docker, you can visit the
[Can I Run Docker?](https://www.cs.allegheny.edu/canirundocker/) web site and
the see if Docker will work correctly on it. Of course, if you are not enrolled
at Allegheny College, you also welcome to use Docker to complete and check the
projects on this site! With that said, it is worthwhile to visit the following
web sites and review the requirements for using Docker before you install it.

* [Supported Platforms for Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/#prerequisites)
* [System Requirements for Docker Desktop on MacOS](https://docs.docker.com/desktop/mac/install/#system-requirements)
* [System Requirements for Docker Desktop on Windows](https://docs.docker.com/desktop/windows/install/#system-requirements)

If you don't see your operating system mentioned in the above list, then you
should pick the one that is the closest to what operating system is running on
your computer. For instance, if you run a different type of Linux than Ubuntu,
you should follow, as appropriate, the Ubuntu-based instructions while also
searching for other tutorials that are customized for your specific operating
system. Finally, don't forget that if you use MacOS you need to follow different
instructions depending on whether your computer has an Intel-based or Apple
Silicon-based central processing unit!

## Installing Docker

Docker's web site provides customized instructions for installing Docker! After
carefully reading the steps on the site that mentions your operating system,
take the suggested steps to install and configure Docker on your computer:

* [Install Docker Engine on Linux](https://docs.docker.com/engine/install/)
* [Install Docker Desktop on MacOS](https://docs.docker.com/desktop/mac/install/)
* [Install Docker Desktop on Windows](https://docs.docker.com/desktop/windows/install/)

If your computer runs Windows 10 Home you can only install Docker Desktop if you
have also installed the Windows Subsystem for Linux (WSL) version 2 backend. If
your Windows 10 Home operating system cannot run WSL 2, then you must upgrade
your operating system to either Windows 10 Pro, Windows 10 Enterprise, or
Windows 10 Education. Finally, you should not use Docker Toolbox since it is
deprecated and no longer supported!

### Version Control

--8<-- "includes/objectives/version-control.md"

## Effective Learning

--8<-- "includes/objectives/effective-communication-abstraction.md"

## Improving Objectives

--8<-- "includes/objectives/improving-objectives-abstraction.md"

--8<-- "includes/objectives/learning-objectives-footnote.md"


---
hide:
  - navigation
  - toc
---

![Terminal Window](/img/OS-Diagram.svg#only-light){width="70%"}
![Terminal Window](/img/OS-Diagram-Inverted.svg#only-dark){width="70%"}

# Introduction

An operating system is responsible for managing and protecting the resources of
a computer. The exploration of operating systems centers around topics such as
virtualization, concurrency, persistence, and security. The operating system is
one of the most complex software systems that humans have implemented. Your use
of a computer is normally mediated by some operating systems like Linux. Even
though many software engineers do not need to implement their own operating
system, there are significant benefits to understanding how operating systems
work.

## Hardware Terms

- **Disk:** The disk drive consists of sectors (512 byte blocks), each that can be
read or written. They are numbered from 0 to n-1 which are its address spaces
of the drive. The disk stores the static data and the program code for the
operating system and the disk is used by the RAM in order to load this static
data and the program code into this memory system.

- **CPU:** The CPU or central processing unit, is responsible for processing actions
that the kernel needs to perform in a timely fashion. The process code gets
sent over to the scheduler after the CPU goes through it and makes the changes
accordingly.

- **RAM:** The RAM, or address space, is the computer's memory that is used to store
working data or machine code, this refers to live actions that the computer's
memory needs to recall from the system. The RAM uses segmentation to split the
static data into different sections of the memory.

## Software Terms

- **File System:** The file system is a software system to keep all of your files
easily stored/ sorted and accessible by the operating system.

- **Kernel:** The kernel is the brain of the process that ties together all of the
parts of an operating system. It works on your behalf to do what needs to be
done without you, the user, having to initiate these processes.

- **Scheduler:** The scheduler is responsible for determining the order that the
processes are run through the use of policies. The scheduler (policies) pushes
the newly sorted order of processes from the process list onto the CPU who will
execute these actions.

- **Process:** The process takes in a running program; as well as the state/ status
and the registers/info. The CPU can change the process with the help of the
scheduler. Also the process gets affected by the RAM to allocate memory
depending on the loaded data. After all processes are computed they are sent to
the process list in a neatly organized fashion.

- **Process List:** The process list is a pre-ordered list of processes that have
been sent over from the process block of the OS system. These processes still
need to be sorted and ran through the CPU in order to get specific things done
for the operating system.

- **Process API:** The process API is a part of the software, it is code that calls
on/ manages processes on the file system. With the help of the file system,
processes get identified and sent to the process list.


## Concepts

- **Security:** The security of the OS is the big body guard that can protect the
different components of the OS from unauthorized access. The security can
examine and or alter any process memory. Also the OS gets read, written,
deleted or corrupt any type of file on any writeable persistent storage medium,
including any internal or external drives. Another important part of the
security process is that it can change the scheduling or even halt the
execution of any process. There are also more actions for the security process
that will be covered this semester.

-**Policies:** Policies are ways to choose which activities to perform. They are algorithms for making scheduling decisions, and refers to what needs to be done (i.e. activities to perform).

- **Mechanisms:** Mechanisms are a very important process tool, they are used to send
processes to and from the scheduler and the CPU. In relation to mechanisms, it is also the technique for enacting policy decisions, and refers to how to do it (i.e. implementation to enforce policy).

- **Segmentation:** Segmentation is a process splitting up the static data into different
sections in the memory. There are types of segmentation: Virtual memory segmentation, which each process is divided into a number of segments where not all of which are resident at one point in time, and simple segmentation, where each process is divided into a number of segments where all of which are loaded into memory at run time, though not necessarily contiguously. The RAM uses segmentation the most.


- **Concurrency:** This takes processes from the process before it can hit the
process list, These processes get split into multiple smaller processes and
then fed to the process list.

???+ note

    This course currently uses the free, online, open-access textbook [Operating
    Systems: Three Easy Pieces](https://pages.cs.wisc.edu/~remzi/OSTEP/) by
    [Remzi H. Arpaci-Dusseau](https://pages.cs.wisc.edu/~remzi/) and [Andrea C.
    Arpaci-Dusseau](https://pages.cs.wisc.edu/~dusseau/). This means that you
    can download PDFs of each chapter complete projects on this site!

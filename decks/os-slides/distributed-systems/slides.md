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

## Distributed Systems

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

> How can we apply the **principles** of operating systems to the **design** and
> **implementation** of a distributed system that involves clients and servers not
> located on the same network? In particular, how can we build systems that
> operate **reliably** even when their components are **prone to failure**?

</div>

<br>

<div v-click>

## Learning Objectives

> To **remember** and **understand** some of the foundations of network file
> systems, grasping the abstractions and implementation strategies that enable
> programs to run efficiently and effectively **across a network**.

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
What is the definition of a distributed system?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Files and directories stored on a centralized server
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Each remote client mounts the network file system
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Files and directories are transferred across network
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Trade-offs with network file systems?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-rocket class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Aids sharing of files and directories across clients
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-rocket class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Centralization helps administration and security
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-rocket class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Failure modes for performance and correctness
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Basic Network File System

<v-clicks>

- Components of a network file system (NFS):

  - **File Server**: remote server that contains a disk array
  - **NFS Server**: networking layer that manages requests for files and directories
  - **Client-Side File System**: interacts through the network with the remote
    file server

- What are the **benefits** and **drawbacks** of using a network file system?

  - Provides **transparent** access to files on a remote server
  - Uses the **same** system calls for access to remote and local files
  - However, the **may** semantics of remote and local access may differ
  - Ultimately, transparency is a **double-edged sword** for an operating system!

- **Design Goal**: given the unreliability of networks and
  computers, a protocol and implementation that supports simple and fast server
  crash recovery

- The key to fast recovery from crashes is to maintain little, if any, state!

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
State management in the face of crashes?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Backup state and attempt to recover it quickly
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Attempt to regenerate the state through replay
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Drop the lost state and report failure to recover
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# NFS Protocols and Implementations

<v-clicks>

- Strategies for tracking and manage state in a network file system:

  - Client **tracks** all relevant state for file and directory accesses
  - Client **fully qualifies** all requests to minimize storage on the server
  - Server **should never** need to **consult state** to respond to a request

- How does **idempotency** help to handle server failure?

  - Sometimes a client may not receive a response from the server
  - If no response emerges the client may want to call a function again
  - But, how can the client know if it is acceptable to repeatedly call the function?
  - Repeated calls to an idempotent operation are the same as if the client
    called the operation a single time, giving confidence to the file system
    client

- **Design Goal**: given the unreliability of networks and
  computers, most functions provided by the server should be idempotent

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Message loss between client and server?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-exclamation-octagon class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Client request is lost before arriving at the server
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-exclamation-octagon class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Client sends request and the server is down
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-exclamation-octagon class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Response from server not delivered to the client
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Benefits and Drawbacks of Caching

<v-clicks>

- One major concern is that **network communication may not be fast**!

- How do we solve performance problems? Of course, we **add a cache**!

- NFS client can cache file **data** and **meta-data** and avoid the network

- NFS client can also perform **write buffering** to further improve performance

- Challenges associated with cache consistency on clients and the server:

  - Cache inconsistency may emerge on the side of clients or the server
  - One client may have buffered the updated version of a file
  - Another client may read an out-of-date file version from the server
  - By the time the first client writes is updates they may be out of date!

- **Design Goal**: make sure that the caching protocol is clearly documented and
  the client software transparently makes good decisions with diagnostics

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# ✨ Sketching the Key Ideas

<img src="/os-sketch-distributed-systems.svg" class="ml-20 mt-6 h-105" />

[//]: # "Slide End }}}"

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
Client-server system with remote communication
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Peer-to-peer system where all nodes are equal
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
" ... a computer you have never heard of crashes ... "
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
Trade-offs with distributed systems?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-rocket class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Supports balancing of compute and memory load
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-rocket class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
May improve throughput and response time
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-rocket class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Design and implementation is very challenging!
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Distributed System Communication

<v-clicks>

- Communication between the **client** and the **server** in a distributed system:

  - Both the client and the server have network stubs for communication
  - Network stubs marshall and unmarshall parameters and return values
  - High-level communication uses of a serialization primitive
  - Programming languages offer remote procedure calls (RPCs)
  - Low-level communication uses networking protocols to send packets

- Trade-offs in **reliable** and **unreliable** communication primitives:

  - TCP/IP is a reliable communication primitive that has overheads
  - UDP is a less reliable communication primitive without checks
  - Communication may be point-to-point or a network broadcast
  - More reliable communicate primitives tend to have worse performance

- **Checksums** calculation in network stubs can support **reliable** communication!

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

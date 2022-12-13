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

## Security Introduction

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

> How can we apply the principles of **computer security** to ensure that large
> and complex operating systems permit resource sharing without allowing not
> permitted resources accesses or actions to take place?

</div>

<br>

<div v-click>

## Learning Objectives

> To **remember** and **understand** some of the foundations of computer
> security systems, grasping the challenges and the implementation strategies
> that enable programs to concurrently run in a secure and safe fashion.

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
What operations can the system perform?
</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Examine or alter the memory of any process
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Schedule the execution of any process
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<mdi-tooltip-check class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Well, perform almost any operating, right?
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
What are the goals of a security policy?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Confidentiality: keep information protected
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Integrity: information is correct and authentic
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Availability: guarantee information is usable
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Key Principles of Security

<v-clicks>

- Key principles of security a policy should ensure:

    - **Economy of Mechanism**: keep the security enforcement simple
    - **Fail-safe Defaults**: pick system defaults that are secure
    - **Complete Mediation**: always confirm that an operation adheres to the policy
    - **Open Design**: assume that an adversary always has access to the design
    - **Privilede Separation**: require separate parties or credentials for operations
    - **Least Privilege**: offer the minimum privileges needed to complete task
    - **Least Common Mechanism**: use different mechanisms to enforce policies
    - **Acceptability**: build secure systems that people will use

- Design simple systems that are easy to audit and understand

- A system is only secure if people will use the security mechanisms

- A focus on system correctness normally improves system security

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

<img src="/os-sketch-nfs-introduction.svg" class="ml-1 mt-8 h-100" />

[//]: # "Slide End }}}"

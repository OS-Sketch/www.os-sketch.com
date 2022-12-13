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
Where to insert security mechanisms?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Memory management ensures process isolation
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Systems calls move from user to kernel space
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-cube class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Process scheduling ensures no system take-overs
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Strategies for Secure Systems

<v-clicks>

- **Authentication** attaches an identity to a process or a person:

  - **What do you know?**: use passwords or other codes to determine identity
  - **What do you have?**: use physical keys or mobile devices to determine identity
  - **What are you?**: use physical characteristics of a person like fingerprints

- Use **cross-over error rate** that balances false positives and false
  negatives

- Adopt **multiple-factor authentication** to ensure defense in depth

- **Authorization** determines whether a process or person can take an action:

  - Use access control lists for files and directories
  - Restrict system calls to specific processes or users
  - Limit access to network resources according to identity

- **Design Goal**: a security system that is robust without being intrusive

</v-clicks>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

<div class="flex row">

<div class="text-7xl text-red-600 font-bold mt-5 ml-4 mb-4">
How an cryptography aid computer security?
</div>

</div>

<div v-click>

<div class="flex row">

<uim-rocket class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Supporting the sending of secret messages
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-rocket class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Enable secure storage of files and passwords
</div>

</div>

</div>

<div v-click>

<div class="flex row">

<uim-rocket class="text-6xl ml-8 mt-6 text-blue-600" />

<div class="text-3xl font-bold mt-10 ml-4">
Confirm the validity of various file types
</div>

</div>

</div>

[//]: # "Slide End }}}"

---

[//]: # "Slide Start {{{"

# Understanding Cryptography Basics

<v-clicks>

- Understand some of the key terms in cryptography for encryption:

    - **Encryption**: the process of encoding a plaintext message
    - **Decryption**: the process of decoding a ciphertext message
    - **Plaintext**: the content that is input to encryption algorithm
    - **Ciphertext**: the content that is output of encryption algorithm

- Encryption algorithms should be efficient and difficult to break

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

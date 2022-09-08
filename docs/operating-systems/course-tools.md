---
hide:
  - navigation
tags:
  - Resources
---

# Course Tools

## Introducing `dockasketch`

The OS Sketch community offers a docker container that can be utilized 
for course projects and laboratory assignments. The
`dockasketch` container currently comes equipped with the following capabilities:

- A full shell environment with all Linux commands
- Python 3.8.10
- `poetry`
- A complete `gcc` toolchain

`dockasketch` in its current state has plenty of room for improvement.
These are the additional capabilities that learners engaging with
operating systems would benefit from:

- Updated Python (at least 3.10)
- `pipx`
- Golang 1.19

As it currently stands, `dockasketch` is a suitable container
for *some* of the content that will be encountered while learning
about operating systems. Once the Dockerfile that supports
it is outfitted with the aforementioned additional capabilities,
it will be a suitable container for *all* of the content
encountered within OS-Sketch.

### Pulling `dockasketch` to your Local

`dockasketch` currently inhabits its own page within
DockerHub, and can be found
[here](https://hub.docker.com/r/hancea/dockasketch).

Once you've arrived at the `dockasketch` page, you'll 
see a "pull" command on the right-hand side of the page.
Copy that command and run it in a terminal window,
and you'll have successfully pulled the Dockerfile
to your local machine.

### Running a `dockasketch` Container

Once the container has been successfully pulled,
you'll then need to *run* the container to actually
work within the container's workspace.

The command you'll use for this varies depending on
the operating system. The possible commands are as
follows:

**Mac/Ubuntu:**

```
docker run --rm -it -v "$PWD:/root" hancea/dockasketch
```

**Windows:**

The below command must be run in the Command Prompt,
it will not work as expected if using PowerShell.

```
docker run --rm -it -v "%cd%:/root" hancea/dockasketch
```

Within moments you should be in your own instance
(or image) of the `dockasketch` container! Congratulations!
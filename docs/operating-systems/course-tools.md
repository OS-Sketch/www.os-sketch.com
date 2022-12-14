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


## Locally installing the required tools for Mac

### Docker installation process:

[Click the link](https://docs.docker.com/desktop/install/mac-install/) and follow the process 
in order to ensure that the installation works.

### Python installation process:

Go to your terminal and type 

`python ???version`

If the output says `Python 3.10` you are all set.

You should go to [this website](https://www.python.org/downloads/) and download the mac version. 


### Pipx installation process:

Using Homebrew, pipx can be installed with:

`brew install pipx`

The path can be ensured with:

`pipx ensurepath`

Using pip, pipx can be installed with:

`python3 -m pip install --user pipx`

The path can be ensured with:

`python3 -m pipx ensurepath`

The version can be verified with:

`pipx --version`

### Poetry installation process:

In your terminal window type:

`poetry ???version`

If your output looks like 

`poetry (version 1.2.0)`

You are good to go. 

Otherwise, type this command 

`pip install poetry`

Once poetry is installed then retype 

`poetry ???version`

### Gatorgrade installation process:

If you haven???t installed gatorgrade type this command:

`pipx install gatorgrade`


### Go installation process:

If you haven't installed Go: [the instructions](https://go.dev/dl/)

Make sure you click the right chip that your laptop has.

If you choose the right version and it still isn't working, follow these instructions:

Type in the command into your terminal: 
```
nano ~/.zshrc
``` 
Add in the following 2 paths into the file that pops up in your terminal:
```
export PATH=$PATH:/usr/local/go/bin
```

```
export PATH=$PATH:$GOPATH/bin
```
After you save the changes in that file, source the file using the command:
```
. ~/.zshrc
```

Check if Go is now working using the ```go version``` command.

### GCC installation process:

GCC might already be installed on your computer since you have a Mac. To check type:

`gcc -???version`

Your output should specify you have the clang version.

## Locally installing the required tools for Windows

### GCC & `make` command
- Do not install MinGW directly, go to this [website](https://www.msys2.org/) and download MSYS2.
- Search for the MSYS2 MinGW x64 environment and open it.
- Use  `pacman -Syuu` command to update the environment.
- Use  `pacman -S mingw-w64-x86_64-toolchain` command to install the toolchain, which contains GCC and Make command.
- Verify the installation by entering `gcc ???version` inside the terminal. It should return the version of GCC you installed.
- In order to use the GCC toolchain, you have to add to the path environment variable: <MSYS2 location>/mingw64/bin .
- You can also change the name of make from mingw32-make to make so it is easier to execute in the terminal.
- In order to test everything went correctly, create two new files in a directory named hello.c and makefile.
  
     Contents of Hello.c:
      ``` 
      #include <stdio.h>
 
      int main() {
          printf("Hello, world!\n");
          return 0;
      }
      ```
  
    Contents of Makefile:
      ``` 
      all: hello.exe

      hello.exe: hello.o
          gcc -o hello.exe hello.o

      hello.o: hello.c
          gcc -c hello.c
          
      clean:
          rm hello.o hello.exe
      ```
 
Navigate to the directory in your terminal, and run the make command.

### Docker
Navigate to this [website](https://docs.docker.com/desktop/install/windows-install/) to install Docker.

### Python 3.10
Go to the Microsoft Store app to install: 
```
Python 3.10
```


Check version:
```
python --version
``` 
 

### Golang
- Download Go from the official [website](https://go.dev/dl/).
- Follow the installer's instructions.
- Search for ```env``` on your computer and open environment variables.
- Copy the path for Go and paste into your user variable editing window.
- Test Go is installed by typing ```go version``` into your terminal.

### Pipx / Poetry / Gatorgrade

Install pipx: 
  ```
  python3 -m pip install --user pipx
  ``` 
  and then 
  ```
  python3 -m pipx ensurepath
  ```

Install Gatorgrade using pipx:
  ```
  pipx install gatorgrade
  ```

Command to install poetry:
  ```
  curl -sSL https://install.python-poetry.org | python3 -
  ``` 

## Locally installing the required tools for Linux

### Python3.10 or above

[Python 3.10](https://computingforgeeks.com/how-to-install-python-on-ubuntu-linux-system/)  or above is expected. Downlad Python with this command: 

```
sudo apt install python3.10
```

### [Pipx](https://pypa.github.io/pipx/installation/)
  
Install Pipx with commands below:
```
$ python3 -m pip install --user pipx
$ python3 -m pipx ensurepath
```

### Gatorgrade
  
After installing pipx, you are ready to install another tool called [Gatorgrade](https://github.com/GatorEducator/gatorgrade) by using pipx
Install Gatorgrade by:
```
$ pipx install gatorgrade
```

### Poetry
[Poetry](https://python-poetry.org/docs/) can be downloaded by the commands below.  On some systems, python may still refer to Python 2 instead of Python 3. Better python3 binary to avoid ambiguity.
```
curl -sSL https://install.python-poetry.org | python3 -
```
### Docker 
Install [Docker](https://docs.docker.com/engine/install/ubuntu/):
```
$ sudo apt-get update
$ sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```
### C and GCC:
C and GCC should be installed by default in Linux distributors.

### Go
In order to download [Go](https://go.dev/doc/install) on Linux click this [link](https://go.dev/dl/) and click the LINUX button that is underneath the feature downloads header. Once that is downloaded follow the directions that it gives you in order to complete the download.

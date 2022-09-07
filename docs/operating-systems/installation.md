---
hide:
  - navigation
tags:
  - Logistics
  - Resources
  - Planning
---

# Installation

In order to be able to follow along with the course and the required code, you have to make
sure that you have the necessary software on your computer. Below you will follow the
instructions for the type of machine you are using.

## Installing the required tools for Mac

## Installing the required tools for Windows

### gcc & ```make``` command

1. Do not install MinGW directly, go to https://www.msys2.org/ and download MSYS2.
2. Search for the MSYS2 MinGW x64 environment and open it.
3. Write ```pacman -Syuu``` to update the environment.
4. Write ```pacman -S mingw-w64-x86_64-toolchain``` to install the toolchain, which contains gcc and the make command.
5. Verify the installation worked by entering ```gcc —version``` in your terminal. If it is working it should return the version of gcc you installed.
6. In order to use the gcc toolchain, you have to add this to your path environment variable: <MSYS2 location>/mingw64/bin .
7. You can also change the name of make from mingw32-make to make to make it easier to execute in the terminal.
8. In order to test everything went correctly, create two new files in a directory named hello.c and makefile.
    1. Hello.c should contain:
      ``` #include <stdio.h>
 
      int main() {
          printf("Hello, world!\n");
          return 0;
      }```
    2. Makefile should contain:
      ``` all: hello.exe

      hello.exe: hello.o
          gcc -o hello.exe hello.o

      hello.o: hello.c
          gcc -c hello.c
          
      clean:
          rm hello.o hello.exe```
9. Navigate to the directory in your terminal, enter make and see the program run!

### Docker
- Navigate to https://docs.docker.com/desktop/install/windows-install/, get the installer, and follow the instructions.

### Python 3.10
1. Go to the Microsoft Store app, search ```Python 3.10``` and install.
2. Can check this worked by using the ```python --version``` command.

### Golang
1. Download Go from the official website (https://go.dev/dl/).
2. Follow the installer's instructions and wait while it is downloaded onto your laptop.
3. Search for ```env``` on your computer and open environment variables.
4. Copy the path for Go and paste it into your user variable editing window.
5. Test that go is working by typing ```go version``` into your terminal.

### pipx / poetry / gatorgrade

1. install pipx using the command ```python3 -m pip install --user pipx``` and then ```python3 -m pipx ensurepath```.

2. you can then install gatorgrade using pipx using the command ```pipx install gatorgrade```.

3. Use the ```curl -sSL https://install.python-poetry.org | python3 -``` command to install poetry.

## Installing the required tools for Linux

### Python3.10 or above

[Python 3.10](https://computingforgeeks.com/how-to-install-python-on-ubuntu-linux-system/)  or above is expected. Please copy the commands below to download Python 3.10. Feel free to download the newest version if possible

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
### C and gcc:
 
C and gcc should be installed by default in Linux distributors

### Go
In order to download [Go](https://go.dev/doc/install) on Linux click this link https://go.dev/dl/  and click the LINUX button that is underneath the feature downloads header. Once that is downloaded follow the directions that it gives you in order to complete the download
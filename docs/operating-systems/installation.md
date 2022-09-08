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

### Docker installation process:

[Click the link](https://docs.docker.com/desktop/install/mac-install/) and follow the process 
in order to ensure that the installation works.

### Python installation process:

Go to your terminal and type 

`python –version`

If the output says python 3.10 you are all set.

If the output says you have a different version type this command:

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

`poetry –version`

If your output looks like 

`poetry (version 1.2.0)`

You are good to go. 

Otherwise, type this command 

`pip install poetry`

Once poetry is installed then retype 

`poetry –version`

### Gatorade installation process:

If you haven’t installed gatorgrade type this command:

`pipx install gatorgrade`


### Go installation process:

If you haven't installed go click the link and follow [the instructions](https://go.dev/dl/)

Make sure you click the right chip that your laptop has.

If you choose the right version and it still isn't working, follow these instructions:
1. type in the command ```nano ~/.zshrc``` into your terminal
2. add in the following 2 paths into the file that pops up in your terminal:
  - ```export PATH=$PATH:/usr/local/go/bin```
  - ```export PATH=$PATH:$GOPATH/bin```
3. After you save the changes in that file, source the file using the command ```. ~/.zshrc```.
4. Check if go is now working using the ```go version``` command.


### GCC installation process:

GCC might already be installed on your computer since you have a mac. To check type:

`gcc –version`

You want your output to say you have the clang version.




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
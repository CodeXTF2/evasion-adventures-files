# Evasion Adventures
This repo contains the slides and demo files from my "Evasion Adventures" talk on evading EDRs using modern offensive tradecraft.
  
Note: the sleep protection demo used is from https://github.com/mgeeky/ShellcodeFluctuation
  
The repo strucrture is as follows:
- slides.pptx
- /unhooking-demo
    - demo.cpp
    - demo.exe
    - hook.js

Please note that the demos are all compatible with only **Windows**. To apply the hook, you need to have **Frida** installed. You can install frida using ```pip install frida-tools```
  
You can attach the CreateThread hook to a process using the following command:  
```frida {processname.exe} -l .\hook.js```
  
### Usage Instructions
This is the source code of the demo.exe program used to demonstrate the removal of
function hooks during my "Evasion Adventures" talk. 

It is relatively simple to use, the usage steps are as follows
1. Compile this code in Windows using cl.exe. In theory any compiler works, but I used cl.exe.  
Optionally, a precompiled binary is provided, already compiled in the directory, named demo.exe.
2. Execute demo.exe
3. Attach frida to the process with the syntax "frida demo.exe -l .\hook.js" (hook.js is provided in the repo)
4. In the demo.exe window, enter 1 to remove hooks, or just press enter to run without unhooking anything.
5. Regardless of option, calc.exe should be spawned.

Observations

When run without unhooking, Frida prints a message "CreateThread called!"
When run with unhooking, there is no message printed in Frida.

If you want to observe how the hook and unhooking works, you can attach a debugger such as WinDBG or x64dbg to the
demo.exe process before and after attaching Frida to it. View the address of the CreateThread function in the disassembler
(Ctrl + G in x64dbg). You should see the CreateThread function has an added jmp instruction after Frida is attached. That jmp instruction
passes execution to Frida, which causes the message to be printed. After the unhooking is performed, the jmp instruction should
be removed and replaced with the original starting bytes of CreateThread, which should not trigger Frida.
## Enjoy!

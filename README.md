# Evasion Adventures
This repo contains the slides and demo files from my "Evasion Adventures" talk on evading EDRs using modern offensive tradecraft.
  
Note: the sleep protection demo used is from https://github.com/mgeeky/ShellcodeFluctuation
  
The repo strucrture is as follows:
- slides.pptx
- unhooking-demo
    - original
    - unhook
    - hook.js

Please note that the demos are all compatible with only **Windows**. To apply the hook, you need to have **Frida** installed. You can install frida using ```pip install frida-tools```
  
You can attach the CreateThread hook to a process using the following command:
```frida {processname.exe} -l .\hook.js```
  
## Enjoy!

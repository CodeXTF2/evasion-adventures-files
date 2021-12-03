// This code hooks the CreateThread function in kernel32.dll
const f = Module.getExportByName('kernel32.dll','CreateThread');
Interceptor.attach(f,
{
  onEnter(args) {
    console.log('CreateThread Called!\n');
console.log("========[ Parsing arguments]===========");
console.log("Shellcode address: " + args[2]);
  }
});
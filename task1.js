const fs=require('fs')
const path=require('path')
const zlib=require('zlib')

fs.writeFile('C:/node-practise/example.txt', "hello,how are you?", (err) => {
    if (err) {
      throw err;
    }
   console.log('file is created');
});

////
const pathname=path.basename('C:/node-practise/example.txt')
console.log(pathname)

////
fs.readFile('C:/node-practise/example.txt',(err,data)=>{
      console.log(data)
})
 fs.readFile('C:/node-practise/example.txt','utf-8',(err,data)=>{
    console.log(data)
})


/////

fs.readFile('C:/node-practise/example.txt','utf-8',(err,data)=>{
    console.log(data);
    fs.writeFile("copyExample.txt",data,(err)=>{
        if(err){
            throw err;
        }
        console.log("created copyExample and copied content")
    });
});


////
const path1= 'C:/node-practise/example.txt'
const path2= "copyExample.txt"
// fs.copyFile(path1, path2, (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log("copied");
// })
// fs.appendFile("copyExample.txt",data1,(err)=>{
    
//         console.log("content copied successfully")
//         console.log(err)
    
// });

/////
const path3="copyExample.txt.gz"
const input=zlib.createGzip();
const output=zlib.createGunzip();
input.pipe(output)
input.write("hello,how are you?")
input.flush();

output.on('data', (d) => { 
    console.log('content of file has size '
                + d.length + ' bytes'); 
}); 
console.log("Closed!"); 
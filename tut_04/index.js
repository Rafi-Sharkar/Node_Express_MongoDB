const fs = require('fs');

Write____Asynchronous
fs.writeFile('demo1.txt', 'This is sample text', (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("successful")
    }
});

//  Append____Asynchronous
// fs.appendFile('demo1.txt', 'I am 24 years old.', (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("successful")
//     }
// });

// Read____Asynchronous
// fs.readFile('demo1.txt', 'utf-8', (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// });

// Rename____Asynchronous
// fs.rename('demo1.txt', 'demo2.txt', (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Successful")
//     }
// });

// Delete____Asynchronous
// fs.unlink('demo2.txt', (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Successful")
//     }
// });

// Existe____Asynchronous
fs.exists('demo2.txt', (result)=>{
        if(result){
            console.log("found")
        }else{
            console.log("not found")
        }
    });
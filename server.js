 const http = require("http");
 const modules = require('./modules');
 const server = http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type": "text/plain"});
    // res.write(`Addition : ${modules.add(20,30)}\n`);
    // res.write(`Subtraction : ${modules.subtract(30,20)}\n`);
    // res.write(`Multiplication : ${modules.multiply(20,30)}\n`);
    // res.write(`Division : ${modules.divide(20,30)}\n`);
    // res.end();
 });
server.listen(3000,()=>{
    console.log("server is running on http://localhost:3000")
 })


 
// console.log(modules.add(20, 30));
// console.log(modules.subtract(30, 20));
// console.log(modules.multiply(5, 2));
// console.log(modules.divide(10, 2));
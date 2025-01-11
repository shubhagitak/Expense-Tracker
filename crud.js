const fs = require("fs")
const create = (student) => {
    let students = []
    fs.readFile('./student.json', 'utf8',(error,data)=>{
        let ac = data ? JSON.parse(student):[]
    })
}
     

    
     
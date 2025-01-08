 const fs = require('fs')
 const path = require('path')

 //יוצר תקובץ ה11

let str = ''

 for (let i = 1; i<11; i++){

   const content = fs.readFileSync(path.join(__dirname, `file_${i}`), "utf-8");

   const lines = content.split('\r\n')  

   const needed = lines.splice(0,i) 

   str += needed.join('\r\n') + '\n'

 }


 fs.writeFileSync('file_11',str)

 //זה יוצר עשרה קבצים

 for (let i =1; i<11; i++){
  let str = ''

  for (let j=0;j<i; j++){
str += j + '\r\n'
}


  fs.writeFileSync(`file_${i}`,str)


 
 }

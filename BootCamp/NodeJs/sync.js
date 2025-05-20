const fs = require('fs');

const data = 'write synchronously'

try{
fs.writeFileSync('sync.txt',data)
    console.log("This is synchronous")
}catch(err){
    console.error(err);
}
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value,index)
     { 
         txt =txt+ value + "<br>";
    } 
console.log(txt)
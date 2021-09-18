/*Remove multiple occurances of elements from array*/ 

//array consisting of duplicate elements
const arr=[1,2,2,3,4]

/*apply filter to check if element is repeated 
if indexOf(curr_value) i.e. first occurance of value is not equal to current index,it is repeated
DO not add this value to new Array
*/
const arrNew = arr.filter((value,index) => {
  return arr.indexOf(value)===index;
});

console.log(arrNew);

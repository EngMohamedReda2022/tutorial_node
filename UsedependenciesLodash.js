
//flattenDeep
//return one lelvel from  array 


const lo=require("lodash")
const arr=[1,[2,[3,4,[5]]]]
const flat=lo.flattenDeep(arr)
console.log(flat)
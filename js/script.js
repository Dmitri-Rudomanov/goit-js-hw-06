a1 =[121, 144, 19, 161, 19, 144, 19, 11] ;
a2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
function comp(array1, array2) {
  console.log(array2.sort().toString())
  //your code here

  return array1.map(x => x * x).sort().toString() === array2.sort().toString()
}
console.log(comp(a1,a2))


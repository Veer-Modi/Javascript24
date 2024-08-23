
const fruits=["banana","pineapple","apple","mango","orange"]
const vegetable=["potato","onion","tomato"]
const comname=["veer","garvit","shubham","vedant"]

// // Array Length.
// console.log(fruits.length)
// output:"5"

// // Array toString(). 
// console.log(fruits.toString())
// output:"banana,pineapple,apple,mango,orange"

// // Array at().
// console.log(fruits.at(3))
// output:"mango"

// // Array join().
// console.log(fruits.join(" * "))
// output:"banana * pineapple * apple * mango * orange"

// // Array Pop().
// console.log(fruits.pop())
// output:"orange"

// // Array push().
// console.log(fruits.push("lemon"))
// output:"6"
// console.log(fruits)
// output: "[ 'banana', 'pineapple', 'apple', 'mango', 'orange', 'lemon' ]"

// // Array shift().
// console.log(fruits.shift())
// output:"banana"

// // Array unshift().
// console.log(fruits.unshift("banana"))
// output:"6"

// // Array Change.
// console.log(fruits[0] = "Kiwi")
// output:"Kiwi"

// // Array length.
// console.log(fruits[fruits.length] = "Kiwi",fruits)
// output:" [ 'banana', 'pineapple', 'apple', 'mango', 'orange', 'Kiwi' ]"

// // Array delete.
// delete fruits[0];
// console.log(fruits)
// output:"[ <1 empty item>, 'pineapple', 'apple', 'mango', 'orange' ]"

// // Array Concat().
// console.log(fruits.concat(vegetable))
// output:"['banana','pineapple','apple','mango','orange','potato','onion','tomato']"

// // Array three Concat().
// const arr=fruits.concat(vegetable,comname)
// console.log(arr)
// output:"['banana','pineapple','apple','mango','orange','potato','onion','tomato','veer','garvit','shubham','vedant']"

// // Array nameconcat().
// console.log(fruits.concat("custardapple"))
// output:"[ 'banana', 'pineapple', 'apple', 'mango', 'orange', 'custardapple' ]"

// // Array copyWithin().
// console.log(fruits.copyWithin(2,0,2))
// output:"[ 'banana', 'pineapple', 'banana', 'pineapple', 'orange' ]"

// // Array Splice().
// console.log(fruits.splice(2,2,"lemon","kiwi"))
// output:"[ 'apple', 'mango' ]"
// console.log(fruits)
// output:"[ 'banana', 'pineapple', 'lemon', 'kiwi', 'orange' ]"

// // Array remove splice().
// console.log(fruits.splice(2,2))
// output:"[ 'apple', 'mango' ]"
// console.log(fruits)
// output:"[ 'banana', 'pineapple', 'orange' ]"

// // Array tospliced().
// console.log(fruits.toSpliced(2,3))
// output:"[ 'banana', 'pineapple' ]"
// console.log(fruits)
// output:"[ 'banana', 'pineapple', 'apple', 'mango', 'orange' ]"

// Array slice().
console.log(fruits.slice(2))
output:"[ 'apple', 'mango', 'orange' ]"
console.log(fruits)
output:"[ 'banana', 'pineapple', 'apple', 'mango', 'orange' ]"
// Benginner Friendly Ouestion


//Question-1:

function hello() {
    console.log("Hello_World!")
}
hello()


//Question-2:

function sum(a, b) {
    console.log(a + b)
}
sum(3, 5)


//Question-3:

function findLargest(a, b, c) {
    if (a > b && a > c) {
        console.log(a)
    } else if (b > c && b > a) {
        console.log(b)
    } else if (c > a && c > b) {
        console.log(c)
    }
}
findLargest(2, 8, 5)


//Question-4:

function isEven(a) {
    if (a % 2 === 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}
isEven(4)


//Question-5:

function factorial(f) {
    a = 1;
    for (i = 1; i <= f; i++) {
        a = i * a;
    }
    console.log(a)
}
factorial(5)


//Question-6:

function reverseString(string) {
    count = ''
    for (i = 0; i < string.length; i = i + 1) {
        count = string[i] + count
    }
    console.log(count)
}
reverseString("hello")


//Question-7:

function isPalindrome(string) {
    count = ''
    for (i = 0; i < string.length; i = i + 1) {
        count = string[i] + count
    }
    str = count
    if (string == str) {
        console.log("true")
    } else {
        console.log("false")
    }
}
isPalindrome("madam")

//Question-8:

function findMin(value) {
    console.log(Math.min(...value))
}
findMin([3, 1, 4, 1, 5])

//Question-9:

function sortarray(array) {
    var arr = array.sort(function (a, b) { return a - b });
    console.log(arr)
}
sortarray([3, 1, 4, 1, 5])


//Question-10:

function containSubstring(a, b) {
    var stg = a.includes(b)
    console.log(stg)
}
containSubstring("hello_world", "hello")


//Question-11:

function sumArray(array) {
    var sum = 0
    for (i = 0; i < array.length; i++) {
        sum += array[i]
    }
    console.log(sum)
}
sumArray([1, 2, 3, 4, 5])


//Question-12:

function fibonacci(n) {
    var a = 0
    var b = 1
    var count
    console.log(a)
    console.log(b)
    for (i = 0; i < n; i++) {
        count = a + b
        console.log(count)
        a = b
        b = count
    }
}
fibonacci(5)

//Question-13:

function isPrime(n) {
    var count = 0
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            count = count + 1
        }
    }
    if (count > 0) {
        console.log(n, "not a prime no.")
    } else {
        console.log(n, "is prime no.")
    }
}
isPrime(7)


//Qusetion-14:

function countVowels(text) {
    count = 0
    var txt = text.toLowerCase()
    for (i = 0; i <= txt.length; i++) {
        var char = txt[i]
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            console.log(char)
        }
    }
}
countVowels("hello")


const vowels = ["a", "e", "i", "o", "u"]
function countvowel(str) {
    let count = 0
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++
        }
    }
    console.log(count)
}
countvowel("hello")


//Question-15:

function findindex(array, k) {
    index = array.indexOf(k)
    console.log(index)
}
findindex([1, 2, 3, 4, 5], 3)


// Question-16:

let arr = ["apple", "mango", "apple",
    "orange", "mango", "mango"];

function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr))


//Question-17:

function findIntersection(arr1, arr2) {
    const setA = new Set(arr1);
    const setB = new Set(arr2);

    let intersectionResult = [];

    for (let i of setB) {

        if (setA.has(i)) {
            intersectionResult.push(i);
        }

    }

    console.log(intersectionResult)

}
findIntersection([1, 2, 3], [2, 3, 4])


//Question-18:

function areAnagrams(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if (len1 !== len2) {
        console.log("Invalid Input")
    }
    let str1 = a.split('').sort().join('')
    let str2 = b.split('').sort().join('')
    if (str1 === str2) {
        console.log(true)
    } else {
        console.log(false)
    }
}
areAnagrams("listen", "silent")


//Question-19:

function capilatizeWords(text1, text2) {

    arr1 = text1[0].toUpperCase() + text1.slice(1)
    arr2 = text2[0].toUpperCase() + text2.slice(1)

    console.log(arr1 + " " + arr2)
}
capilatizeWords("hello", "world")



//Question-20:

function flatternArray(array) {
    var arr = array.flat()
    console.log(arr)
}
flatternArray([1, [2, 3], [4, 5, 6]])

//Question-21:

function randomNumber(a) {
    var b = a + 1
    ran = Math.floor(Math.random() * b)
    console.log(ran)
}
randomNumber(10)


//Question-22:

function isValidEmail(email) {
    var parts = email.split('@');
    if (parts.length !== 2) return false;
    var username = parts[0];
    var domain = parts[1];
    if (username.length < 1) return false;
    if (domain.indexOf('.') === -1) return false;
    return true;
}

console.log(isValidEmail('modiveer@gmail.com'));
console.log(isValidEmail('modiveer@gmalcom'));



//Question-23:

function celsiusToFahrenheit(f) {
    f = (f * 9 / 5)
    f = f + 32
    console.log(f)
}
celsiusToFahrenheit(0)


//Question-24:

function removeElement(arr, value) {
    var ar = arr.filter(item => item != value)
    console.log(ar)
}
removeElement([1, 2, 3, 4, 5], 3)


//Question-25:

function secondLargest(a, b, c) {
    if ((a > b && a < c) || (a < b && a > c)) {
        console.log(a)
    } else if ((b > c && b < a) || (b < c && b > a)) {
        console.log(b)
    } else if ((c > a && c < b) || (c < a && c > b)) {
        console.log(c)
    }
}
secondLargest(1, 4, 3)

function findSecondLargest(arr) {
    if (arr.length < 2) console.log(null);

    const uniqueArr = [...new Set(arr)];
    uniqueArr.sort((a, b) => b - a);

    console.log(uniqueArr.length > 1 ? uniqueArr[1] : null);
}
findSecondLargest([1, 2, 3, 4, 5])



//Question-26:

function longestWord(str) {
    const words = str.split(/\s+/)
    let longestWord = ''
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    }
    console.log(longestWord)
}
longestWord("The quick brown fox jumped over the lazy dog")


//Question-27:

function findmissingNumber(arr) {
    const n = arr.length + 1
    const totalSum = (n * (n + 1)) / 2
    const actualSum = arr.reduce((acc, num) => acc + num, 0)
    console.log(totalSum - actualSum)
}
findmissingNumber([1, 2, 4, 5, 6])


//Question-28:


function gcd(a, b) {
    if (b === 0) {
        console.log(a)
    } else {
        console.log(gcd(b, a % b))
    }
}
gcd(12, 18)


//Question-29:

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

console.log(lcm(4, 6))


//Question-30:

function isBalanced(expr) {
    let stack = [];
    for (i = 0; i < expr.length; i++) {
        let x = expr[i]
        if (x === "(" || x === "{" || x === "[") {
            stack.push(x);
            continue;
        }
        if (stack.length == 0)
            return false;


        let check;
        switch (x) {
            case ")":
                check = stack.pop()
                if (check == "{" || check == "[")
                    return false;

                break;
            case "}":
                check = stack.pop()
                if (check == "[" || check == "(")
                    return false;

                break;
            case "]":
                check = stack.pop()
                if (check == "{" || check == "(")
                    return false;

                break;

        }
    }
    return (stack.length == 0);
}
let expr = "({})"
if (isBalanced(expr)) {
    console.log("Balanced")
} else {
    console.log("Not Balanced")
}



//Question-31:

const rotateArray = function (num, k) {
    for (i = 0; i < k; i++) {
        num.unshift(num.pop());
    }
    return num;
}
console.log(rotateArray([1, 2, 3, 4, 5], 2))



//String Question


//Question-1:

function reverseString(string) {
    count = ''
    for (i = 0; i < string.length; i = i + 1) {
        count = string[i] + count
    }
    console.log(count)
}
reverseString("hello")


//Question-2:

function isPalindrome(string) {
    count = ''
    for (i = 0; i < string.length; i = i + 1) {
        count = string[i] + count
    }
    str = count
    if (string == str) {
        console.log("true")
    } else {
        console.log("false")
    }
}
isPalindrome("racecar")
isPalindrome("hello")


//Question-3:

function countvowel(str) {
    const vowe = ["a", "e", "i", "o", "u"]
    let count = 0
    for (let letter of str.toLowerCase()) {
        if (vowe.includes(letter)) {
            count++
        }
    }
    console.log(count)
}
countvowel("hello world")


//Question-4:

function firstNonRepeatedCharcter(str) {
    for (i = 0; i < str.length; i++) {
        let char = str[i]
        if (str.indexOf(char) == i && str.indexOf(char, i + 1 == -1))
            return char;
    }
    return "_";
}
console.log(firstNonRepeatedCharcter("swiss"))


//Question-5:

function countwords(str) {
    count = str.split(' ').length
    console.log(count)
}
countwords("This is a string")


//Question-6:

function areAnagrams(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if (len1 !== len2) {
        console.log("Invalid Input")
    }
    let str1 = a.split('').sort().join('')
    let str2 = b.split('').sort().join('')
    if (str1 === str2) {
        console.log(true)
    } else {
        console.log(false)
    }
}
areAnagrams("listen", "silent")
areAnagrams("hello", "world")


//Question-7:

function replaceSpaces(str) {
    arr = str.replace(/ /g, '-')
    console.log(arr)
}
replaceSpaces("hello world")


//Question-8:

function toTitleCase(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString()
    return str.replace(/\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() +
                txt.substr(1).toLowerCase();
        });
}
console.log(toTitleCase("this is test string"))


//Question-9:

function isNumeric(str) {
    num = /^\d+$/.test(str);
    console.log(num)
}
isNumeric("1345")


//Question-10:

function removeDuplicate(txt, n) {
    var index = 0
    for (i = 0; i < n; i++) {
        for (j = 0; j < i; j++) {
            if (txt[i] == txt[j]) {
                break;
            }
        }
        if (i == j) {
            txt[index++] = txt[i]
        }
    }
    return txt.join("").slice(txt, index)
}
var txt = "programming".split("")
var n = txt.length
console.log(removeDuplicate(txt, n))


//Question-11:

function longestWord(str) {
    const words = str.split(/\s+/)
    let longestWord = ''
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    }
    console.log(longestWord)
}
longestWord("The quick brown fox jumped over the lazy dog")


//Question-12:

function capilatizeFirstLetter(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString()
    return str.replace(/\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() +
                txt.substr(1).toLowerCase();
        });
}
console.log(capilatizeFirstLetter("javascript is fun"))



//Question-13:

function repeatString(str, n) {
    str = str.repeat(n)
    return str;
}
console.log(repeatString("abc", 3))


//Question-14:

function containSubstring(a, b) {
    var stg = a.includes(b)
    console.log(stg)
}
containSubstring("hello_world", "hello")
containSubstring("hello_world", "plant")


//Question-15:

function stringToWord(str) {
    return str.split(" ")
}
console.log(stringToWord("this is test string"))


//Question-16:

function turncateString(str, n) {
    var turstr = str.substring(0, n) + "..."
    console.log(turstr)
}
turncateString("this is a long string", 10)


//Question-17:

function startWith(str, sub) {
    if (str.startsWith(sub)) { console.log(true) }
    else {
        console.log(false)
    }
}
startWith("Hello World", "Hello")
startWith("Hello World", "world")


//Question-18:

function endWith(str, sub) {
    if (str.endsWith(sub)) {
        console.log(true)
    } else {
        console.log(false)
    }
}
endWith("Hello World", "World")
endWith("Hello World", "Hello")


//Question-19:

function insertSubstring(str, sub, n) {
    str = str.substring(0, n) + sub + str.substring(n)
    console.log(str)
}
insertSubstring("Hello World", "Beautiful ", 6)


//Question-20:

function removeSubString(str, sub) {
    str = str.split(sub).join(' ')
    console.log(str)
}
removeSubString("this is a test. this is only test.", "test")



// Array Question


// Question-1:

function sumArray(array) {
    var sum = 0
    for (i = 0; i < array.length; i++) {
        sum += array[i]
    }
    console.log(sum)
}
sumArray([1, 2, 3, 4, 5])


// Question-2:

function findLargest() {
    console.log(Math.max(...[1, 5, 3, 9, 2]))
}
findLargest()


// Question-3:

function findSmallest() {
    console.log(Math.min(...[1, 5, 3, 9, 2]))
}
findSmallest()


// Question-4:

function sortarrayasc(array) {
    arr = array.sort(function (a, b) { return a - b });
    console.log(arr)
}
sortarrayasc([5, 2, 9, 1, 5, 6])


// Question-5:

function sortarraydes(array) {
    arr = array.sort(function (a, b) { return b - a });
    console.log(arr)
}
sortarraydes([5, 2, 9, 1, 5, 6])


// Question-6:

function reverseArray(array) {
    arr = array.reverse();
    console.log(arr)
}
reverseArray([1, 2, 3, 4, 5])


// Question-7:

function containElement(arr, value) {
    var ele = arr.includes(value)
    console.log(ele)
}
containElement([1, 2, 3, 4, 5], 3)


// Question-8:

function findindex(array, k) {
    index = array.indexOf(k)
    console.log(index)
}
findindex([1, 2, 3, 4, 5], 3)


// Question-9:

let arra = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(arra) {
    return arra.filter((item, index) => arra.indexOf(item) === index);
}
console.log(removeDuplicates(arra))


// Question-10:

function mergeArray(arr1, arr2) {
    var arr = arr1.concat(arr2)
    console.log(arr)
}
mergeArray([1, 2, 3], [4, 5, 6])


// Question-11:

function findIntersection(arr1, arr2) {
    const setA = new Set(arr1);
    const setB = new Set(arr2);

    let intersectionResult = [];

    for (let i of setB) {

        if (setA.has(i)) {
            intersectionResult.push(i);
        }

    }

    console.log(intersectionResult)

}
findIntersection([1, 2, 3], [2, 3, 4])


// Question-12:

function findUnion(arr1, arr2) {
    var arr = arr1.concat(arr2)
    console.log(arr)
}
findUnion([1, 2], [3, 4])


// Question-13:

function isSorted(arr) {
    if (arr.length <= 1) {
        console.log(true)
    }
    let isAscending = true
    let isDescending = true
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            isAscending = false
        }
        if (arr[i] > arr[i - 1]) {
            isDescending = false
        }
    }
    console.log(isAscending || isDescending)
}
isSorted([1, 2, 3, 4, 5])


// Question-14:

function findDifference(arr1, arr2) {
    var arr = arr1.filter(item => !arr2.includes(item))
    console.log(arr)
}
findDifference([1, 2, 3], [2, 3, 4])


// Question-15:

function rotateArray1(arr, k) {
    const n = arr.length
    k %= n
    return arr.slice(k).concat(arr.slice(0, k));
}
console.log(rotateArray1([1, 2, 3, 4, 5], 2))


// Question-16:

function maxDiff(arra1, arr_size) {
    let max_diff = arra1[1] - arra[0];
    let min_element = arra1[0];
    let i;
    for (i = 1; i < arr_size; i++) {
        if (arra1[i] - min_element > max_diff)
            max_diff = arra1[i] - min_element;
        if (arra1[i] < min_element)
            min_element = arra1[i];
    }
    return max_diff;
}

let arra1 = [2, 3, 10, 6, 4, 8, 1];
let size = arra1.length;
console.log("Maximum difference is " + maxDiff(arra1, size));


// Question-17:

function findSecondLargest(arr) {
    if (arr.length < 2) console.log(null);

    const uniqueArr = [...new Set(arr)];
    uniqueArr.sort((a, b) => b - a);

    console.log(uniqueArr.length > 1 ? uniqueArr[1] : null);
}
findSecondLargest([1, 2, 3, 4, 5])


// Question-18:

function maxSumPair(a, n1) {
    let maxSum = Number.MIN_VALUE
    for (i = 0; i < n1; i++)
        for (j = i + 1; j < n1; j++)
            maxSum = Math.max(maxSum, a[i] + a[j]);
    let c = 0;
    for (i = 0; i < n1; i++)
        for (j = i + 1; j < n1; j++)
            if (a[i] + a[j] == maxSum)
                c++;
    return c;
}
let array1 = [1, 2, 3, 4, 5]
let n1 = array1.length
console.log(maxSumPair(array1, n1))


// Question-19:

function minSumPair(a, n2) {
    let min = Number.MAX_VALUE,
        secondMin = Number.MAX_VALUE;
    for (let j = 0; j < n2; j++) {

        if (a[j] < min) {
            secondMin = min;
            min = a[j];
        }
        else if ((a[j] < secondMin) &&
            a[j] != min)
            secondMin = a[j];
    }
    return (secondMin + min);
}

let aray = [1, 2, 3];
let n2 = aray.length;

console.log(minSumPair(aray, n2));


// Question-20:

function moveZeros() {
    let A = [0, 1, 0, 3, 12];
    let n = A.length;
    let B = new Array(n);
    let j = 0;
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (A[i] !== 0) {
            B[j] = A[i];
            j++;
        }
        else {
            count++;
        }
    }
    while (count > 0) {
        B[j] = 0;
        count--;
        j++;
    }
    for (let i = 0; i < n; i++) {
        A[i] = B[i];
    }
    for (let i = 0; i < n; i++) {
        console.log(A[i] + " ");
    }

}
moveZeros()


// Question-21:

function countFrequency(arr) {
    const count = {}
    for (i = 0; i < arr.length; i++) {
        let ele = arr[i]
        if (count[ele]) {
            count[ele] += 1
        } else {
            count[ele] = 1
        }
    }
    console.log(count)
}
countFrequency([1, 2, 2, 3, 3, 3])


// Question-22:

function mostFrequent(arr) {
    arr.sort((a, b) => a - b)
    let count = 1, max = 0, el;
    for (i = 1; i < arr.length; ++i) {
        if (arr[i] === arr[i - 1]) {
            count++
        } else {
            count = 1
        }
        if (count > max) {
            max = count
            el = arr[i]
        }
    }
    console.log(el)
}
mostFrequent([1, 2, 2, 3, 3, 3])


// Question-23:

function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;

    const lis = [];

    for (const num of nums) {
        let left = 0;
        let right = lis.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (lis[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        if (left < lis.length) {
            lis[left] = num;
        } else {
            lis.push(num);
        }
    }

    console.log(lis)
    return lis.length;
}
const ar = [10, 22, 9, 33, 21, 50, 41, 60, 80];
console.log(lengthOfLIS(ar));


// Question-24:

function longestConsecutive(nums) {
    if (nums.length === 0) return 0;
    nums.sort((a, b) => a - b);

    let longest = 1;
    let currentLength = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        if (nums[i] === nums[i - 1] + 1) {
            currentLength++;
        } else {
            longest = Math.max(longest, currentLength);
            currentLength = 1;
        }
    }
    longest = Math.max(longest, currentLength);

    return longest;
}
const arry = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(arry));



// Object Question

// Question-1:

function person() {
    const person = { Name: "john", age: 25, city: "New York" }
    console.log(person)
}
person()


// Question-2:

function access() {
    const obj = { Name: "alice", age: 30 }
    console.log(obj.Name)
}
access()


// Question-3:

function add() {
    const car = { brand: "toyota", model: "corolla" }
    car.year = 2020
    console.log(car)
}
add()


// Question-4:

function deleteobj() {
    user = { username: "jhon_doe", password: 12345 }
    delete user.password
    console.log(user)
}
deleteobj()


// Question-5:

function obj() {
    const obj = { name: "alice", age: 30 }
    console.log(obj.hasOwnProperty("age"))
}
obj()


// Question-6:

function mergeObject() {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { b: 3, c: 4 }
    merged = { ...obj1, ...obj2 }
    console.log(merged)
}
mergeObject()


// Question-7:

function clone() {
    const original = { name: 'Alice', details: { age: 30, city: 'NYC' } };
    console.log(original.details.city);
    const clone = { ...original };
    clone.details.city = 'LA';
    console.log(clone.details.city)
}
clone()


// Question-8:

function loop() {
    const user = { name: "John", age: 30, city: "New York" };

    for (let key in user) {
        if (user.hasOwnProperty(key)) {
            console.log(key, user[key]);
        }
    }
}
loop()


// Question-9:

function property() {
    const obj = { name: 'Alice', age: 30, city: 'NYC' };
    let count = 0
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            count++
        }
    }
    console.log(count)
}
property()


// Question-10:

function objectKeyToArray() {
    const obj = { name: 'Alice', age: 30, city: 'NYC' };
    let array = Object.keys(obj)
    console.log(array)
}
objectKeyToArray()


// Question-11:


// Question-12:


// Question-13:


// Question-14:


// Question-15:


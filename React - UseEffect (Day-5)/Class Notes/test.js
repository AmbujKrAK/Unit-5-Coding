
// let s = '1262';

// let n = 26;
// let number = [];
// let letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// let res = "";

// for(var i = 1; i<=n ;i++){
//   number.push(i)
// };

// for(var i = 0; i< s.length; i++){
   
// }

// let S = "1262"

// let arr = S.split("");

// console.log(arr)

// console.log(number)


// function countDecodingDP(digits, n)
// {  
//     let count = [];
//     count[0] = 1;
//     count[1] = 1;
     
//     if (digits[0] == '0')  
//           return 0;
           
//     for(let i = 2; i <= n; i++)
//     {
//         count[i] = 0;
//         if (digits[i - 1] > '0')
//             count[i] = count[i - 1];

//         if (digits[i - 2] == '1' ||
//            (digits[i - 2] == '2' &&
//             digits[i - 1] < '7'))
//             count[i] += count[i - 2];
//     }
//     return count[n];
// }

// let digits = [ '1','2','3','4' ];
// let n = digits.length;
 
// console.log(countDecodingDP(digits, n));
 

// ----------------- Different Approch ----------//

function decodeVariations(S) {
  
  let count = [];
     count[0] = 1;
     count[1] = 1;
     for(let i = 2; i <= S.length; i++){
         count[i] = 0;
         if(S[i - 1] > '0'){
             count[i] = count[i - 1];
         }
         if(S[i - 2] == '1' || (S[i - 2]) == '2' && S[i - 1] < '7'){
             count[i] += count[i - 2];
         }
     }
     return count[S.length];
 
 }



//  Absolute Value Sort
// Given an array of integers arr, write a function absSort(arr), that sorts the array according to the absolute values of the numbers in arr. If two numbers have the same absolute value, sort them according to sign, where the negative numbers come before the positive numbers.

// Examples:

// input:  arr = [2, -7, -2, -2, 0]
// output: [0, -2, -2, 2, -7]
// Constraints:

// [time limit] 5000ms
// [input] array.integer arr
// 0 ≤ arr.length ≤ 10
// [output] array.integer


// O(n log n)  
// function absSort(arr) {
//   arr.sort((a,b)=>{
//       if (Math.abs(a) < Math.abs(b)) return -1
//       if (Math.abs(a) > Math.abs(b)) return 1
    
//       if(a > b) return 1
//       if (a < b) return -1
//       return 0;
//     })
  
//    return arr;
  
// }

// console.log('absSort', absSort([2, -7, -2, -2, 0]))


//  O(n^2) -> selection sort
// function absSort(arr):
//     function smaller(a, b):
//         if abs(a) < abs(b): return true
//         if abs(a) > abs(b): return false
//         return a < b

//     for i from 0 to arr.length - 2:
//     best = i
//         for j from i to arr.length - 1:
//             if smaller(arr[j], arr[best]):
//                 best = j
//         arr[best], arr[i] = arr[i], arr[best]

//     return arr
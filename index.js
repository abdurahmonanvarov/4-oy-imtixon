
//IMTIXON

//1-masala
// let str1 = '34567';
// function changeArr(str){
//    let res = str.split('');
//    return res;
// };
// console.log(changeArr(str1));

//2-masala
// == malum bir songa teng
// === songa tengmi deb soraladi
// let res;
// if (3 == 3){
//     res = 'true'
// } else{
//     res = false
// };
// console.log(res);

// let res;
// if (3 === 2){
//     res = true
// } else{
//     res = false
// };
// console.log(res);

//3-masala
// function createArr(element){
//     let res = [];
//     for (let i = 1; i<=element; i++){
//         res.push(i)
//     }
//     return res;
// }
// console.log(createArr(10));

//4-masala
// let arr = [1,2,3,4,5];
// function findToqAndJuft(arr){
//     let toq = [];
//     let juft = [];
//     let sum = 0;
//     arr.forEach(function(valeu){
//         if (valeu%2==0){
//             juft.push(valeu)
//         } else{
//           toq.push(valeu)
//         }
//     });
//     return juft.concat(toq);
// } 
// console.log(findToqAndJuft(arr));


//5-masala
// let str1 = 'salom! !dunyo';
// function deletElement(atr){
//     let res = '';
//     for (const i of atr){
//         if (i != '!'){
//             res += i
//         };
//     };
//     return res;
// };
// console.log(deletElement(str1));

//6-masala
// function arrTwo(arr, arr1){
//     let res = arr.concat(arr1);
//     let sum  = 0;
//     res.map(function(valeu){
//         return sum += valeu
//     });
//     return sum;
// };
// console.log(arrTwo([1,2,3], [1,2,3]));

//7-masala
// let str = 'aAbdurahmonb';
// function deletElement(str){
//     let res = '';
//     for (const i of str){
//         if (i != str[0] && i != str[str.length -1] ){
//             res += i
//         } 
//     };
//     return res;
// };
// console.log(deletElement(str));

//8-masala
// let arr1 = [1,2,3,4];
// function teskariArr(arr){
//     let res = [];
//     arr.map(function(valeu){
//         if (valeu < arr[0]){
//             res.push(valeu)
//         }
//     })
//     return res;
// };
// console.log(teskariArr(arr1));

//9-masala
let str = '12340';
function deletZero(srt){
    let res = srt.split('').forEach(function(valeu){
        if (valeu.length -1 != 0){
            res.push(valeu)
        }
    });
   
    return res.join('');
}
console.log(deletZero(res));

//10-masala
// let arr1 = [1,2,3,4];
// function teskariArr(arr){
//     let res = [];
//     arr.forEach(function(valeu){
//        if (valeu>arr){
//         res.push(arr)
//        }
//     })
//     return res;
// };
// console.log(teskariArr(arr1));
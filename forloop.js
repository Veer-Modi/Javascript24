// for(i=1;i<=5;i++){
//     for(j=1;j<=5;j++){
//       console.log("i,j",i,j)
//     }
//   }
// for(i=1;i<=5;i++){
//     for(j=1;j<=i;j++){
//       console.log("i,j",i,j)
//     }
//   }
// for(i=1;i<=5;i++){
//     for(j=1;j<=i;j++){
//         for(k=1;k<=j;k++){
//             console.log("i,j,k",i,j,k)
//         }
//     }
//   }



// for (i = 1; i <= 5; i++) {
//     let string = ' '
//     for (j = 1; j <= i; j++) {
//         string = j + string
//     }
//     console.log(string)
// }

// const arr=["A","B","C","D"]
// for (i = 0; i <= arr.length; i++) {
//     let str=arr[i]
//     let string=' '
//     for (j = 0; j <= i; j++) {
//             string=str+string
//         }
//         console.log(string)
//     }

for (i = 0; i <= 3; i++) {
    let str = ' '
    for (j = 0; j <= i; j++) {
        d = String.fromCharCode(65 + j)
        str = str + d
    }
    console.log(str)
}



for (i = 0; i <= 3; i++) {
    let str = ' '
    for (j = 0; j <= i; j++) {
        d = String.fromCharCode(65 + j)
        str = d + str
    }
    console.log(str)
}



for (i = 0; i <= 3; i++) {
    let str = ' '
    for (j = 0; j <= i; j++) {
        d = String.fromCharCode(68 - j)
        str = str + d
    }
    console.log(str)
}
'use strict'
let arr1=[1, 2, 3, 4]
let arr2=[0, 6]

function can_nest (arr1,arr2) {
    let min1 = arr1[0];
    let max1 = arr1[0];
    
    let min2 = arr2[0];
    let max2 = arr2[0];
    
    for (let i=1;i<arr1.length;i++) {
        if (min1 > arr1[i])
            min1 = arr1[i];
        if (max1 < arr1[i])
            max1 = arr1[i];
    };

    for (let i=1;i<arr2.length;i++) {
        if (min2 > arr2[i])
            min2 = arr2[i];
        if (max2 < arr2[i])
            max2 = arr2[i];
    };
    // console.log(min1,max1,min2,max2);
    
    return (min1>min2&&min2<max2)

};

console.log(can_nest(arr1,arr2));
'use strict'
let arr1=[1, 2, 3, 4]
let arr2=[0, 6]

function can_nest (arr1,arr2) {
    return (min_max(arr1)[0]>min_max(arr2)[0]&&min_max(arr1)[1]<min_max(arr2)[1])
};

function min_max (arr) {
    let min = arr[0];
    let max = arr[0];
    
    for (let i=1;i<arr.length;i++) {
        if (min > arr[i])
            min = arr[i];
        if (max < arr[i])
            max = arr[i];
    return([min,max]);
    };
};

console.log(can_nest(arr1,arr2));
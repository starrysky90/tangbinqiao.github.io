---
title: javascript排序算法
date: 2018-05-04 10:24:16
tags: ['js', '排序算法']
---
## 插入排序

1. 首先将数组第1个数看成是一个有序序列。
2. 将数组的第2个数按照关键字大小插入到这个有序序列中，插入后得到了一包含两个数的有序序列。
3. 接下来再重复上面的步骤将第3，第4……第n-1个数分别插入到该有序序列中，最终得到一个包含n个数的有序序列。

<!-- more -->
```javascript
    function insertSort(arr){
        for(var i=1;i<arr.length;i++){
            var temp = arr[i];
            var j = i - 1;
            while(j>=0 && temp < arr[j]){
                arr[j + 1] = arr[j];
                j--;
            }

            arr[j + 1] = temp; 
        }
        return arr;
    }
```
## 冒泡排序
冒泡排序时数组的数据会像气泡一样从数组的一段漂浮到另一端， 因此才有了冒泡这个命名， 基本步骤如下

1. 以此两辆比较相邻的元素， 如果第一个比第二个大， 则进行交换
2. 经过第一轮后，最大的数已经出现在了数组的最后一个位置
3. 然后再对除了最后一个元素外的所有数都重复一遍上述比较， 结束后第二个的数会到达数组的第二个位置
4. 再依次对剩下的数进行重复， 知道排序完毕
```javascript
function bubbleSort(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length-i;j++){
            if(arr[j] > arr[j+1]){
                var tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    return arr;
}
```

## 选择排序

1. 从数组的开头起，将第一个元素和其他所有元素都进行一次比较，选择出最小的元素放在数组的第一个位置。
2. 然后再从第二个元素开始， 将第二个元素和除第一个元素之外的所有元素进行一次比较，选择出最小的元素放在数组的第二个位置
3. 对后面的第三，第四...的元素分别重复上面的步骤,直到所有的数据完成排序。
```javascript
function selectSort(arr){
    var minIndex;
    for(var i=0;i<arr.length;i++){
        minIndex = i;
        for(var j=i+1;j<arr.length;j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j;
            }
        }
        //每轮比较后若arr[i]不是我们需要的最小那个数，则进行交换
        if(minIndex != i){
            var tmp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = tmp;
        }
    }
    return arr;
}
```

## 快速排序
```javascript
function quickSort(arr){
    if(arr.length<=1){ return arr;}
    var pivotIndex = Math.floor(arr.length/2);
    var pivot = arr.splice(pivotIndex, 1)[0];

    var left = [];
    var right = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }

    //递归
    return quickSort(left).concat(pivot, quickSort(right));
}
```
// 1. Создать функцию solve, которая принимает 4 аргумента
//   n (количество дисков в начале исполнения)
//   fromRod (стержень с которого снимается диск)
//   toRod (стержень на который должен быть положен диск в итоге)
//   additionalRod (стержень который используется как вспомогательный)
// 2. В функции выполнить проверку n === 1, если она выполняется, вывести, 
//    с какого стержня переносится диск и на какой и сделать return
// 3. Вызвать solve, поменяв местами toRod и additionalRod и уменьшив n на 1
// 4. Вывести номер дискаб который мы переносим (n) и стержни с которого мы переносим, 
//    на который мы переносим и тот, который используется, как дополнительный
// 5. Вызвать solve, поменяв местами fromrod и additionalRod и уменьшив n на 1
// 6. Вызвать solve с аргументами (3, 1, 2, 3)

function solve(n, fromRod, toRod, additionalRod) {
    if (n === 1) {
        console.log(`Move 1 from ${fromRod} to rod ${toRod}`);
        return;
    }
    solve(n-1, fromRod, additionalRod, toRod)
    console.log(`Move ${n} from rod ${fromRod} to rod ${toRod} with rod ${additionalRod}`);
    solve(n-1, additionalRod, toRod, fromRod)
}

console.log(solve(3, 1, 2, 3));

// get max element in array by divide and conbine
const arr = [40, 250,80,88,240,12,148]

function findMinDefault(array) {
    const min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = arr[i]
        }
        return min;
    }
}

function findMaxDefault(array) {
    const max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = arr[i]
        }
        return max;
    }
}

function findMin(array, index) {
    let min;
    if (array.length > index) {
        min = findMin(array, index + 1)

        if (arr[index] < min) {
            return arr[index];
        }
        return min;
    }

    return arr[index - 1]
}

function findMax(array, index) {
    let max;
    if (array.length > index) {
        max = findMax(array, index + 1)

        if (arr[index] > max) {
            return arr[index];
        }
        return max;
    }

    return arr[index - 1]
}

console.log(findMin(arr, 1));
console.log(findMax(arr, 1));


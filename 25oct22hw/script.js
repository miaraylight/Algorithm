
// First level: 1. Linear Search
//     Given an array arr[] of N elements, the challenge is to write a function to find a given element x in arr[] .

// Линейный поиск используется для поиска ключевого элемента среди нескольких элементов. 
// Линейный поиск сегодня используется меньше, потому что он медленнее, чем бинарный поиск и хеширование.

// Алгоритм:

// Шаг 1: Обход массива
// Шаг 2: Сопоставьте ключевой элемент с элементом массива
// Шаг 3: Если ключевой элемент найден, верните позицию индекса элемента массива.
// Шаг 4: Если ключевой элемент не найден, верните -1


let array = [1 , 2, 3,]

let searchItem = (array, x) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === x) {
            return i
        }
        
    }
    return -1
}

console.log(searchItem(array, 3));


// Second level:    Find the element that appears once in a sorted array
//     Given a sorted array in which all elements occur twice (one after the other) and one element appears only once.


// Простое решение состоит в обходе массива слева направо. Поскольку массив отсортирован, мы легко можем найти нужный элемент.

// Алгоритм:
// Шаг 1: Обход массива через один элемент
// Шаг 2: Если элемент отличается от первого то мы нашли не задублированный элемент
// Шаг 3: Вернем элемент или позицию в массиве
// Шаг 4: Если ключевой элемент не найден, верните -1 или что то еще :)
// …


let doubleArray = [1, 1, 2, 2, 3, 3, 4, 4, 5] 

let  searchSingleElement = function(array) {
    for (let i = 0; i < array.length; i+=2 ) {
        if (array[i] !== array[i+1]) {
            return i;
        }
        
    }
    return -1;
}

console.log(searchSingleElement(doubleArray));

// Шаг 5: Исправить ошибку ArrayIndexOutOfBoundsException
// В JS array[last_index + n] возвращает "undefined", сравнение его с array[last_index] дает верный результат в заданных условиях
// и я не столкнулась с этой ошибкой :) 
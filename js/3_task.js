'use strict';

/*
    Необходимо написать свою реализацию метода arr.flat
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
*/

const arrExample = [
    1, 2, 3, 4, 5,
    [
        {name: 'John'},
        {name: 'Alice'},
        [
            'string1', 'string2', NaN, null,
            ['foo', 'bar', 'baz']
        ]
    ],
    7, 8, 9, 10
]

console.log(arrExample)
console.log(arrExample.flat(Infinity))

const myFlat = () => {
    // Write your code here


}

myFlat(arrExample);

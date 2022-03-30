// Basic data types
// Число «number»
// Число «bigint»
// Строка «string»
// Булевый (логический) тип «boolean»
// Специальное значение «null»
// Специальное значение «undefined»
// Символы «symbol»
// Объекты «object»


// что такое чистые функции и их основные принципы


// является ли эта функция чистой
// const foo = (a,b) => console.log(a + b)

// отличия var const let
// можно ли изменить обьект объявленный через конст

// как можно отменить присвоение значения объекту , который определен через конст
// const a = {b:4}

// Object.freeze(a) можно читать | нельзя создавать , обновлять и удалять
// Object.seal можно читать и обновлять | нельзя создавать , удалять
// Object.defineProperty(a,'b',{
//     value: 4,
//     writable: false
// })
// a.b = 5


//immutable array methods
//slice
//filter
//reduce
//map
//concat

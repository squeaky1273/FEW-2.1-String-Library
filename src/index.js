
// A humble String
const str = 'hello world'

// Strings have a lot in common with Arrays
console.log(str[1])
console.log(str.length)
console.log(str.slice(3))
console.log(str.split(''))


// CHALLENGE 1
console.log('--- upperFirst ---')
// The function below needs to uppercase the 
// first letter of the input string
function upperFirst(str) {
    return str.replace(/^./, str[0].toUpperCase())
}
  
console.log(upperFirst('foo'))

// String.prototype.upperFirst = function() {
//     return str.replace(/^./, str[0].toUpperCase())
//   }

// console.log('foo'.upperFirst())


// CHALLENGE 2
console.log('--- upperAll ---')
// The function below needs to uppercase the 
// all letters of the input string
function upperAll(str) {
    return str.toUpperCase()
}

console.log(upperAll('foo'))

// String.prototype.upperAll = function() {
//     return str.toUpperCase()
//   }

// console.log('foo'.upperAll())


// CHALLENGE 3
console.log('--- upperFirstWord ---')
// The function below needs to upper case the first 
// letter of each word in the input string
function upperFirstWords(str) {
    const str_words = str.split(/ |\B(?=[A-Z])/);

    for (let i = 0; i < str_words.length; i++) {
        str_words[i] = str_words[i][0].toUpperCase() + str_words[i].substr(1);
    }
    return str_words.join(' ')
}

console.log(upperWords('hello foo bar world!'))

// String.prototype.upperFirstWords = function() {
//     const str_words = str.split(/ |\B(?=[A-Z])/);

//     for (let i = 0; i < str_words.length; i++) {
//         str_words[i] = str_words[i][0].toUpperCase() + str_words[i].substr(1);
//     }
//     return str_words.join(' ')
// }

// console.log(str.upperFirstWords())


// CHALLENGE 4


// CHALLENGE 5
console.log('--- kebabCase ---')
// Conver string to kebab case.
// hello world -> hello-world

function kebabCase(str, sep = '-') {
    const str_words = str.split(/ |\B(?=[A-Z])/);

    for (let i = 0; i < str_words.length; i++) {
        str_words[i] = str_words[i][0].toLowerCase() + str_words[i].substr(1);
    }
    return str_words.join(sep)
  
}

console.log(kebabCase('hello world foo bar'))

// String.prototype.kebabCase = function(sep = '-') {
//     const str_words = str.split(/ |\B(?=[A-Z])/);

//     for (let i = 0; i < str_words.length; i++) {
//         str_words[i] = str_words[i][0].toLowerCase() + str_words[i].substr(1);
//     }
//     return str_words.join(sep)
  
// }

// console.log(str.kebabCase())


// CHALLENGE 6
console.log('--- snakeCase ---')
// Conver string to snake case.
// hello world -> hello_world

function snakeCase(str) {
    const str_words = str.split(/ |\B(?=[A-Z])/);

    for (let i = 0; i < str_words.length; i++) {
        str_words[i] = str_words[i][0].toLowerCase() + str_words[i].substr(1);
    }
    return str_words.join('_')
  
}
console.log(snakeCase(str))

// String.prototype.snakeCase = function() {
//     const str_words = str.split(/ |\B(?=[A-Z])/);

//     for (let i = 0; i < str_words.length; i++) {
//         str_words[i] = str_words[i][0].toLowerCase() + str_words[i].substr(1);
//     }
//     return str_words.join('_')
  
// }

// console.log(str.snakeCase())


// CHALLENGE 7
console.log('--- camelCase ---')
// Conver string to camel case.
// hello world -> helloWorld

function camelCase(str) {
    return str.replace(/\W+(.)/g, function(match, chr)
    {
         return chr.toUpperCase();
     });
 }

console.log(camelCase(str))

// String.prototype.camelCase = function() {
//     return str.replace(/\W+(.)/g, function(match, chr)
//     {
//          return chr.toUpperCase();
//      });
//  }

// console.log(str.camelCase())

// CHALLENGE 8

// CHALLENGE 9

// CHALLENGE 10
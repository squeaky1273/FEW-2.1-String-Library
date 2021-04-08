
// A humble String
const str = 'hello world'

// Strings have a lot in common with Arrays
console.log(str[1])
console.log(str.length)
console.log(str.slice(3))
console.log(str.split(''))


// CHALLENGE 1
// console.log('--- upperFirst ---')
// The function below needs to uppercase the 
// first letter of the input string
function upperFirst(str) {
    return str.replace(/^./, str[0].toUpperCase())
}

String.prototype.upperFirst = function() {
    return upperFirst(this)
  }


// CHALLENGE 2
// console.log('--- upperAll ---')
// The function below needs to uppercase the 
// all letters of the input string
function upperAll(str) {
    return str.toUpperCase()
}

String.prototype.upperAll = function() {
    return upperAll(this)
  }

// console.log('foo'.upperAll())


// CHALLENGE 3
// console.log('--- upperFirstWord ---')
// The function below needs to upper case the first 
// letter of each word in the input string
function upperFirstWords(str) {
    const str_words = str.split(/ |\B(?=[A-Z])/);

    for (let i = 0; i < str_words.length; i++) {
        str_words[i] = str_words[i][0].toUpperCase() + str_words[i].substr(1);
    }
    return str_words.join(' ')
}

String.prototype.upperFirstWords = function() {
    return upperFirstWords(this)
}

// console.log(str.upperFirstWords())


// CHALLENGE 4
// console.log('--- removeExtraSpaces ---')
// Conver string to remove extra spaces.
// "   Hello    world!   " -> "Hello world!"
function removeExtraSpaces(str) {
    return str.replace(/\s+/g, ' ').trim()
 }

String.prototype.removeExtraSpaces = function() {
    return removeExtraSpaces(this)
  }

// console.log('foo   hee'.removeExtraSpaces())


// CHALLENGE 5
// console.log('--- kebabCase ---')
// Conver string to kebab case.
// hello world -> hello-world

function kebabCase(str, sep = '-') {
    const str_words = str.split(/ |\B(?=[A-Z])/);

    for (let i = 0; i < str_words.length; i++) {
        str_words[i] = str_words[i][0].toLowerCase() + str_words[i].substr(1);
    }
    return str_words.join(sep)
}

String.prototype.kebabCase = function(sep = '-') {
    return kebabCase(this)
}

// console.log(str.kebabCase())


// CHALLENGE 6
// console.log('--- snakeCase ---')
// Conver string to snake case.
// hello world -> hello_world

function snakeCase(str) {
    const str_words = str.split(/ |\B(?=[A-Z])/);

    for (let i = 0; i < str_words.length; i++) {
        str_words[i] = str_words[i][0].toLowerCase() + str_words[i].substr(1);
    }
    return str_words.join('_')
}

String.prototype.snakeCase = function() {
    return snakeCase(this)
}

// console.log(str.snakeCase())


// CHALLENGE 7
// console.log('--- camelCase ---')
// Conver string to camel case.
// hello world -> helloWorld

function camelCase(str) {
    return str.replace(/\W+(.)/g, function(match, chr)
    {
         return chr.toUpperCase();
     });
 }

String.prototype.camelCase = function() {
    return camelCase(this)
 }

// console.log(str.camelCase())

// CHALLENGE 8
// console.log('--- shift ---')
// Conver string to shift.
// Hello World -> ello WorldH
function shift(str) {
    return str.slice(1) + str[0]
 }

String.prototype.shift = function() {
    return shift(this)
  }

// console.log('foo'.shift())

// CHALLENGE 9
// console.log('--- makeHashTag(str) ---')
// Conver string to make hashtag.
// Amazing bongo drums for sale -> ['#amazing', '#bongo', '#drums']
function makeHashTag(str) {
    const str_words = str.split(/ |\B(?=[A-Z])/);

    for (let i = 0; i < str_words.length; i++) {
        str_words[i] = '#' + str_words[i][0].toUpperCase() + str_words[i].substr(1);
    }
    return str_words.join()
 }

String.prototype.makeHashTag = function() {
    return makeHashTag(this)
  }

// // CHALLENGE 10
// console.log('--- isEmpty ---')
// // Conver string to return if string is empty or not.
// // Abc def -> isEmpty("Abc def") // false
// function isEmpty(str) {
//     const new_str = str.trim()
//     for (new_str) {
//         if (/\n\r\t/) {
//             return true  
//         } else {
//             return false
//         }
//     }
//  }
// str == "sdfr"

// console.log(isEmpty(str))


module.exports = {
    upperFirst,
    upperAll,
    upperFirstWords,
    shift,
    kebabCase,
    camelCase,
    snakeCase,
    removeExtraSpaces,
    makeHashTag
}
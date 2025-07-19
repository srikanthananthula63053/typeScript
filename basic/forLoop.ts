
const books = ['1924', 'Brave New World', 'Fahrenheit 211']

// let foundbook;

// for (let book of books) {
//     console.log(book)
//     if (book === "1924") {
//         foundbook = book
//         console.log(book)
//         break;
//     }
// }



// adding type script to foundbooks


// let  foundbook:string;
// for(let book of books){
// if(book==='1924'){
//     foundbook=book
//     // foundbook=1
// }
// }




// find the length 

// let foundbook: string | undefined
// for (let book of books) {
//     if (book === "1924") {
//         foundbook = book
//         console.log(foundbook.length)
//     }
// }
// console.log(foundbook)


// undefined

let foundbook: string | undefined
for (let book of books) {
    if (book === "1921") {
        foundbook = book
        console.log(foundbook.length)
    }
}
console.log(foundbook)

// interface Book {
//     id: number,
//     title: string,
//     author: string,
//     genre: string
// }
// let deepWork: Book = {
//     id: 1,
//     title: "deep work",
//     author: " srikanth",
//     genre: "self-help"
// }
// console.log(deepWork.id)


// using  method


// interface Book {
//     id: number,
//     title: string,
//     author: string,
//     genre: string,
//     printAuthor(): void,
//     printMessage(message: string): void
// }
// let deepWork: Book = {
//     id: 1,
//     title: "deep work",
//     author: " srikanth",
//     genre: "self-help",
//     printAuthor(): void {
//         console.log(this.author)
//     },
//     printMessage(message) {
//         console.log(`${this.title}  ${message}`)
//     }
// }

// deepWork.printAuthor()

// const result = deepWork.printMessage("is the hello")



//using function


interface Book {
    id: number,
    title: string,
    author: string,
    genre: string,
    printSomething: (Something: number) => number

}
let deepWork: Book = {
    id: 1,
    title: "deep work",
    author: " srikanth",
    genre: "self-help",
    printSomething: (num) => {
        console.log(deepWork.author)
        return num
    }

}

const result = deepWork.printSomething(34)

console.log(result)




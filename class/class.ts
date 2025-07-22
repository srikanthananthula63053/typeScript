class book {
    title: string
    author: string
    constructor(title: string, author: string) {
        this.title = title
        this.author = author
    }
}
const deepwork = new book('hello', 'madam')
console.log(deepwork)

class book1 {
    title: string
    author: string
    isCorrect: boolean = true
    constructor(title: string, author: string) {
        this.title = title
        this.author = author
    }
    public isChecked() {
        return this.isCorrect
    }
    private isCheckedOut() {
        return !this.isCorrect
    }
}
const deepwork1 = new book1('heey', 'hi')
console.log(deepwork1.isCorrect = false)
console.log(deepwork1.isChecked())
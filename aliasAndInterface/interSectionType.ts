
type book = { id: number, name: string, price: number }
type Discount = book & { discount: number }

const book1: book = { id: 1, name: "maths", price: 122 }

const discount: Discount = { id: 2, name: "che", price: 21, discount: 0.5 }

const car: { brand: string, year: number } = { brand: "tata", year: 2222 }

const bike: { brand: string, year: number } = { brand: "shine", year: 1213 }


// object with  array 

const book = { title: 'book', cost: 29 }
const pen = { title: 'pen', cost: 2 }
const pad = { title: 'pad', cost: 34 }

const total: { title: string, cost: number }[] = [book, pen, pad]


//  object with array if there is no key pairs values

const book1 = { title: 'book', cost: 29 }
const pen1 = { title: 'pen' }
const pad1 = { cost: 34 }
const total1: { title?: string, cost?: number }[] = [book1, pen1, pad1]

console.log(total)
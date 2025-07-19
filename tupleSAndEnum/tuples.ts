let person: [string, number] = ['sree', 12]

let date: [number, number, number] = [21, 3, 1212]
date.push(15)
console.log(date)

function getData(): [string, number] {
    return ['sree', 1]
}

let randomPerson = getData()
console.log(randomPerson[0])
console.log(randomPerson[1])
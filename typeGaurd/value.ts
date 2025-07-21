type ValueType = string | number | boolean

let value: ValueType
const random = Math.random()
value = random < 0.33 ? 'hello' : random < 0.66 ? 1234.4 : true

function CheckValue(value: ValueType): void {
    if (typeof value === 'string') {
        console.log(value.toLocaleLowerCase())
        return
    }
    if (typeof value === 'number') {
        console.log(value.toFixed(2))
        return
    }
    console.log(`boolean:${value}`)
}

CheckValue(value)
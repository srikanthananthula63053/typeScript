enum Color {
    red,
    blue,
    green
}

function getColor(color: Color): string {
    switch (color) {
        case Color.red:
            return 'red'
        case Color.blue:
            return 'blue'
        case Color.green:
            return 'green'
        default:
            const _exhaustiveCheck: never = color; // ✅ assign the input to never
            throw new Error(`Unexpected color: ${_exhaustiveCheck}`);
    }
}

console.log(getColor(Color.red)); // Output: red
console.log(getColor(Color.blue))
console.log(getColor(Color.green))
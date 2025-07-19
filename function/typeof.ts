
function processInput(input: string | number) {
    if (typeof input === "number") {
        console.log(input + 30)
    } else {
        console.log(input)
    }
}
processInput(10)
processInput("srikanth")
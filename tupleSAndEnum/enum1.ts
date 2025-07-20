
//  adding values to the constants enum

enum ServerResponseStauts1 {
    sucess = 100,
    Error = 200,
    pending = 'helo'
}
interface ServerResponse1 {
    result1: ServerResponseStauts1,
    data: string[]
}

function getResponse(): ServerResponse1 {
    return {
        result1: ServerResponseStauts1.pending,
        data: ['hi', 'hello']
    }
}
const result1: ServerResponse1 = getResponse()
console.log(result1)
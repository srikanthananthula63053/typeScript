
enum ServerResponseStatus {
    sucess,
    Error
}
console.log(ServerResponseStatus)

interface ServerResponse {
    result: ServerResponseStatus,
    data: string[]
}

function getServerResponse(): ServerResponse {
    return {
        result: ServerResponseStatus.sucess,
        data: ['first item', 'second item']
    }
}

const response:ServerResponse=getServerResponse()
console.log(response)
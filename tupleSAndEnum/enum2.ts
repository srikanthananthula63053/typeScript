
// iterating each constant value in enum

enum ServerResponseStatus2 {
    sucess = "200",
    Error = "error",
    pending = 'pending'
}

Object.values(ServerResponseStatus2).forEach(value => {
    console.log(value)
});

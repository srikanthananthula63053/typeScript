function multipleGeneric<T, U>(arg4: T, arg5: U): [T, U] {
    return [arg4, arg5]; 
}

const result=multipleGeneric<string,number>('hello',1)
console.log(result)


// const result1=multipleGeneric<string,number>(1,"h")
// console.log(result1)
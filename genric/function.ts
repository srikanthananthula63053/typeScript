
function genericMethod<T>(arg: T): T {
    return arg;
}
console.log(genericMethod<string>('hello'))
console.log(genericMethod<number>(1))
console.log(genericMethod<boolean>(true))


// with array

function genericMethod1<t>(arg: t[]): t[] {
    return arg
}
console.log(genericMethod1<string>(['hello']))
console.log(genericMethod1<number>([1]))
console.log(genericMethod1<boolean>([true]))
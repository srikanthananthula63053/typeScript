
interface genericMethod<T> {
    value: T,
    getValue: () => T
}

const createMethod: genericMethod<string> = {
value:"hey",
getValue() {
    return this.value
},
}
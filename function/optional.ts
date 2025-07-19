
function calculation(price: number, discount: number) {
    return price + discount
}
calculation(10, 23)


// optional

function calculation1(price: number, discount?: number) {
    return price + (discount || 0)
}
calculation1(10)

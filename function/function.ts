
// string 

function sayHi(name:string){
    return name
}

sayHi("see")
//sayHi(1)
console.log(sayHi("sj"))

// number 

function calculateDiscount(discount:number){
    return discount * 0.9
}

const total = calculateDiscount(312)
console.log(total)

// total function used only one datatype

function Discount(discount:number):number{
    let hasDiscount=true;
    // if(hasDiscount){
    //     return true
    // }
    return discount * 0.9
}

const total1 = Discount(312)


// correct 

function Discount1(discount:number):number{
    let hasDiscount=true;
    if(hasDiscount){
        return discount
    }
    return discount * 0.9
}

const total2 = Discount1(312)

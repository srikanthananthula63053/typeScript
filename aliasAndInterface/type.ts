
type User = { id: number, name: string, isactive: boolean }

const student: User = {
    id: 1,
    name: "srikanth",
    isactive: true
}

const college: User = {
    id: 2,
    name: "shiva",
    isactive: true
}

function createUser(user: User) {
    console.log(user)
}

createUser(student)



// 

type StringInto = number | string

let user: StringInto = 10
user = 30
user = "sri"


// fixed two strings

type Theme = 'dark' | 'light'
let theme: Theme;
theme = 'dark'
theme = 'light'

function colour(t: Theme) {
    console.log(t)
}
colour(theme)


// type advance

type manager = { id: number, name: string, employees: employee[] }
type employee = { id: number, name: string, department: string }

type Staff = manager | employee;

let srikanth: employee = { id: 1, name: "srikanth", department: "soft" }
let shiva: employee = { id: 2, name: "shiva", department: "test" }
let kiran: manager = { id: 1, name: "kiran", employees: [shiva, srikanth] }



function Checking(staff: Staff) {
    if ('employees' in staff) {
        console.log(`yes, employee list is present`)  // manager type
    } else {
        console.log('notPresent')  // employee type
    }
}

Checking(kiran)
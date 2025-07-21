

enum UserRole {
    Admin,
    manager,
    employee
}
interface User {
    id: number,
    name: string,
    role: UserRole,
    contact: [string, string]
}

function CreateUser(user: User): User {
    return user
}
const resultUser: User = CreateUser({
    id: 123,
    name: "srikanth",
    role: UserRole.Admin,
    contact: ["sree@233", "1232132"]

})

console.log(resultUser)
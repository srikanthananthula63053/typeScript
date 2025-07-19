let names: string[] = ['john', 'jane', 'sreekanth'];

function isChecked(name: string): boolean {
    return names.includes(name);
}

let checked = "sreekanth";

if (isChecked(checked)) {
    console.log(`${checked} is in list`);
} else {
    console.log(`${checked} is not in list`);
}



//  return names.includes(name);

// for (let i = 0; i < names.length; i++) {
//     if (names[i] === name) {
//         return true
//     }
// }
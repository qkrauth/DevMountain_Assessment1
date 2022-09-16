// let a = "12" --> string
// let b = 12 --> number(not integer in JS)

let array = [1, 2, 3, 4, 5]
// array.slice() --> slice does change the array
// array.splice() --> splice does change the array

let alphabet_lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let alphabet_uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let num_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let includes_lower = false;
let includes_upper = false;

let password = "Karasuno19"

for (let i = 0; i < password.length; i++) {
    let each_letter = password[i];
    if (alphabet_lowercase.includes(each_letter)) {
        includes_lower = true
    }
}

if (!(includes_lower && includes_upper) === false) {
    console.log("wrong password");
    } else {
     console.log("you did it");
}
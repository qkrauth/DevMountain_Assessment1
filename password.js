let password = "Karasuno19!"

// asks if the password contains a letter
if (password.includes("a"||"b"||"c"||"d"||"e"||"f"||"g"||"h"||"i"||"j"||"k"||"l"||"m"||"n"||"o"||"p"||"q"||"r"||"s"||"t"||"u"||"v"||"w"||"x"||"y"||"z")) {
    console.log("true")
} else {
    console.log("false")
}

// asks if the password contains a number
if (password.includes("1"||"2"||"3"||"4"||"5"||"6"||"7"||"8"||"9"||"0")) {
    console.log("true")
} else {
    console.log("false")
}

// asks if the password contains a special character
if (password.includes("!"||"@"||"#"||"$"||"%"||"^"||"&"||"*"||";"||":"||"."||","||"/")) {
    console.log("true")
} else {
    console.log("false")
}

// makes sure password is not one of the following forbidden words
if (password === "password") {
    console.log("try again");
} else if (password === "letmein") {
    console.log("try again");
} else {
    console.log("password accepted");
}

// this is not perfect but its what I came up with


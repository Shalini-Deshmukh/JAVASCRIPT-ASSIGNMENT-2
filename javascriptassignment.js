
// 1 program to ask the user for their age(if-else)


let age = Number(prompt("Enter your age:"));
if (age > 18) {
    alert("You are an adult");
}

else {
    alert("you are a minor")
}

//2 program to ask the user for their username and password(if-else)

let username = prompt("enter username:");
let password = prompt("enter password");
if (username == "shalini" && password == "sha123") {
    alert("Login succesful")
}
else {
    alert("Login failed")
}

//3 program to generates a random number between 1 to 100(if-else)

let number = Math.floor(Math.random() * 101);
alert(number)
if (number % 2 == 0) {
    alert("the number is even");
}
else {
    alert("the number is odd");
}

// 4 program to ask the user for their favorite color(if-else)

let color = (prompt("enter your fovorite color:"));
if (color == "red") {
    alert(" Red is a beautiful color")
}
else {
    alert("I like your choice of color ")
}

// 5 program that ask the user for their grade in school(if-elseif)
let marks = prompt("enter your marks ")
if (marks >= 60) {
    alert("E grade")
}
else if (marks >= 70) {
    alert("D grade")
}
else if (marks >= 80) {
    alert("C grade")
}
else if (marks >= 90) {
    alert("B grade")
}
else if (marks >= 100) {
    alert("A grade")
}
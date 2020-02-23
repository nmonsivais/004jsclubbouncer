var age = Number(prompt("Enter your age."));

if (age < 0) {
    console.log("Come back after your birth")
}

if (age === 21) {
    console.log("Happy 21st Birhtday!  Have a Drink on us.")

}

if (age < 18) {
    console.log("Sorry, you are not old enough to enter.");

}

else if (age < 21) {
    console.log("You can enter the club, but you cannot drink.");

}

else {age <=21
    console.log("You can enter the club and you can drink.");

}

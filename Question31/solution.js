



let users = [
]


if (users.length == 0) {
    return console.log("We need to find some users.")
}
else {

    users.forEach((user) => {
        if (user === "admin") {
            return console.log("Good to have you back admin, Would you like to see a status report?")
        }
        return console.log(`Hello ${user}, thank you for the login.`)
    })
}
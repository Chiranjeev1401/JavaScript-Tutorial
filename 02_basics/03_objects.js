// singleton

// object literals

//Object.create 

const mySym = Symbol("key1")
console.log(mySym)
const jsUser = {name : "Chiranjeev",
    "full name" : "Chiranjeev Sharma",
    [mySym]: "KEY1",
    age:18,
    location: "Gurugram",
    email: "me@gmail.com"
}

console.log(`my name is ${jsUser.name}`)
console.log(jsUser["age"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])

jsUser.email = "Chiranjeev@chatgpt.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello Js User")
}

jsUser.greetingTwo= function(){
    console.log(`Hello Js User, ${this.age}`)
}

console.log(jsUser.greeting());

console.log(jsUser.greetingTwo());
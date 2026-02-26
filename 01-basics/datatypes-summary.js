//// Stack(Primitive), Heap(Non-Primitive)

let myname = "Chiranjeev"

let anothername = myname
anothername = "Rajeev"

console.log(anothername)
console.log(myname)

let user1 = {
    email : "some@google.com",
    upi : "ybl@okaxis"
}

let user2 = user1

user2.email = "some@yahoo.com"

console.log(user1.email)
console.log(user2.email)
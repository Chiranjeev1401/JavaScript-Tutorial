// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false
console.log(tinderUser)


const regularUser = {
    email :"some@gmail.com",
    fullname : {
        userfullname: {
            firstname : "chiranjeev",
            lastname : "Sharma"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "A",2 : "B"}
const obj2 = {3:"c",4:"d"}
const obj4 = {5:"c",6:"d"}

//const obj3  = {obj1, obj2}

const obj3 = Object.assign({},obj1,obj2,obj4)

console.log(obj3)

const obj5 = {...obj1,...obj2}

console.log(obj5)


const users = [
    {id:1,
        name:"Chiranjeev"
    },
    {id:2,
        name:"test"
    },
    {id:3,
        name:"honey"
    }
]

console.log(Object.keys(tinderUser))
console.log(Object.values(users))

console.log(tinderUser.hasOwnProperty("fgfg"))


const course = {
    courseName : "Java",
    price : "999",
    courseInstructor : "Chiranjeev"
}
// destrucutring of objects
const {price: p} = course
console.log(p);


// {
//     "name": "Chiranjeev",
//     "coursenme" : "Java",
//     "price":"free"
// }
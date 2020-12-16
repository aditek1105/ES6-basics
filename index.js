let name1 = "Aditya";
console.log(name1)
let Person = {
    name: 'Aditya Tekur',
    age: 23
};
console.log(Person.name);
console.log(Person.age);
function greet() {
    console.log("This is a function");
}
greet()
function calling(name) {
    console.log("This is the name passed "+name)
}
calling("Tekur");
function playing(name,lastName) {
    console.log(name+" "+lastName);
}
playing("Aditya")

function squareCalc(number) {
    return number*number;
}
console.log(squareCalc(6));

// methods within a object
const person1 = {
name: "Aditek",
squared(num) {
   return ("The squared result is "+num*num);
},
tripled(num2) {
return ("The cube result is "+num2*num2);
}
};

console.log(person1.squared(2)+ " and "+person1.tripled(3))
person1.name = "Puneet"
console.log(person1)

// this keyword returns a reference to the current object.


// trying to perform function binding in javascript.
const people = {
    name: "tEKUR",
    walk() {
        console.log(this)
    }
};

let temp = people.walk(people)
console.log(temp); // the result is undefined due to strict binding mode enabled. 

//to break this, we use the concept of bind()
let temp1 = people.walk.bind(people);
temp1() // this gives the result as temp1 is a method. 

// to use bind() to borrow methods from a different object
const flying = {
    name: "flyer",
    flyer(mph) {
        console.log(this.name + " is flying at " + mph + " mph")
    }
};
const running = {
    name: "runner",
    run(mph) {
        console.log(this.name + " is running at "+ mph +" mph");
    }
}

let borrow = running.run.bind(flying,20);
borrow()

// arrow function in javascript
 const summing = (a,b) => {
     return a+b;
 }
 console.log(summing(2,4));
//other way of using the arrow function
 const multi = (a,b) => a*b;
 console.log(multi(3,3));

 const squaring = number => number*number;
 console.log(squaring(2));

 const jobs = [{id: 1, isActive: true},{id: 2, isActive: true},{id: 3, isActive: false}];
 const activeJobs = jobs.filter(jobs => jobs.isActive); // returns only those objects whose isActive state is set to true. 
 console.log(activeJobs);

 //setTimeout function will return a window object in the console. 
 const p = {
     test() {
         setTimeout(function() {
            console.log('this',this);
         },1000)
     }
 }
 p.test()

 // to get the reference to the person object we use arrow function as they dont rebind the this keyword
 const p1 = {
     run() {
     setTimeout(() => {
         console.log("this",this);
     }, 1000);
 }
}
p1.run()

//Array.map is used to render list of items and is frequently used in react. 
const colors = ['red','green','blue'];
let items = colors.map(function(color) {
    return '<p>'+color+'</p>'
})
console.log(items.filter(colors => colors))

//items can further be shortened and can use arrow function
items = colors.map(color => '<p>'+color+'</p>');
console.log(items);

//object destructuring
const address = {
    street: '',
    state: '',
    country: ''
}

//1)
// const street = address.street;
// const state = address.state;
// const country = address.country;

// The above code is some form of repetition of the address object, in order to remove that we use object destructuring

const {street, state, country} = address
// with this line of code, it is no more necessary to do 1)
// incase you need an alias name that needs to be used, one can do
const {street:st, state: sta, country:c} = address
// you can use st, sta and c now as they are equivalent to const st = address.street; const sta = address.state and so on... 

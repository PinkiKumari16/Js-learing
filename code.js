// let Name = "pinki";
// document.write(Name)
// console.log(Name)


// **************                  Basic Javascript                *************** 
// const product = {
//     title : "pen",
//     rating : 4,
//     offer : 5,
//     price : 270
// }
// console.log(product)
// document.write(product['title'])

// alert("hello we can't access")  // one time popup.
// let userName = prompt("hello!")  //this is popup and take the input as well.
// document.write(userName);
// console.log(userName)


// let number = prompt("enter a number");
// if(number % 5 ===0){
//     console.log("It's a multiple of 5");
    
// }else{
//     console.log("It's not multiple of 5");
// }
// console.log(typeof(number))

// let specialStr = `This is a template literal ${2*3}`;
// console.log(specialStr);
// console.log(typeof(specialStr));

// console.log("pinki\nkumari");

// let str1 = "pinki";
// let str2 = "kumari";
// let str3 = str1.concat(str2);
// console.log("joint string :",str3)

//  Q
// let user_name = prompt("Enter Your Full Name");
// let username ="@" + user_name + user_name.length;
// console.log("your created a user name: ",username)


// let fruits = ["Apple","Banan","Lichi","Papaya","Grapes"];

// console.log("This is a  while loop");
// let i = 0;
// while(i<fruits.length){
//     console.log(fruits[i]);
//     // document.write(fruits[i]," ");
//     i++;
// }
// console.log("This is a for loop ");
// for(let j=0;j<fruits.length;j++){
//     console.log(fruits[j].toUpperCase());
//     console.log(fruits.indexOf(fruits[j]))
// }

// for(let fruit of fruits){
//     console.log(fruit)
// }

// let Iteams = [1,2,3,4,5];
// console.log(Iteams);
// let newIteams = Iteams.toString()
// console.log(newIteams);


// let nums = [1,2,3,4,5,6,7];
// nums.splice(1,1,9,34)
// console.log(nums)

// let array = ['B','M','U','G','I','N'];

// array.shift()
// console.log(array)

// array.splice(2,1,'Ola');
// console.log(array)

// array.push('Amazon');
// console.log(array);

//   *******************  Arrow Functions   ****************
//  syntex 
//  const functionName = (param1,param2....) => {
    // do some work
// }

// // basic functions
// function sum(a,b){
//     return a+b;
// }
// //  sum functions in the arrow form
// const arrosum = (a,b) =>{
//     console.log(a+b);
// }
// arrosum(3,5)
// function mul(a,b){
//     return a*b ;
// }
// const mul1 = (a,b) => {
    // console.log(a*b);
//     return a*b;
// }

// let vowelCount = (str1) =>{
//     let countVowel = 0 ;
//     for(let i=0; i<str1.length; i++){
//         let char1 = str1[i].toUpperCase();
//         if (char1 === "A" || char1 === "E" || char1 === "I"|| char1 === "O"|| char1 === "U"){
//             document.write(char1)
//             countVowel++;
//         }
//     }
//     return countVowel;
// }
// console.log(vowelCount("Anita Pinki Ringki Kiran"))

// let vowelCount = (str1) =>{
//     let countVowel = 0 ;
//     for(let char of str1){
//         let char1 = char.toUpperCase();
//         if (char1 === "A" || char1 === "E" || char1 === "I"|| char1 === "O"|| char1 === "U"){
//             console.log(char1)
//             countVowel++;
//         }
//     }
//     return countVowel;
// }
// console.log(vowelCount("Anita Pinki Ringki Kiran"))


// let sumOfArray = (arr) =>{
//     let sumOfArr = 0;
//     for(let ind of arr){
//         sumOfArr+=ind;
//     }
//     return sumOfArr;
// }
// document.write(sumOfArray([1,2,3,8]))

// let createFibo = (num) =>{
//     let fibo = [];
//     if(num === 0){
//     }else if(num === 1){
//         fibo.push(0);
//     }else if(num === 2){
//         fibo.push(0,1);
//     }else{
//         fibo.push(0,1);
//         let a = 0;
//         let b = 1;
//         let c = a+b;
//         while (num>2){
//             fibo.push(c);
//             num--;
//             a=b;
//             b=c;
//             c=a+b;
//         }
//         return fibo;
//     }
// }
// document.write(createFibo(7))



//   forEach   function    ******  CallbackFuncition : Here, it is a function to execute for each element in the array.
//  A callback is a function passsed as an argument to another fucntion.
// syntex:  array.forEach(element => {
    // console.log(element)
// });

// let arr = [1,2,3,4,5];
// arr.forEach(function printValue (val){
//     document.write("elements : ",val,'\n');
// })

// let arr = [1,2,3,4,5];
// arr.forEach(function checkPrimeNumber (val){
//     let c = 0;
//     let i = 2;
//     while(i<=(val/2)){
//         if (val%i===0){
//             c++;
//         }
//         i++;
//     }
//     if (c === 0 && val !== 1){
//         console.log("This is a prime Number: ",val)
//     }
// })

// let arr = ['Pinki','Rinki',"Kiran",'Anita'];
// arr.forEach((val) => {
//     console.log(val.toLocaleUpperCase());
// })

// ********  Higher Order Function: HOF or HOM in javascript in that function either take in another function as a parametr inside or retunrt function as there output.

// let arr = ['Pinki','Rinki',"Kiran",'Anita'];
// (val,inx,arr) := first val is access the element of list, second inx access the index of element, third will be access the full array.
// arr.forEach((val,inx,arr) => {   
//     console.log(val,list);
// })


// let nums = [2,3,4];
// let calSquare = (num) => {
//     console.log(num*num);
// }
// nums.forEach(calSquare);

//  ************  map methon of Array: creates a new array eith results of some operation. There value its callback returns are used to form new array.
// syntax  arr.map(callbackFnx (value, index, array))
//  let newArr = arr.map((val) => {
//     return val*2;
// })


// let nums = [2,3,4];
// let calSquare = (num) => {
//     console.log(num*num);
// }
// nums.map(calSquare);

// nums.map((val) => {
//     console.log(val)
// })

// let nums = [2,3,4];
// let newArr = nums.map((val) => {
//     return val**2;
// })
// console.log(newArr)

//  *******************  Filter Functions   ******************
// let arr = [1,5,12,6,7,4,3,2,5,2];
// let newarr = arr.filter((num) => {
//     return num %2 === 0;
// })
// document.write(newarr);

// let marks = [34,817,56,90,91,43];
// let filMarks = marks.filter((ele) =>{
//     return ele>=90;
// })
// console.log(filMarks)


// let userNum = prompt("enter the number: ");
// let arr = [];
// for(let i=1; i<=userNum; i++){
//     arr.push(i);
// }
// let sumArr = arr.reduce((pre, curr) => {
//     return pre+curr;
// })
// let proArr = arr.reduce((pre, curr) => {
//     return pre*curr;
// })
// console.log(`The Sum of Array: ${sumArr} and Product of Array: ${proArr}`);


//  ************* Reduce Method : Performs some operations & reduces the array to a single value. it returns that single value.  *******************
// let arr = [2,3,4];
// let outputSum = arr.reduce((res, val) => {
//     return res * val;
// })
// console.log(outputSum)

// ***** find the maximum value in the array with using reduce method.
// let arr = [2,3,14,1];
// let maxValue = arr.reduce((res, val) => {
//     return res>val? res:val;
// })
// console.log(maxValue)

// **********************    DOM   ********************
// let h2 = document.querySelector("h2");
// document.write(h2.innerText);
// h2.innerText = h2.innerText + " From Apna College!";
// document.write(h2.innerText);

// let divs = document.querySelectorAll(".box");
// document.write(divs[1].innerText)

// for(let i=0; i<divs.length; i++){
//     divs[i].innerText = `New Div ${i}`;
// }


// let div = document.querySelector('div');
// document.write(div);
// let id = div.getAttribute("id");
// document.write(id);
// let name = div.getAttribute('name');
// document.write(name);
// div.setAttribute('name', 'myDiv');

// let div = document.querySelector("div");
// div.style.backgroundColor = 'blue';


// let newBtn = document.createElement('button');
// newBtn.innerText = "Click Me!";

// let div = document.querySelector('div');
// div.append(newBtn)  // add the element end of the contenet.
// div.prepend(newBtn)  // add the element at start of the content
// div.before(newBtn)   // add the element at before the element
// div.after(newBtn)   // add the element at after the element.

// let newHeading = document.createElement('h1');
// newHeading.innerHTML = '<i>I am Pinki Kumari!</i>';

// let para = document.querySelector('p');
// para.after(newHeading);
// para.before(newHeading);
// para.append(newHeading);
// para.prepend(newHeading);
// document.querySelector('body').prepend(newHeading);


// let newBtn = document.createElement('button');
// newBtn.innerText = "Click me";
// newBtn.style.backgroundColor = 'red';
// newBtn.style.color = 'white';
// document.querySelector('body').prepend(newBtn);

// let para = document.querySelector('p');
// let clasList_att = para.classList;
// clasList_att.add('newClass');
// clasList_att.remove('para')


// ************************   Events Heandling in JS    ***********************
//  syntax : node.event = ()=>{
//     do work
// }
// let btn1 = document.querySelector('#btn1');
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
// }

// let div = document.querySelector('div');
// div.onmouseover = ()=>{
//     console.log('mouse inside the div now!')
// }

// let btn1 = document.querySelector('#btn1');
// btn1.onclick = (eventObject) => {
//     console.log(eventObject.type)
//     console.log(eventObject.target)
// }

// let div = document.querySelector('div');
// div.onmouseover = (evt)=>{
//     console.log('mouse inside the div now!')
//     console.log(evt.type,evt.target)
// }

// //  ***********  Event Listener  ****************
// let btn1 = document.querySelector('#btn1');
// const heanler = ()=>{
//     console.log("btn1 was clicked ")
// }
// btn1.addEventListener("click",heanler);

// btn1.addEventListener('click',()=>{
//     console.log('button was clicked second time..')
// })

// btn1.removeEventListener('click',heanler)

// let changeMode = document.querySelector('button');
// let curMode = "white";

// changeMode.addEventListener('click', ()=>{
//     let screen = document.querySelector('body');
//     if(curMode === 'white'){
//         curMode = 'black';
//     }
//     else{
//         curMode = 'white';
//     }
//     screen.style.backgroundColor = curMode;
// })


// let changeMode = document.querySelector('button');
// let curMode = "white";

// changeMode.addEventListener('click', ()=>{
//     let screen = document.querySelector('body');
//     if(curMode === 'white'){
//         screen.setAttribute('class','dark')
//         curMode = 'black'
//     }
//     else{
//         screen.setAttribute('class','light')
//         curMode = 'white'
//     }

// })


// *******************************  Object, Class  **********************
//  A javascrip object is an entity having state and behavior (properties and methods).
//  JS object have a special property called prototype.
//  we can set prototype using:  __proto__


// const student = {
//     fullname : 'pinki Kumari',
//     marks : 89.2,
//     printMarks : function () {
//         console.log("marks: ",student.marks);
//     }
// };
// console.log(student.printMarks())

// let arr = ['apple','banana','lichi'];
// console.log(arr);

// const employee = {
//     calcTax(){
//         console.log("tax rate is 10% ");
//     },
// };

// const pinki ={
//     salary: 30000,
// };
// pinki.__proto__ = employee;
// console.log(pinki.calcTax());

//  Classess in JS : class is a program-code template for creating objects.
//  Those objects will have some state(variable) & some behavior(function) inside it.
//  Syntex: class MyClass{
//     constuctor(){...}
//     myMethod(){...}
// }
// let myObj = new MyClass();

// class ToyotaCar {
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brand = brand;
//     }
// }
// // console.log(ToyotaCar)
// let fortuner = new ToyotaCar();
// console.log(fortuner.start());
// console.log(fortuner.stop());
// fortuner.setBrand('Fortuner');
// console.log(fortuner);


// class ToyotaCar{
//     constructor(brand, mileage){
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }

// let fortuner = new ToyotaCar('Fortuner', 10);
// console.log(fortuner);
// let lexus = new ToyotaCar('Lexus', 12);
// console.log(lexus);

//  ******* Inheritance in JS : Inheritance is passing down properties & methods from parent class to child class. with using "Extends" keyword
//  IMP: If child & Parent hace same method, child's method will be used[method overriding]
// syntax: class parent{},      class child extends Parent{}

// class Parent{
//     hello(){
//         console.log('hello..')
//     }
// }
// class Child extends Parent{}
// let newObj = new Child();
// console.log(newObj.hello());

// class person{
//     constructor(){
//         this.species = 'homo sapiens';
//     }
//     eat(){
//         console.log('eat');
//     }
//     sleep(){
//         console.log('sleep');
//     }
//     work(){
//         console.log('do nothing');
//     }
// }

// class Engineer extends person{
//     work(){
//         console.log("problem solveing")
//     }
// }

// let pinki = new Engineer();
// console.log(pinki)
// console.log(pinki.work(),pinki.eat(),pinki.sleep())


// let p1 = new person();
// console.log(p1);
// let e1 = new Engineer();
// console.log(e1);

//  ****************   Super Keyword: The super keyword is used to call the construtor of its parent class to access the parent's properties and methods
//   syntax:  super(args) //calls parent's constructor
//   super.parentMethod(args)

// class person{
//     constructor(name){
//         this.Name = name;
//         this.species = 'homo sapiens';
//     }
//     eat(){
//         console.log('eating..');
//     }
// }

// class Engineer extends person{
//     constructor(name){
//         super(name); // to invoke the parent class constructor
//     }
//     work(){
//         super.eat();
//         console.log('do coding and problem solving..')
//     }
// }

// let engObj = new Engineer("Software engineer");
// console.log(engObj)

// let engPer = new Engineer("Pinki Kumari");
// console.log(engPer.work());



//  let data = "I am the Admin";
// class User{
//     constructor(name, email){
//         this.Name = name;
//         this.Email = email;
//     }
//     viewData(){
//         console.log("Data: ",data);
//     }
// }

// class Admin extends User{
//     constructor(name, email){
//         super(name,email)
//     }
//     editData(){
//         console.log('You can edit data')
//         data = 'some new data';
//     }
// }

// let stu1 = new User('pinki','pinkikmr2672002@gmail.com');
// let stu2 = new User('Rinki','pinki19@nav.org');
// // console.log(stu1.viewData(),stu2)

// let tech1 = new User('Anita','anita@gmail.com');
// console.log(tech1)

// let admin1 = new Admin('Kiran','kiran23@gmail.com');
// console.log(admin1)
// admin1.editData()
// console.log(data)


//  Q.1  Create a class named Person with a constructor that takes name and age as parameters.
// class Person{
//     constructor(name,age){
//         this.Name = name;
//         this.Age = age;
//     }
//     getDetails(){
//         return `Name: ${this.Name} and Age: ${this.Age}`;
//     }
//     static getVoteAge(){
//         return 18;
//     }
    
// }

// let per1 = new Person('Alice',25);
// console.log(per1.getDetails())

// class student extends Person{
//     constructor(name,age,grade){
//         super(name,age);
//         this.grade = grade;
//     }
    // getDetails(){
    //     return `${super.getDetails()} and grade is ${this.grade}`
    // }
// }
// let stu1 = new student('Pinki',17,'A+');
// console.log(stu1.getDetails());
// console.log(stu1);
// const canVote = stu1.Age <= Person.getVoteAge(); // check the vote age 18 is less then or equal to with stu.age and returnts true or false.
// console.log(canVote)


// class Employee{
//     #salary;

//     constructor(salary){
//         this.#salary = salary;
//     }
//     getSalary(){
//         return this.#salary;
//     }
// }

// class Manager extends Employee{
//     constructor(salary,department){
//         super(salary);
//         this.department = department;
//     }
//     getSalary(){
//         return `${super.getSalary()},Department ${this.department}`;
//     }
// }

// let emp1 = new Employee(25000);
// console.log(emp1)

// let emp2 = new Manager(26000,'Marketing');
// console.log(emp2)
// console.log(emp2.getSalary())


// class Shape{
//     static getArea(){
//         throw new Error('Abstrack method');
//         // console.log('hello')
//     }
// }

// class circle extends Shape{
//     constructor(redius){
//         super(redius);
//         this.redius = redius;
//     }

//     getArea(){
//         return Math.PI * this.redius ** 2;
//     }
// }
// // let obj = new Sape();
// // console.log(obj);

// let obj1 = new circle(2);
// console.log(obj1)


// Callback Hell: Nested callback stacked below one another forming a pyramid structure. (pyramid of doom)
//  this style of programming becomes difficult to understand & mange.
// function getData(dataId){
//     setTimeout(()=>{
//         console.log('data ',dataId)
//     },2000);

// }
// getData(34)
// getData(1)  // 2s
// getData(2)  // 2s
// getData(3)  //2s

// function getData(dataId, getNextData){
//     setTimeout(()=>{
//         console.log('data ',dataId)
//         if (getNextData){
//             getNextData();
//         }
//     },2000);

// }
// // this is nested callback hell...
// getData(1,()=>{
//     console.log('getting data 2 .....');
//     getData(2,()=>{
//         console.log('getting data 3 .....');
//         getData(3,()=>{
//             console.log('getting data 4 .....');
//             getData(4);
//         });
//     });
// });


//  Promises: Promise is for "eventual" completion of task. It is an object in JS. it is a solution to callback hell.
// syntax:  let promise = new Promise((resolve,reject) => {....})   // Function with 2 hendlers
// let promise = new Promise((resolve, reject) => {
//     console.log('I am a promise....');
// })
// console.log(promise);
// let promise = new Promise((resolve, reject) => {
//     console.log('I am a promise....');
//     resolve('success')
// })
// console.log(promise);
// let promise = new Promise((resolve, reject) => {
//     console.log('I am a promise....');
//     reject('some error')
// })
// console.log(promise);

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data ',dataId);
//             resolve('success..')
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// };
// let finalValue = getData(123);
// console.log(finalValue)


// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log('data ',dataId);
//             reject('error');
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// };
// let finalValue = getData(123);
// console.log(finalValue)

//  How to handle promise in the javascrip: 
//  .then() & .catch()    <  Promise.then((res) => {...})      < promise.catch((err) => {...})
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log('I am a promise.')
//         resolve('success.');
//         // reject('error');
//     })
// }

// let promise1 = getPromise();
// promise1.then((res) => {
//     console.log('promise fulfilled.',res)
// })
// promise1.catch((err) => {
//     console.log('rejected.',err);
// })


// function asyncFunc1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data1');
//             resolve('success');
//         },3000);
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data2');
//             resolve('success');
//         },3000);
//     });
// }
// console.log('fetching data 1 .....');
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log('fetching data 2 ....');
//     let p2 = asyncFunc2();
//     p2.then(() => {})
// })

// console.log('fetching data 1 ....');
// asyncFunc1().then(()=>{
//     console.log('fetching data 2 ...');
//     asyncFunc2().then(()=>{})
// });



// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data ',dataId);
//             resolve('success');
//         },3000);
//     });
// };
//  solve the callback with using promise.
// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res)
//     })
// });

// getData(1)
//   .then(()=>{
//     return getData(2);
//   })
//   .then(()=>{
//    return getData(3) ;
//   }).then((res)=>{
//     console.log(res);
// });



// // Async-Await:  async function always returns a promise.
// // async function myFunc(){...}
// //await pauses the execution of its surrounding async function until the promise is settled.
// function hello(){
//     console.log('hello');
// }
// hello();
// async function hello(){
//     console.log('hello')
// }
// console.log(hello())


// //*******************************    */ async-await
// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data ',dataId);
//             resolve('success');
//         },2000);
//     });
// };

// async function getDataAll(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
//     await getData(5);
//     await getData(5);
//     await getData(6);
//     await getData(7);
// }
// getDataAll();

// //  IIFE: Immediately Invoked Function Expression
// //  IIFE ia a function that is called immediately as soon as it is defined.
// (async function(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
// })();


//  *******************   Fetch API : The Fetch API provides an interface for fetching (sending & receiving) resources.
//  it uses Request and Response object.
//  The fetch() method is used to fetch a resource (data).
//  let promise = fetch(url,[option])
// let URL = 'https://cat-fact.herokuapp.com/facts';
// let promise = fetch(URL);
// console.log(promise);

// let URL = 'https://cat-fact.herokuapp.com/facts';
// const getFacts= async()=>{
//     console.log('getting data... ');
//     let response = await fetch(URL);
//     console.log(response,response.status);
//     let data = await response.json();
//     console.log(data[0].text);
// } 
// getFacts();

// let URL = 'https://cat-fact.herokuapp.com/facts';
// let para = document.querySelector('#para');
// let btn =  document.querySelector('#btn');

// const getFacts= async()=>{
//     console.log('getting data... ');
//     let response = await fetch(URL);
//     console.log(response,response.status);
//     let data = await response.json();
//     para.innerText = data[2].text;
// }

// btn.addEventListener('click',getFacts);


// let userInput = prompt("enter the numbers:");

// // *******************   Q.1    ***********
// for (let i = 1; i<=100; i++){
//     if(i%3 === 0 && i%5 === 0){
//         console.log("FizzBuzz")
//     }else if (i%3 === 0){
//         console.log("Fizz");
//     }else if (i%5 === 0){
//         console.log("Buzz");
//     }else{
//         console.log(i)
//     }
// } 

// // *******************   Q.2    ***********
// const palindromeCheck = (stringVar) => {
//     let i = 0 ;
//     let j = stringVar.length-1 ;
//     let flag = true;
//     while (i<j){
//         if(stringVar[i] === stringVar[j]){
//             i++;
//             j--;
//         }else{
//             flag = false;
//             break;
//         }
//     }
//     if(flag){
//         return "This is palindrom String."
//     }else{
//         return "This is NOT palindrom String."
//     }
// }

// console.log(palindromeCheck(prompt("enter the string: ")))


// // *******************   Q.3    ***********
// const palindromeCheck = (stringVar1,stringVar2) => {
//     let i = 0 ;
//     let flag = true;
//     while (i < stringVar1.length){
//         if(stringVar2.includes(stringVar1[i])){
//             stringVar2 = stringVar2.replace(stringVar1[i],"@");
//         }else{
//             flag = false;
//             break;
//         }
//         i++;
//     }
//     if(flag){
//         return "Anagrams String."
//     }else{
//         return "NOT Anagrams String."
//     }
// }

// console.log(palindromeCheck(prompt("enter the first string: "),prompt("enter the second string: ")))


// // *******************   Q.4    ***********
// const factorialFunc = (num) => {
//     let factorial = 1;
//     let copyNum = num ;
//     if (num === 0 || num === 1){
//         return factorial;
//     }else{
//         let i = 1;
//         while(i <= num/2){
//             factorial *= i;
//             factorial *= copyNum;
//             i++;
//             copyNum--;
//         }
//         if(num%2 !== 0){
//             factorial *= num/2+0.5 ;
//         }
//         return factorial;
//     }
// }

// console.log(factorialFunc(parseInt(prompt("Enter the Number: "))));

// ******************************
// let name = prompt("What is your name? ");
// console.log("Hello, " + name + "!");
// console.log("Hello pinki")


// let num = Math.floor(7/3)
// console.log(num);

// let num = input.question();
// console.log(num);


//   setInterval, and cleanInterval      ##################
// var divTrigger = document.getElementById('testDiv');
// var a = 0;
// var aminy = setInterval(trigger,1000);
// function trigger(){
//     a+=10;
//     if(a==100){
//         clearInterval(aminy);
//     }else{

//         divTrigger.style.marginLeft = a+'px';
//         divTrigger.style.borderRadius = a+'%';
//     }

    
    
// }






// const pro = ()=>{
//     let promise1 = new Promise((resolve,reject)=>{
//         let api = 'https://jsonplaceholder.typicode.com/posts';
//         let res = fetch(api);
//         console.log("*****************  ",res)
//         if(res.status === 200){
//             setTimeout(()=>{
//                 resolve(res);
//             })
//         }else{
//             reject('data not found!!');
//         }
        
        
//     })
//     return promise1;
// }

// let obj1 = pro();
// obj1.then((data)=>{
//     console.log(data)
// })




// let pro1 = new Promise((resolve, reject)=>{
//     let data ;
//     if(data){
//         resolve(data);
//     }else{
//         reject('Error');
//     }
// })
// console.log(pro1);
// pro1.then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.log(error);
// })



// let pro1 = new Promise((resolve, reject)=>{
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res)=>{
//         if(res.status===200){
//             console.log('success')
//             resolve(res);
//         }else{
//             reject('Error!!  data not found');
//         }
//     })
//     .catch((error)=>{
//         reject(error);
//     })
    
// })
// pro1.then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.log(error);
// })



// const myfun = (url1)=>{
//     return new Promise((resolve,reject)=>{
//         fetch(url1)
//         .then((res)=>{
//             if(res.ok){
//                 resolve(res);
//             }
//             else{
//                 reject('Error');
//             }
//         })
//         .catch((error)=>{
//             reject(error);
//         })
//     })
// }

// let myPro = myfun('https://jsonplaceholder.typicode.com/posts');
// myPro.then((res)=>console.log(res)).catch((err)=>console.log(err));



// const myfun = (arr) =>{
//     let promises = arr.map((url1)=>{
//         return new Promise((resolve, reject)=>{
//             fetch(url1)
//             .then((response)=>{
//                 if(response.status === 200){
//                     resolve(response)
//                 }else{
//                     reject('Error');
//                 }
//             })
//             .catch((err)=>{
//                 reject(err);
//             })
//         }) 
//     })
//     return Promise.all(promises);
// }

// const arr = ['https://jsonplaceholder.typicode.com/posts/1',
//             'https://jsonplaceholder.typicode.com/posts/2',
//             'https://jsonplaceholder.typicode.com/posts/3',
//             'https://jsonplaceholder.typicode.com/posts/4'
//         ];
// let pomise_list = myfun(arr);
// console.log(pomise_list);



// const getPromise = () =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('data find')
//             resolve('success')
//         },3000);
        
//     })
// }

// let pro = getPromise();
// console.log(pro);




// async function hello(){
//     setTimeout(()=>{
//         console.log('hello pinki');
//     },3000);
// }
// hello();


// function api(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('weather data',id);
//             resolve(200)
//         },3000);
//     })
// }

// async function getWeather(){
//     await api(1);
//     await api(2);
// }
// getWeather();



// async function getValue (){
//     return 'hello pinki';
// }
// getValue().then((res)=>console.log(res));



// let p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('resolved promise.');
//     },20000)
// });

// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('second promise resolved!!');
//     },4000)
// })

// async function data(){
//     console.log('hello javascript.')
//     let p1 = await p;
//     console.log('javascript .............  1');
//     console.log(p1);
    
//     let p3 = await p2;
//     console.log('javascript  ......................  2');
//     console.log(p3);

// }
// data();

// data().then((res)=>console.log(res));



// //// this is a way to handle error with using try & catch ;;;;;;
// let api ="https://api.github.com/users/pinkikumari16";
// async function getData(){
//     try{
//         let response = (await fetch(api));
//         let data = await response.json();
//         console.log(data);
//     }
//     catch(err){
//         console.log(err)
//     };
    
// }
// getData();


// //// this is a oldest way to handle error with using .catch
// let api ="https://api.github.com/users/pinkikumari16";
// async function getData(){
//     let response = (await fetch(api));
//     let data = await response.json();
//     console.log(data);
// }
// getData().catch(err => console.log(err));



// //// ******  Modules     **********
// import { message, add } from "./module.js";
// console.log(message);
// document.body.innerHTML = `<h1> ${add(4,8)}</h1>`;


// import hello from "./module.js";
// hello();


// async function test(){
//     console.log('B')
//     console.log('C')
//     await console.log('D')
//     console.log('E')
// }
// console.log('A')
// test()
// console.log('F')
// console.log('G')



// async function test(){
//     console.log('B')
//     console.log('C')
//     let data = await fetch('data.json');
//     let res = await data.json();
//     console.log(res)
//     console.log('E')
// }
// console.log('A')
// test()
// console.log('F')
// console.log('G')


// async function test(){
//     let data = await fetch('data.json');
//     let res = await data.json();
//     return res

// }
// test().then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// })


// async function test(){
//     try{
//         return (await fetch('data.json')).json();
//     }catch(err){
//         console.log(err);
//     }

// }
// test().then((respo)=>{
//     console.log(respo);
// })



// const myfun = (arr) =>{
//     let promises = arr.map((url1)=>{
//         return new Promise((resolve, reject)=>{
//             fetch(url1)
//             .then((response)=>{
//                 if(response.status === 200){
//                     resolve(response)
//                 }else{
//                     reject('Error');
//                 }
//             })
//             .catch((err)=>{
//                 reject(err);
//             })
//         })
        
//     })
//     return promises;
// }

// const arr = ['https://jsonplaceholder.typicode.com/posts/1',
//             'https://jsonplaceholder.typicode.com/posts/2',
//             'https://jsonplaceholder.typicode.com/posts/3',
//             'https://jsonplaceholder.typicode.com/posts/4'
//         ];
// let pomise_list = myfun(arr);
// console.log("Promise all: ",Promise.all(pomise_list));
// console.log("Promise allsettled: ",Promise.allSettled(pomise_list))
// console.log('promise race: ',Promise.race(pomise_list));
// console.log('promise :',Promise.any(pomise_list));
// console.log(pomise_list);


// function opt1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('data......... 1');
//             resolve(1);
//         },3000)
//     })
// }
// function opt2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('data......... 2');
//             resolve(2);
//         },2000)
//     })
// }
// function opt3(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('data......... 3');
//             resolve(3);
//         },8000)
//     })
// }
// function opt4(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('data......... 4');
//             resolve(4);
//         },5000)
//     })
// }
// function opt5(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('data......... 5');
//             resolve(5);
//         },7000)
//     })
// }

// opt1().then((res)=>{
//     console.log(res)
// })

// opt2().then((res)=>{
//     console.log(res)
// })

// opt3().then((res)=>{
//     console.log(res)
// })

// opt4().then((res)=>{
//     console.log(res)
// })

// opt5().then((res)=>{
//     console.log(res)
// })


// let allopt = async () =>{
//     await opt1();
//     await opt2();
//     await opt3();
//     await opt4();
//     await opt5();
//     console.log('all oprations done !!!!');
// }
// allopt()



// function opt1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(1);
//         },10000)
//     })
// }
// function opt2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(2);
//         },2000)
//     })
// }

// let allopt = async () =>{
//     try{
//         console.log('hello..............');
//         let a = await opt1();
//         console.log('byeeeeeeeeeeeeee .........');
//         console.log(a);
//         let b = await opt2();
//         console.log(b)
//         console.log('all oprations done !!!!');


//     }
    
// }
// allopt()


// function multipleUrl(urls){
//     fetch(urls)
//     .then((res)=>{
//         if(!res.ok){
//             throw new Error(`HTTP error! Status: ${res.status}`);
//         }
//         return res;
//     })
// }


// const urls = [
//     'https://jsonplaceholder.typicode.com/posts/4',
//     'https://jsonplaceholder.typicode.com/posts/5',
//     'https://jsonplaceholder.typicode.com/posts/6'
// ];

// let promiseList = urls.map((url) => multipleUrl(url))
// console.log(Promise.all(promiseList));

// function showData(){
//     var newObj = new XMLHttpRequest();
//     newObj.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             console.log(this.responseText);
//             document.querySelector('p').innerHTML = this.responseText;

//         }
//     }
//     newObj.open('GET', 'data.txt', true);
//     newObj.send();
// }


// function showData(){
//     var newObj = new XMLHttpRequest();
//     newObj.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             document.querySelector('p').innerText = this.responseText;
            


//         }
//     }
//     newObj.open('GET', 'https://jsonplaceholder.typicode.com/posts/4', true);
//     newObj.send();
// }


// fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>{
//     if(!res.ok){
//         throw new Error('Http request failed. ',res.status)
//     }
//     return res.json()
// })
// .then((data)=>{
//     for(let i of data){
//         console.log(i['title'])
//     }
// })


// // ************   Symbol()   Data Type   ***********************
// var x = Symbol();
// console.log(x);

// let x = Symbol('hello');
// let y = Symbol('hello');
// console.log(x,y);
// console.log(typeof(x),typeof(y));

// let x = Symbol();
// let y = Symbol();
// console.log(x==y);
// console.log(typeof(x)===typeof(y))


// let x = Symbol('hello');
// x=Symbol(45);

// let y = Symbol('hello');
// alert(x.toString());  // we cann't use symbol value derect in the document. first we have to change the datatype into the string and then use in the doc.
// alert(x.description);



// let age =Symbol();
// const obj = {
//     name: 'Pinki',
//     class: 'Gradute',
//     [age]: 21
// }

// console.log(obj);


////  *****************  BOM  **************************
// function showHeightSize(){
//     console.clear()
//     var iHeight = window.innerHeight;
//     console.log("inner Height: ",iHeight);  
//     var oHeight = window.outerHeight;
//     console.log('outer height: ',oHeight);
//     let iWidth = window.innerWidth;
//     console.log("inner Width: ",iWidth);
//     let oWidth = window.outerWidth;
//     console.log('Outer width: ',oWidth);
// }


// var myWindow;
// let openBrowser = () =>{
//     myWindow = window.open("https://github.com/PinkiKumari16",'','height=600px, width=700px top=100px left=300px');
// }

// let closeBrowser = () =>{
//     myWindow.close();
// }



var myWindow;
let openBrowser = () =>{
    myWindow = window.open('https://github.com/PinkiKumari16','','height=500px,width=500px,top=50px,left=30px');
    myWindow.document.write('<h1>Hello Pinki.</h1>');
    myWindow.focus()
}

let closeBrowser = () =>{
    myWindow.close();
}

// let moveBrowser = () =>{
//     myWindow.moveTo(400,100);
//     myWindow.focus();

// }

let moveBrowser = () =>{
    myWindow.moveBy(100,100)
    myWindow.focus();
}
 
// let resizeBrowser = () => {
//     myWindow.resizeTo(400,400)
//     myWindow.focus();
// }

let resizeBrowser = () => {
    myWindow.resizeBy(200,200)
    myWindow.focus();
}


// let scrollBrowser = () =>{
//     window.scrollTo(0,40)
// }

let scrollBrowser = () =>{
    window.scrollBy(0,40)
}
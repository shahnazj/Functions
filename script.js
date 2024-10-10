
//greet();
//greet2();

//let name = 'Nisse'

//const test = function(){
   // return 'Hej'

    //console.log('test')
    //name = 'Shahnaz';

   
//}


//const t = test()
//console.log(name)




function greet() {
    console.log('Hello there!');
}

const greet2 = function() {
    console.log('Hello there from number 2');
}

const greet3 = function(name) {
    console.log(`Hej ${name}! Hur är läget?`);
}

//greet('Nisse');
//greet('Nisse');

const getFullName = function(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`
return fullName;
}

const user1 = getFullName('Shahnaz', 'Jafari')
const user2 = getFullName(1, false)

console.log(user1)
console.log(user2)
addd(7, 10, 2)

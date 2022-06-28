/*

THIS IS WITHOUT ASYNC AWAIT

*/


console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTickets = new Promise ((resolve,reject) => {
    setTimeout(() =>{
        resolve('ticket');  //make a promise to cashier that wife will bring ticket in 3000ms so resolve it in that time or reject it
    }, 3000)
});

promiseWifeBringingTickets.then((t) => {
    console.log(`person3: shows ${t}`); //once wife has brought tickets you log them but person 4,5 will go ahead of 3
});

/* BUT WIFE WANTS POPCORN BEFORE SHOWING TICKETS */

const getPopcorn=promiseWifeBringingTickets.then((t) => {
    console.log('husband: we should go in'); //once wife has brought tickets you log them but person 4,5 will go ahead of 3
    console.log('wife: no I am hungry');
    return new Promise((resolve,reject)=> resolve(`{t} popcorn`));                     //husband makes a new promise
});

const getButter= getPopcorn.then((t) => {
    console.log('husband: we should go in'); //once wife has brought tickets you log them but person 4,5 will go ahead of 3
    console.log('wife: I need butter');
    return new Promise((resolve,reject)=> resolve(`{t} popcorn`));

});

getButter.then((t)=> console.log(t));

console.log('person4: shows ticket');
console.log('person5: shows ticket');


/*

THIS IS WITH ASYNC AWAIT

*/


console.log('person1: shows ticket');
console.log('person2: shows ticket');


const preMovie=async() => {
    const promiseWifeBringingTickets = new Promise ((resolve,reject) => {
        setTimeout(() =>{
            resolve('ticket')  //make a promise to cashier that wife will bring ticket in 3000ms so resolve it in that time or reject it
        }, 3000);
    });

    const getPopcorn= new Promise((resolve,reject)=>resolve(`popcorn`))
    const addButter= new Promise((resolve,reject)=>resolve(`butter`))

    let ticket = await promiseWifeBringingTickets;

    console.log('husband: we should go in'); 
    console.log('wife: no I am hungry');

    let popcorn= await getPopcorn;

    console.log('husband: we should go in'); 
    console.log('wife: I need butter');

    let butter= await addButter; 

    console.log('husband: let\'s go in');
    console.log('wife: sure');

    return ticket;
}

preMovie().then((m)=>console.log(`person2: shows ${m}`));


console.log('person4: shows ticket');
console.log('person5: shows ticket'); 

/*

OR INSTEAD OF GOING AND WAITING FOR POPCORN AND BUTTER SEPARATELY YOU COULD:

*/

console.log('person1: shows ticket');
console.log('person2: shows ticket');


const preMovie=async() => {
    const promiseWifeBringingTickets = new Promise ((resolve,reject) => {
        setTimeout(() =>{
            resolve('ticket')  //make a promise to cashier that wife will bring ticket in 3000ms so resolve it in that time or reject it
        }, 3000);
    });

    const getPopcorn= new Promise((resolve,reject)=>resolve(`popcorn`))
    const addButter= new Promise((resolve,reject)=>resolve(`butter`))
    const getCoke= new Promise((resolve, reject) => resolve(`coke`))

    let ticket = await promiseWifeBringingTickets;


    let [popcorn, butter, coke]= await Promise.all([getPopcorn, getButter, getCoke]); // resolves all at once

    console.log(`${popcorn}, ${butter}, ${coke}`)

    return ticket;
}

preMovie().then((m)=>console.log(`person2: shows ${m}`));


console.log('person4: shows ticket');
console.log('person5: shows ticket');

/*

TRY AND CATCH ERROR HANDLING:

*/

console.log('person1: shows ticket');
console.log('person2: shows ticket');


const preMovie=async() => {
    const promiseWifeBringingTickets = new Promise ((resolve,reject) => {
        setTimeout(() =>{
            reject('ticket')  //make a promise to cashier that wife will bring ticket in 3000ms so resolve it in that time or reject it
        }, 3000);
    });

    let ticket
    try {
        ticket= await promiseWifeBringingTickets;
    } catch(err) {
        ticket =' sad face';
    }

    

    return ticket;
}

preMovie().then((m)=>console.log(`person2: shows ${m}`));


console.log('person4: shows ticket');
console.log('person5: shows ticket');


/*

MORE:

*/

const TestUserForm=async() => {
    const LoadUserForm = new Promise ((resolve,reject) => {
        setTimeout(() =>{
            resolve('page loaded')  
        }, 3000);
    });

    const EnterUserName = new Promise ((resolve,reject) => {
        setTimeout(() =>{
            resolve('user entered')  
        }, 3000);
    });

    const verifyUserDetails =() => {

    }


    await LoadUserForm;
    await EnterUserName;
    const testReslt= verifyUserDetails();

    return testReslt;
}

preMovie().then((m)=>console.log(`person2: shows ${m}`));
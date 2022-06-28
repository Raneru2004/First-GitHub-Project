function showRating(num) {
    let outstar='';
    if (num.isInteger()===true) {
        for (let i =0; i <num; i++) {
            outstar=outstar+'*';
        }

    } else {
        for (let i =0; i <Math.floor(num); i++) {
            outstar=outstar+'*';
        }

        outstar=outstar+'.';
    }

    return outstar;
}

function sortLowToHigh(arr) {  //this is how you sort from lowest to highest in js in an array, high to low is b-a
    return arr.sort((a,b) => {
        return a-b;

    });

}

function sortHighToLow(){   //sort by prices of objects
    return arr.sort((a,b) => {
        return b.price - a.price;

    });

}


sortHighToLow([
    { id:1, price:50},
    { id:2, price:0},
    { id:3, price:500}
    
])

/*

CAALING APIs

*/

async function postsByUser(UserId){
    const promise= await fetch("https://jsonplaceholder.typicode.com/posts");  //you fetch the API

    const result = await promise.json(); // convert to something frontend can read, you need to wait for everything to convert to json so we use await since it's aync function

    const posts =result.filter(element => element.userID===UserId); // filter and find specific userID

    return posts;
    

};

async function firstSixIncomplete(){
    const promise=await fetch("https://jsonplaceholder.typicode.com/todos"); 

    const result= await promise.json(); // this is an array on objects

    
    const incompleteelements = result.filter(element => element.completed===false); 

    const firstsixincompletes = incompleteelements.slice(0,6);

    return firstsixincompletes;


}
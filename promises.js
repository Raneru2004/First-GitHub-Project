console.log('Synch 1'); //logged rigght away as in main queue
setTimeout(_ => console.log(`timeout 2`),0); // queued for a future task
Promise.resolve().then(_ => console.log('Promise 3')); // queued to run in micro task queue, priority is higher than future task queue so after the console logs, this is logged
console.log('Synch 2');//logged rigght away as in main queue



log('Synchro 1'); //these get logged immediately 

log(codeblocker());

log('Synchro 2')  //these get logged after a while as codeblocker is long af

const codeblocker =() => {   // 
    let i=0;
    while (i<10000000000) {i++;}

    return 'billion loops done'  //
}


const codeblocker =() => {   // 

    return new Promise.resolve().then(v => {
        let i=0;
        while (i<10000000000) {i++;}

       resolve('billion loops done')  // since we use promise and resolve its happening as a micro task now so log('Synchro 2') gets logged immediately 

    })
    
}

const getFruit =async(name) =>{
    const fruits ={
        pineapple:'2',
        peach:'1',
        strawberry: 4
    }

    return Promise.resolve(fruits[name]); //async automatically resolves the return as a promise
}

getFruit('peach').then(console.log) //outputs  1


const makeSmoothie = async() =>{

    try{ // use it to catch errors

    
    const a = await getFruit('pineapple') //await pauses the function so that the promise resolve of getFruit resolves to a value
    const b = await getFruit('strawberry')
    return Promise.all([a,b]); // all the values a,b run concurrently so their values are retrieved at same time

    throw 'broken!' // use it to throw erroes

    } catch(err) {
        console.log(err)  
        return "fine" // provide replacement value is error is found
    }
}


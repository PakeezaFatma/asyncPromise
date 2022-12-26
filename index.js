// console.log('person1 : Shows ticket');
// console.log('person2 : Shows ticket');

// const promiseWifeBringTickets = new Promise((resolve , reject) =>{
//     setTimeout(() =>{
//         resolve('ticket');
//     },3000);
// })




// promiseWifeBringTickets.then((t) => {
//     console.log(`person3 : shows ${t}`);
// })
// console.log('persone4: shows ticket');



// console.log('person1 : Shows ticket');
// console.log('person2 : Shows ticket');

// const promiseWifeBringTickets = new Promise((resolve , reject) =>{
//     setTimeout(() =>{
//         resolve('ticket');
//     },3000);
// })


// const getPopcorn = promiseWifeBringTickets.then((t) =>{
//     console.log('husband : we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve , reject) => resolve(`${t} popcorn`))
// });

// getPopcorn.then((t) =>console.log((t)));

// console.log('person4 : Shows ticket');

// console.log('person5 : Shows ticket');


//Promices

// console.log('person1 : Shows ticket');
// console.log('person2 : Shows ticket');

// const promiseWifeBringTickets = new Promise((resolve , reject) =>{
//     setTimeout(() =>{
//         resolve('ticket');
//     },3000);
// })


// const getPopcorn = promiseWifeBringTickets.then((t) =>{
//     console.log('wife : i have the tickets')
//     console.log('husband : we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve , reject) => resolve(`${t} popcorn`))
// });

// const getButter=getPopcorn.then((t) =>{
// console.log('husband: i got some popcorn ');
// console.log('husband : we should go in');
// console.log('wife: i need butter on my popcorn');
// return new Promise((resolve , reject) => resolve(`${t} butter`))
// });



// const getColdDrink=getButter.then((t) =>{
//     console.log('husband: i got butter on popcorn ');
//     console.log('husband : we should go in');
//     console.log('wife: i feel thristy need Cold Drink');
//     return new Promise((resolve , reject) => resolve(`${t} coldDrink`))
//     });
// getColdDrink.then((t)=>console.log(t));

// console.log('person4 : Shows ticket');

// console.log('person5 : Shows ticket');


//await Promices

// console.log('person1 : Shows ticket');
// console.log('person2 : Shows ticket');

// const preMovie = async() =>{
//     const promiseWifeBringTickets =new Promise((resolve , reject) =>{
//         setTimeout(() => resolve('ticket'),3000);
//     });
//     const getPopcorn = new Promise((resolve , reject) =>resolve(`popcorn`));
//     const getButter = new Promise((resolve , reject) => resolve(`butter`));
//     const getColdDrink = new Promise((resolve ,reject)=>resolve(`coldDrink`));
//     let ticket = await promiseWifeBringTickets;
//     console.log(`wife : i have the ${ticket}`);
//     console.log('husband : we should go in');
//     console.log('wife: no i am hungry');

//     let popcorn =await getPopcorn;
//     console.log(`husband: i got some ${popcorn} `);
//     console.log('husband : we should go in');
//     console.log('wife: i need butter on my popcorn');

//     let butter =await getButter;
//     console.log(`husband: i got some ${butter} on popcorn`);
    

//     let coldDrink = await getColdDrink;
//     console.log(`husband : i got some ${coldDrink}`);
//     console.log(`husband : anything else darling?`);
//     console.log(`wife : lets go , we are geting late`)
//     console.log(`husband : thank you for the reminder `);
//     return ticket;

// }
// preMovie().then((m) => console.log(`perso3: shows${m}`));
// console.log('person4 : shwos ticket');
// console.log('person5: shows ticket');


//all.Promics

console.log('person1 : Shows ticket');
console.log('person2 : Shows ticket');

const preMovie = async() =>{
    const promiseWifeBringTickets =new Promise((resolve , reject) =>{
        setTimeout(() => resolve('ticket'),3000);
    });
    const getPopcorn = new Promise((resolve , reject) =>resolve(`popcorn`));
    const getButter = new Promise((resolve , reject) => resolve(`butter`));
    const getColdDrink = new Promise((resolve ,reject)=>resolve(`coldDrink`));
    let ticket = await promiseWifeBringTickets;
    
    let [popcorn, butter,coldDrink] = await Promise.all([getPopcorn ,getButter ,getColdDrink])
    console.log(`${popcorn} , ${butter} , ${coldDrink}`);
    return ticket;
}
preMovie().then((m) => console.log(`person3: shows${m}`));
console.log('person4 : shwos ticket');
console.log('person5: shows ticket');

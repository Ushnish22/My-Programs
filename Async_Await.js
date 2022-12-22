console.log('person 1: shows ticket');
console.log('person 2: shows ticket');

const promiseWifeBringTickets= new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('ticket');
    },3000);
})

/*promiseWifeBringTickets.then((t) =>{
console.log(`person 3: shows${t}`);
});*/

const getPopcorn=promiseWifeBringTickets.then((t) => {
    console.log('Husband: We should go in');
    console.log('Wife: No, I am hungry');
    return new Promise((resolve,reject) => resolve(`${t} popcorn`));
})
 const getButter=getPopcorn.then((t) => {
    console.log('Husband: We should go in');
    console.log('Wife: No, I need butter on my popcorn');
    return new Promise((resolve,reject) => resolve(`${t} butter`));
})
const getColdDrinks=getButter.then((t) => {
    console.log('Husband: Now we should go in');
    console.log('Wife: No, I need a cold drink');
    return new Promise((resolve,reject) => resolve(`${t} cold drink`));
})

getColdDrinks.then((t)=>console.log(t));

console.log('person 4: shows ticket');
console.log('person 5: shows ticket');
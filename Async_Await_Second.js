console.log('person 1: shows ticket');
console.log('person 2: shows ticket');

const preMovie = async() => {
    const promiseWifeBringTickets = new Promise((resolve,reject) => {
        setTimeout(() => resolve('ticket'),3000);
    });

    const getPopcorn = new Promise((resolve,reject)=> resolve(`popcorn`));

    const getButter = new Promise((resolve,reject)=> resolve(`butter`));

    const getColdDrinks = new Promise((resolve,reject)=> resolve(`coldDrink`));



    let ticket = await promiseWifeBringTickets;

    let [popcorn,butter,coldDrink] = await Promise.all([getPopcorn,getButter,getColdDrinks]);

    console.log(`${popcorn},${butter},${coldDrink}`);
    
    /*console.log(`Wife: I have the ${ticket}`);
    console.log('Husband: We should go in');
    console.log('Wife: No, I am hungry');

    let popcorn = await getPopcorn;

    console.log(`Husband: I got the ${popcorn}`);
    console.log('Husband: We should go in');
    console.log('Wife: No, I need butter on my popcorn');

    let butter = await getButter;
    
    console.log('Husband: Now we should go in');
    console.log('Wife: No, I need a cold drink');

    let coldDrink=await getColdDrinks;

    console.log(`Husband: I got the ${coldDrink}`);
    console.log('Husband: Anything else Darling?');
    console.log('Wife: No, let us go in, we are getting late');*/

    return ticket;
}

preMovie().then((m) => console.log(`person 3: shows ${m}`));

console.log('person 4: shows ticket');
console.log('person 5: shows ticket');
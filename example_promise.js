function buyCar(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Bought a car');
        },1000);
    })
}

function planTrip(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Trip to Manali');
        },2000);
    })
}

function goToMountains(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Visited Mountains');
        },3000);
    })
}

async function trip(){
    const msg = await buyCar();
    console.log(msg);
    const msg2 = await planTrip();
    console.log(msg2);
    const msg3 = await goToMountains();
    console.log(msg3);
}

trip();
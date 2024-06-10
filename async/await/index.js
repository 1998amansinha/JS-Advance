const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolve using async await after 5s");
    }, 55000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolve using async await after 10s");
    }, 25000);
})

async function getResult(){
    console.log("I Will Print First");
    const result1 = await p1;
    console.log(result1);
    console.log("I Will Print Second");
    const result2 = await p2;
    console.log(result2);
}

console.log("when will i print");
getResult();
console.log("I Will Print");
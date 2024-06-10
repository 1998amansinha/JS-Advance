console.log("I will print 1st");

function second() {
  setTimeout(() => {
    console.log("I will print 5th");
  }, 30000);
}

console.log("I will print 2nd");

function First() {
  console.log("I will print 4th");
}

console.log("I will Print 3rd");

const API = "https://api.github.com/users/1998amansinha";

async function getData() {
    console.log("I will print 6th");
    try {
        const res = await fetch(API)
        if(!res.ok){
            throw new Error("Network response was not ok")
        }
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.error(Error)
    }
}

getData();

second();
First();

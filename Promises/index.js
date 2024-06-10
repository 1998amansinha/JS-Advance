// const p1 = new Promise((resolve, reject) => {
//   let a = 9;
//   if (a > 10) {
//     resolve(console.log("Promise Resolved"));
//   } else reject("Promise Failed");
// });

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
    // reject("P1 Rejected");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P2 Success");
    reject("P2 Rejected");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P3 Success");
    reject("P3 Rejected");
  }, 3000);
});

// Promise.all([p1, p2, p3])
// Promise.allSettled([p1, p2, p3])
// Promise.race([p1, p2, p3])
Promise.any([p1,p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

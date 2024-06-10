// function outerFunction() {
//     var name = "InnerVariable"
//     function innerFunction() {
//         console.log(name);
//     }
//     innerFunction()
// }
// outerFunction()

// const cart = ['shoes', 'bag', 'pants']
// api.createOrder(cart, function(){
//     api.viewCart(function(){
//         api.proceedtoPayment(function(){
//             api.orderDetails(function(){
//                 api.updateWallet(function(){

//                 })
//             })
//         })
//     })
// })







const Api_Url = "https://api.github.com/users/akshaymarch7";

console.log("a");

async function userData() {
  try {
    const data = await fetch(Api_Url);
    const response = data.json();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
  console.log("b");
}

console.log("c");
setTimeout(function () {
    console.log("d");
},1000)

userData();

document.querySelector('#grandParent').addEventListener('click', function(){
    console.log("grandParent");
}, false);
document.querySelector('#parent').addEventListener('click', function(){
    console.log("Parent");
}, true);
document.querySelector('#child').addEventListener('click', function(){
    console.log("Child");
}, true);
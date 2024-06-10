document.querySelector('#form').addEventListener('keyup', (e) => {
    // console.log(e.target);
    if(e.target.dataset.capital != undefined){
        e.target.value = e.target.value.toUpperCase();
    }
})
let counter = 0

const getData = () => {
    console.log("Fetching data...", ++counter);
}

const doSomeMagic = function (fn,d) {
    return function() {
        setTimeout(() => {
            fn()
        },d)
    }
}

const betterResult = doSomeMagic(getData, 300)
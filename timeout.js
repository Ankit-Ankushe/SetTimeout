function first(){
    console.log('first')
}

function second(callback){
    setTimeout(() => {
        console.log('second')
        callback()
    })
}
function third(){
    console.log('third')
}

// asynchronous call
first()
second()
third()


// synchronous call
first()
second(third)
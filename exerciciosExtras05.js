for(let i = 2; i <= 1001; i++){
    let ePrimo = true;
    for(let j = 2; j < i; j++){
        if(i % j === 0) {
            ePrimo = false;
        }
    }
    if(ePrimo === true){
        console.log(i);
    }
}
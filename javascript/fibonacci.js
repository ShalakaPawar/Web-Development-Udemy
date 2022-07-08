
function fibonacci(num){
    if (num == 0)
        return 0;
    if (num == 1)
        return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

function fib_num(num){
    fib = [];
    fib.push(0);
    fib.push(1);
    for(i = 2; i < num; i++){
        fib.push(fib[i-1] + fib[i-2]);
    }
    console.log(fib);
}
fib_num(15);
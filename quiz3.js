

    //  Fibonacci sequence 
    
    let n=5

    let fib = [0,1];
    for (let i=fib.length; i<n; i++) {
        fib[i] = fib[i-2] + fib[i-1];
    }
    console.log(fib);





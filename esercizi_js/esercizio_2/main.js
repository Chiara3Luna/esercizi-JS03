function stampaNumeriFizzBuzz(N) {
    
    for (let i = 1; i <= N; i++) 

    {

        if (i % 15 === 0) 
        {
            console.log("FizzBuzz");
        } 

        else if (i % 3 === 0) 

        {
            console.log("Fizz");
        } 

        else if (i % 5 === 0) 

        {
            console.log("Buzz");
        } else 
        
        {
            console.log(i);
        }
    }
}

// Esempio di utilizzo della funzione con N = 20
stampaNumeriFizzBuzz(20);

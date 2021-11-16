for(let i = 0; i <= 100; i++){

    let fizzBuzz;
    if( i % 3 === 0, i % 5 === 0 ){
        fizzBuzz = 'fizzbuzz';
        console.log(fizzBuzz)
    }else if( i % 3 === 0 ){
        fizzBuzz = 'fizz';
        console.log(fizzBuzz)
    }else if( i % 5 === 0 ){
        fizzBuzz = 'buzz';
        console.log(fizzBuzz)
    }else{
        console.log(i)
    }
    
}
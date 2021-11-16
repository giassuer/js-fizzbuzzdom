const boxesContainer = document.querySelector('.container');



for(let i = 0; i <= 100; i++){

    let fizzBuzz;
    let newBox;
    if( i % 3 === 0, i % 5 === 0 ){
        fizzBuzz = 'fizzbuzz';
        newBox = `
        <div class="box">${fizzBuzz}</div>
    `;
        console.log(fizzBuzz)
    }else if( i % 3 === 0 ){
        fizzBuzz = 'fizz';
        newBox = `
        <div class="box">${fizzBuzz}</div>
    `;
        console.log(fizzBuzz)
    }else if( i % 5 === 0 ){
        fizzBuzz = 'buzz';
        newBox = `
        <div class="box">${fizzBuzz}</div>
    `;
        console.log(fizzBuzz)
    }else{
        newBox = `
        <div class="box">${i}</div>
    `;
        console.log(i)
    }
    
    boxesContainer.innerHTML += newBox;
}
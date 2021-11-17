const boxesContainer = document.querySelector('.container');


for(let i = 1; i <= 100; i++){

    let fizzBuzz;
    let newBox;

    if( i % 5 === 0 && i % 3 === 0 ){
        fizzBuzz = 'fizzbuzz';
        newBox = `
        <div class="box fizzbuz">${fizzBuzz}</div>
    `;
        console.log(fizzBuzz)

    }else if( i % 3 === 0 ){
        fizzBuzz = 'fizz';
        newBox = `
        <div class="box fizz">${fizzBuzz}</div>
    `;
        console.log(fizzBuzz)

    }else if( i % 5 === 0 ){
        fizzBuzz = 'buzz';
        newBox = `
        <div class="box buzz">${fizzBuzz}</div>
    `;
        console.log(fizzBuzz)

    }else{
        newBox = `
        <div class="box number">${i}</div>
    `;
        console.log(i)
    }
    
    boxesContainer.innerHTML += newBox;
}
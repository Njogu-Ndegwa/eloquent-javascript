//  Looping a triangle

let hash = ''
for(let i = 0; i < 7; i++) {
    hash = hash + '#'
        console.log(hash)
    
}

// Fizzbuzz

for(let i = 1; i<= 100; i++) {
    if((i % 3 == 0) && (i % 5 !== 0)) {
        console.log('Fizz')
    }

   else  if((i % 5 == 0) && (i % 3 !== 0)) {
        console.log("Buzz")
    } 
    else if ((i % 5 == 0) && (i % 3 == 0)) {
        console.log("FizzBuzz")
    }

    else {
        console.log(i)
    }
 
    
}


// ChessBoard

let x = ""
let size = 8

for(let i = 1; i <= size; i++) {
    for(let j = 1; j <= 9; j++) {
        if((i % 2 == 0)) {
            if((j % 2 !== 0) && (j !==9)) {
                x = x + '#'
            } 
            else if(j % 2 == 0) {
                x = x + ' '
            } 
            
            else if (j === 9) {
                x = x+ '\n'
            }
        }

        else if(i % 2 !== 0){
            if(j % 2 == 0 ){
                x = x + '#'
            }

            else if((j % 2 !== 0) && (j !==9)) {
                x = x + ' '
            }

            else if (j === 9) {
                x = x+ '\n'
            }
        }
     
    }
}

console.log(x)


// Power function using recursion.

function power(base, exponent) {
    if(exponent == 0) {
        return 1
    }

    else {
        
        return base * power(base,  exponent - 1)
    }
}

// A function that when given a number tries to fing a sequence of additions and mulplications that lead to that number

function findSolution(target) {
    function find(current, history) {
        if(current == target) {
            return history;
        } else if (current > target) {
            return null
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                   find(current * 3, `(${history} * 3)`);
        }
    }

    return find(1, '1');
}


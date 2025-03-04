// Default function parameter

function sum(a=0, b=0){
    let result = a + b
    console.log('Sum of the number is : ' + result)
}

// sum(34, 67)


// Second option to check 

function multiplication(a, b){
    let num1 = typeof(a) !== 'undefined' ? a : 1
    let num2 = typeof(b) !== 'undefined' ? b : 1

    let result = num1 * num2
    console.log(result)
}


// multiplication(4, 2)


/* 
        It's time to use arrow function
*/

const sum2 = (a, b) => a+b;

let result2 = sum2(45, 90)
console.log(result2)


const division = (a, b) =>{
    return a/b
}

let divisionResult = division(8, 2)
console.log(divisionResult)

// HTMl process

let btn = document.querySelector('button')


    btn.addEventListener('click', ()=>{
        let h2 = document.getElementById('heading')
        h2.innerText = 'Madarchod Toha tore cudi'
        btn.classList.add('hidden')
        setTimeout(()=>{
            h2.innerText = ''
            btn.classList.remove('hidden')
        }, 2000)
    })


// Sprader Operator

let num = [1, 56, 76, 34, 90, 87, 33]

let newNum = [105, 508, 890, ...num]
console.log(newNum)

let maxValueOfTheArray ='Max value is : ' + Math.max(...newNum)
console.log(maxValueOfTheArray)


// Object Destructuring

const persone = {
    name : 'Asadullah Al Galib',
    age : 19,
    study : 'Diploma in CSE',
    blood : 'B+',
    fb : 'https://www.facebook.com/asadullah.al.galib.44330',
    game : ['free fire', 'coc', 'subway', 'midway', 'highway']
}

let {name, age, study, blood, fb, game} = persone


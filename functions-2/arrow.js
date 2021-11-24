////////// PROBLEM 1 //////////

/*
  Which syntax was used to create the function below?
  Uncomment the answer underneath.
*/

const exclaim = function(str) {
  return str.toUpperCase() + '!!!'
}

// arrow
// declaration
expression



////////// PROBLEM 2 //////////

/*
  Which syntax was used to create the function below?
  Uncomment the answer underneath.
*/

const exclaimTwo = str => {
  return str.toUpperCase() + '!!!'
}

arrow
// declaration
// expression

/*
  Rewrite exclaimTwo to be a single line.
  Call your new function exclaimThree

  Brownie points if you use a template string
*/

const exclaimThree = str => str.toUpperCase() + "!!!";

////////// PROBLEM 3 //////////

/*
  Which syntax was used to create the function below?
  Uncomment the answer underneath.
*/

function exclaimFour(str) {
  return str.toUpperCase() + '!!!'
}

// arrow
declaration
// expression



////////// PROBLEM 4 //////////

/*
    Write an arrow function called 'jsNinja' that returns the string: 'I am a JavaScript ninja!'
*/

//CODE HERE

const jsNinja = () => "I am a JavaScript ninja!"

////////// PROBLEM 5 //////////

/*
    Write an arrow function called 'compareNums' that takes in 2 parameters, 
    which will be numbers. 
    The function should return the bigger number. 
    If the numbers are the same, just return the number.

    Brownie points if you use a ternary statement (only spend significant time on this if you have wiggle room)
*/

//CODE HERE

  const compareNums = (num1, num2) => {
    if (num1 > num2) {
      return num1
    }
    else if (num1 === num2) {
    return num1
  } else {
    return num2
  }
  }

  console.log(compareNums(2, 4))
////////// PROBLEM 6 //////////

/*
    Write a one line arrow function called 'bestMovie' that takes in one parameter,
    which will be a string of a movie title. 
    The function should return the string: 'MOVEIEPARAM is the best movie ever!'. 
    For example, if we passed in 'Sharknado', 
    we would expect the function to return 'Sharknado is the best movie ever!'

    Brownie points for using a template string (again don't spend too much time figuring
    that out)
*/

const bestMovie = title => {
  return title + 'is the best movie ever!'
}

const bestMovie = title => `${title} is the best movie ever!`
//CODE HERE
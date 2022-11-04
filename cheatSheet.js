//=========================== Number Method ============================
/*
//Conversion
console.log(Number('23'));  //23
console.log(+'23');  //23

//Parsing
console.log(Number.parseInt('30px', 10));//30
console.log(Number.parseInt('e23', 10));//NaN

console.log(Number.parseInt('   2.5rem'   ));//2
console.log(Number.parseFloat('   2.5rem   '));//2.5

//Check if value is NaN
console.log(Number.isNaN(20)); //False
console.log(Number.isNaN('20')); //False
console.log(Number.isNaN(+'20X')); //True
console.log(Number.isNaN(23 / 0)); //Talse

//Check if value is number
console.log(Number.isFinite(20)); //True
console.log(Number.isFinite('20')); //False
console.log(Number.isFinite(+'20X')); //False
console.log(Number.isFinite(23 / 0)); //False

console.log(Number.isInteger(23));//true

//Square root
console.log(Math.sqrt(25));//5
console.log(25 ** (1 / 2));//5
//Cubic root
console.log(8 ** (1 / 3));//2

//Get max or min value 
console.log(Math.max(5, 6, 18, 22, 10, 15)); //22
console.log(Math.min(5, 6, 18, 22, 10, 15)); //5

//Get value between min and max .
const randomInt = function(min, max){
  return Math.trunc(Math.random() * (max - min) + 1) + min;
}
console.log(randomInt(-10,20));

//Rounding integers
//Math.trunc - remove any decimal point.
console.log(Math.trunc(23.3)); //23
//Math.round - round down or up depend on value.
console.log(Math.round(23.3)); //23
console.log(Math.round(23.7)); //24
//Math.ceil - always round up
console.log(Math.ceil(23.3)); //24
console.log(Math.ceil(23.7)); //24
//Math.floor - always round down
console.log(Math.floor(23.3)); //23
console.log(Math.floor(23.7)); //23
//Rounding decimals
//toFixed - always return string.
console.log((2.7).toFixed(0)); //3
console.log((2.7).toFixed(3)); //2.700
console.log((2.345).toFixed(2)); //2.35
console.log(+(2.345).toFixed(2)); //2.35 - using + to convert string to number
//Remainder Operator
console.log(5 % 2); // 5 = 2 * 2 + 1 - result - 1
console.log(8 % 3); // 2
//Check if the number is even or not
const checkEven = function(num){
  return num % 2 === 0;
}
console.log(checkEven(2));// True

//Max safe integer
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

//If the number large than max safe integer, can use BigInt
console.log(513543624512314231512321512); //not use
console.log(513543624512314231512321512n); //use bigInt
console.log(BigInt(513543624512314231512321512)); //use bigInt 

const huge = 512321513221321312332154212135n;
const regularNum = 23;
console.log(huge * BigInt(regularNum));
*/

//=========================== Intl format Method ============================
/*
const numTest = 23124213.23;

const options = {
  style: 'currency', //or 'unit' and 'currency'
  unit: 'celsius',
  currency: 'AUD',
  // useGrouping: false,
};

console.log('US: ', new Intl.NumberFormat('en-US', options).format(numTest));
console.log('CN: ', new Intl.NumberFormat('zh-CN', options).format(numTest));
console.log(navigator.language, new Intl.NumberFormat(navigator.language, options).format(numTest));
*/

/*
 //setTimeout - running after setting timer
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(function(ing1, ing2){
  return console.log(`Here is your pizza with ${ing1} and ${ing2}`)
}, 2000, ...ingredients)

if (ingredients.includes('spinach')){
  clearTimeout(pizzaTimer);
}

// setInterval - keep runinng after setting timer
setInterval(function(){
  const now = new Date();
  console.log(now);
}, 1000);
*/

//=========================== Date Method ============================
// Create a Data!
/*
const now = new Date();
console.log(now);
//Month from 0-11 - so 11 is Dec and etc
console.log(new Date('Aug 02 2020 18:05:41')) //Sun Aug 02 2020 18:05:41 GMT+1000
console.log(new Date('December 24, 2015')) //Thu Dec 24 2015 00:00:00 GMT+1100
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 19, 15, 23, 5)); // Thu Nov 19 2037 15:23:05 GMT+1100

console.log(new Date(0)); // Thu Jan 01 1970 10:00:00 GMT+1000 
console.log(new Date(3 * 24 * 60 * 60 * 1000));// 3 days * 24 hours * 60 mins * 60 second * conver to milliseconds

//Date Method
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);//Thu Nov 19 2037 15:23:00
console.log(future.getFullYear());//2037
console.log(future.getMonth()); //10
console.log(future.getDate()); //19
//getDay() - 0 Sunday, 1 Monday, 2- Tuesday etc
console.log(future.getDay()); //4 - Get day of the week.
console.log(future.getHours()); //15 
console.log(future.getMinutes()); //23
console.log(future.getSeconds()); //0
console.log(future.toISOString()); //2037-11-19T04:23:00.000Z
console.log(future.getTime()); //2142217380000 - date convert to milliseconds - since January 1, 1970
console.log(new Date(2142217380000)); // Thu Nov 19 2037 15:23:00 milliseconds convert to date
console.log(Date.now()); // Give current timestamp

//Set for Date
future.setFullYear(2024);
console.log(future);
*/

//=========================== Array Method OverView ============================
/*
=== To mutate original array ===
- Add to original:
.push (end)
.unshift (start)

- Remove from original:
.pop (end)
.shift (start)
.splice (any)

- Others:
.reverse
.sort
.fill

=== A new array ===
-computed from original:
.map (loop)

-Filtered using condition:
.filter

-Portion of original:
.slice

-Adding original to other:
.concat

-Flattening the original:
.flat
.flatMap

=== An array index ===
-Based on value:
.indexOf

-Based on test condition:
.findIndex

=== An array element ===
-Based on test condition:
find

=== Know if array includes ===
-Based on value:
.includes

-Based on test condition:
.some
.every

=== A new string ===
-Based on separator string:
.join

=== To transform to value ===
-Based on accumulator:
.reduce (Boil down array to single value of any type: number, string, boolean, or even new array or object)

=== To just loop array ===
-Based on callback:
.forEach (Does not create a new array, just loops over it)
*/
/*
//=========================== Method ============================
//Array - Slice method 
//slice(2) = starting in position[2] = ['c', 'd', 'e']
//slice(2,4) = starting in position[2] and end before position[4] = ['c', 'd']
//slice(-2) = only take the last two element from array. = ['d','e']
//slice(1,-2) = starting in position[1] and end in position[length-2 = 4-2 = 2] = ['b', 'c']
//slice() = create a shadow copy
//[...arrTest] = spread operator also can create shadow copy
console.log(arrTest.slice(2));
console.log(arrTest.slice(2,4));
console.log(arrTest.slice(-2));
console.log(arrTest.slice(1,-2));
console.log(arrTest.slice());

//=========================== Method ============================
//Array - Splice method 
//Almost same as Slice method but Splice delete element from the original array
//splice(2) = starting taking the element out of array in position[2] = ['c', 'd', 'e'] 
//The original array only have ['a', 'b'] now.
console.log(arrTest.splice(2));
//splice(-1) = collect and remove the last element in the array ['e']
//The original array only have ['a','b','c','d']; now.

//splice(1, 2) = starting in position [1] and take 2 elements 
//['a','b','c','d','e'] = position [1] is b and the next element = ['b', 'c']
console.log(arrTest);

//=========================== Method ============================
//Array - Reverse method- reverse the array - also change the original array
arrTest = ['a','b','c','d','e'];
const arrTest2 = ['j','i','h','g','f'];
//reverse() =  original ['j','i','h','g','f'] reverse to = ['f', 'g', 'h', 'i', 'j']
//The original array also will change to the reverse result.
console.log(arrTest2.reverse());
console.log(arrTest2);

//=========================== Method ============================
//Array - Concat method - combine two array togather
//arrTest.concat(arrTest2) = combine Array 'arrTest' and Array 'arrTest2' togather
//arrTest = a,b,c,d,e and arrTest2=f,g,h,i,j 
//concatArray = a,b,c,d,e,f,g,h,i,j 
const concatArray = arrTest.concat(arrTest2);
//using spread operator also can combine two array togather.
const concatArray2 = [...arrTest, ...arrTest2];
console.log(concatArray);
console.log(concatArray2);

//=========================== Method ============================
//Array - Join method - join() between elements
//join('-') = add '-' between all elements
//['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'] = a-b-c-d-e-f-g-h-i-j
console.log(concatArray.join('-'))

//=========================== Method ============================
//Array - At method - ES2022
//arrTest[0] = arrTest.at(0)
console.log(arrTest[0]);
console.log(arrTest.at(0));
//if want to get the last array element
//arrTest[arrTest.length - 1]) = arrTest.at(-1) = arrTest.slice(-1)[0]
console.log(arrTest[arrTest.length - 1]);
console.log(arrTest.slice(-1)[0]);
console.log(arrTest.at(-1));
//At also work in String
console.log('Rex'.at(0));

//=========================== Method ============================
//Array - forEach method
//For of loop can braek
//forEach loop can not break
//---Print the array---
//Using For of method
arrTest = [200, -100, -300, 500, -800];
console.log('===== For of =====');
for(const x of arrTest){
  if(x > 0){
    console.log(`You deposited ${x}`)
  }else{
    console.log(`You withdrew ${Math.abs(x)}`) //abs for remove '-'
  }
}
//Using forEach method - its a callback function
console.log('===== forEach =====');
arrTest.forEach(function(x){
  if(x > 0){
    console.log(`You deposited ${x}`)
  }else{
    console.log(`You withdrew ${Math.abs(x)}`) //abs for remove '-'
  }
})

//---Print the array included the index---
//Using For of method
console.log('===== For of =====');
for(const [i,x] of arrTest.entries()){
  if(x > 0){
    console.log(`Index ${i + 1} : You deposited ${x}`)
  }else{
    console.log(`Index ${i + 1} : You withdrew ${Math.abs(x)}`) //abs for remove '-'
  }
}
//Using forEach method - its a callback function
console.log('===== forEach =====');
arrTest.forEach(function(x, i, arr){//order(1: current element, 2:current index, 3: entries array)
  if(x > 0){
    console.log(`Index ${i + 1} : You deposited ${x}`)
  }else{
    console.log(`Index ${i + 1} : You withdrew ${Math.abs(x)}`) //abs for remove '-'
  }
})

//forEach also work in Maps
const mapTest = new Map ([
  [12, 'A'],
  [34, 'B'],
  [56, 'C'],
]);
mapTest.set(78, 'D');
mapTest.forEach(function(value, key, map){//order(1: value, 2:key, 3: entries map)
  console.log(`Key: ${key}, value: ${value}`);
})

//forEach also work in Set but the order(1: value, 2:value(key), 3: entries) = becuase Set dont have index/key so key = value

//=========================== Method ============================
//Array - Map method - will loop whole array(forEach) and give new array.
// Map and forEach are very similar, but forEach will create side effects. Maps won't.
// forEach in each of iterations, performed some action visible in the console - side effects
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movementsUSD = movements.map(function(move){
  return move * 1.1;
})

//const movementsUSD = movements.map(mov => mov * 1.1); //arrow function 

console.log(movements);
console.log(movementsUSD);

const movementsDescriptions = movements.map(function(x, i){
  if(x > 0){
    return `Index ${i + 1} : You deposited ${x}`;
  }else{
    return `Index ${i + 1} : You withdrew ${Math.abs(x)}`; //abs for remove '-'
  }
})

console.log(movementsDescriptions);

//=========================== Method ============================
//Array - Filter - filter all the element that meet the condition from array
//rarelly use - Becuase filter will return a new array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const withdral = movements.filter(function(x){
  return x < 0;
})
console.log(withdral);

//=========================== Method ============================
//Array - Reduce - Different from other callbacl function - accumulator = snowball
//To essentially boil down all the elements in an array to single value

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce(function(accumulator, curr, i, arr){
  console.log(`Number ${i} : ${accumulator}`);
  return accumulator + curr;
}, 0)
console.log(balance);

//=========================== Method ============================
//Array - Find - Almost same as  filter that will loop over whole array. 
//Won't return new array, but only return the first element that meet the condition.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
const firstNegative = movements.find(function(mov){
  return mov < 0;
})
console.log(firstNegative);

or usinh in objects

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};
const accounts = [account1, account2];

const account = accounts.find(function(acc){
  return acc.owner === 'Jessica Davis';
})
console.log(account);

//=========================== Method ============================
//Array - Includes - check if the array included the data or not
//use for test equality.
const arrTest = [200, -100, -300, 500, -800];
console.log(arrTest.includes(-300)); //return true.

//=========================== Method ============================
//Array - Some - check if any data in array  meet the condition or not.
//use for test condition. Like || 'and' , one true all true.
const arrTest = [200, -100, -300, 500, -800];
const anyDeposits = arrTest.some(function(mov){
  return mov > 0;
})
console.log(anyDeposits); //true

//=========================== Method ============================
//Array - Every - check if all data in the array meet the condition or not.
//use for test condition. Like && 'or', one false all false.
const arrTest1 = [200, -100, -300, 500, -800];
const arrTest2 = [200, 100, 300, 500, 800];
const every1 = arrTest1.every(function(mov){
  return mov > 0;
})
const every2 = arrTest2.every(function(mov){
  return mov > 0;
})
console.log(every1); //false
console.log(every2); //true

//=========================== Method ============================
//Array - Flat and FlatMap method- collect all array included any sub-array into one array.
const arrTest = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arrTest.flat()); //default level is 1
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrTest.flat(2)); // Deeper arry need to set to hight level. 

//Calculate all money in the bank
//Separately method - Flat
const accountMovements = accounts.map(function(acc){
  return acc.movements;
})//get all movement from different accounts.
const allMovement = accountMovements.flat(); //using flat to pull all movement in array
const totalMovement = allMovement.reduce(function(acc, curr){
  return acc + curr;
}, 0);//calculate total amount in the array.
console.log(totalMovement);

//Chaining method - Flat - can go deeper level
const totalBest = accounts.map(function(acc){
  return acc.movements;
}).flat().reduce(function(acc, curr){
  return acc + curr;
}, 0);
console.log(totalBest);

//Chaining method - FlatMap - only can go one level deep. 
const totalBest2 = accounts.flatMap(function(acc){
  return acc.movements;
}).reduce(function(acc, curr){
  return acc + curr;
}, 0);
console.log(totalBest2);

//=========================== Method ============================
//Array - fill method - only method can use in empty array 
//use for fill data in array.

const x = new Array(7); //length with 7, empty array
console.log(x);

x.fill(1); //fill 1 in all array.
console.log(x); //[1, 1, 1, 1, 1, 1, 1]

x.fill(2,3,6); //fill 2 in array which from 3 - x[3] until x[5] - before 6.
console.log(x); //[1, 1, 1, 2, 2, 2, 1]

//=========================== Method ============================
//Array - Array.from() method - can use for create array.

const y = Array.from({length: 7}, () => 1);
console.log(y) //[1, 1, 1, 1, 1, 1, 1]

const z = Array.from({length: 7}, function(curr, i){
  return i + 1;
})
console.log(z) //[1, 2, 3, 4, 5, 6, 7]

//get random number in array.
const a = Array.from({length: 100}, function(curr, i){
  return Math.floor(Math.random()*100);
})
*/

//=========================== Method ============================
//Waiting for added
//push
//unshift
//index of
//For of method - print all
/*for (const x of arrTest){
  console.log(x);
}*/


/*
//=========================== JS build-in function ============================
//Sort() - sort array from Ascending to Descending - will change the original array
//For String
const owner = ['Jonas', 'Rex', 'Adam', 'Martha'];
console.log(owner.sort);
console.log(owner);

For Numbers
const arrTest = [200, -100, -300, 500, -800];

//Ascending
arrTest.sort(function(a, b){
  if (a > b){
    return 1;
  }
  if(a < b){
    return -1;
  }
})
console.log(arrTest)
//Short version - arrTest.sort((a, b) => a - b);

//Descending
arrTest.sort(function(a, b){
  if (a > b){
    return -1;
  }
  if(a < b){
    return 1;
  }
})
console.log(arrTest)
//Short version - arrTest.sort((a, b) => b - a);
*/

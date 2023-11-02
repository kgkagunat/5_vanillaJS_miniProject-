// Day 1 of practice

// Numbers basics, methods
console.log('--Numbers Start--');

let result;

const number = 5.39975;

// toString() - returns string of the number
result = number.toString();
result = number.toString().length;
console.log(result, typeof result);

// toFixed() - return string, with specified decimal place (also rounds)
result = number.toFixed(2);
console.log(result, typeof result);

// toPrecision() - return with specified length (round to specified number)
result = number.toPrecision(6);
console.log(result, typeof result);

// toExponential() - convert number to exponential notation, return string
result = number.toExponential(2);
console.log(result, typeof result);

// toLocaleString() - return string of number, represent locale
result = number.toLocaleString('en-US');
console.log(result, typeof result);

// valueOf() - get value
result = number.valueOf();
console.log(result, typeof result);

// Large/small number
result = number.__proto__;
console.log(result, typeof result);

// Some numbers methods:
let x;

// Square root
x = Math.sqrt(9);
console.log(x, typeof x);

// Absolute value
x = Math.abs(-5);
console.log(x, typeof x);

// Round
x = Math.round(4.6);
console.log(x, typeof x);

// Round up
x = Math.ceil(4.2);
console.log(x, typeof x);

// Round down
x = Math.floor(4.9);
console.log(x, typeof x);

// Exponent
x = Math.pow(2, 3);
console.log(x, typeof x);

// Minimum number
x = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
console.log(x, typeof x);

// Maximum number
x = Math.max(2, 33, 4, 1, 55, 6, 3, -2);
console.log(x, typeof x);

// Get a random number/decimal between 0 and 1
x = Math.random();
console.log(x, typeof x);

// Get a random number between 1 and 100
x = Math.floor(Math.random() * 10 + 1);
console.log(x, typeof x);

/* -------------------------------------------------- */

// Dates basics, methods
console.log('--Date Start--');

let date;

// Get today's date and time
date = new Date();
console.log(date, typeof date);

// Set to a string
date = date.toString();
console.log(date, typeof date);

// Get a specific date (NOTE: the month is 0-based, so 0 is January and 11 is December)
date = new Date(2021, 6, 10, 12, 30, 0);
console.log(date, typeof date);

// Pass in a string
date = new Date('2021-07-10T12:30:00');
date = new Date('07/10/2021 12:30:00');
date = new Date('2022-07-10');
date = new Date('07-10-2022');
console.log(date, typeof date);

// Get the timestamp of a specific date
date = Date.now();
console.log(date, typeof date);

date = new Date('07-10-2022 12:30:00');
console.log(date, typeof date);

date = date.getTime();
console.log(date, typeof date);

// Create a date from a timestamp
date = new Date(1666962049745);
console.log(date, typeof date);

// Convert from milliseconds to seconds
date = Math.floor(Date.now() / 1000);
console.log(date, typeof date);

// Some date methods:
let y;
let d = new Date();

// Date string
y = d.toString();
console.log(y, typeof y);

// Milliseconds since 1 January 1970 00:00:00 UTC
y = d.getTime();
y = d.valueOf();
console.log(y, typeof y);

// Year
y = d.getFullYear();
console.log(y, typeof y);

// Month
y = d.getMonth();
y = d.getMonth() + 1;
console.log(y, typeof y);

// Day of the month
y = d.getDate();
console.log(y, typeof y);

// Day of the week
y = d.getDay();
console.log(y, typeof y);

// Hour
y = d.getHours();
console.log(y, typeof y);

// Minute
y = d.getMinutes();
console.log(y, typeof y);

// Second
y = d.getSeconds();
console.log(y, typeof y);

// Millisecond
y = d.getMilliseconds();
console.log(y, typeof y);

// Date string (Template Literal)
y = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
console.log(y, typeof y);

// Intl.DateTimeFormat API (locale specific)
y = Intl.DateTimeFormat('en-US').format(d);
y = Intl.DateTimeFormat('default').format(d);
console.log(y, typeof y);

// toLocaleString() - with some of the options
y = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timezoneName: 'long',
});
console.log(y, typeof y);

// const d = new Date();
// console.log(d.toDateString());
// console.log(d.toString());
// console.log(d.toISOString());

// console.log(typeof d);


// console.log(d.getDate());
// console.log(d.getDay());
// // sun mon tue wed thu fri sat
// // 0 1 2 3 4 5 6
// console.log(d.getMonth());
// // jan/feb/mar
// console.log(d.getFullYear());
// console.log(d.getMilliseconds());
// console.log(d.getMinutes());
// console.log(d.getTime());

// const now = Date.now();
// console.log(now);

// // 
// const d1 = new Date("2022-10-20");
// // year month day hour minute second millisecond
// const date = new Date(2022, 9, 20, 10, 30, 0, 0);
// console.log(date.toString());

// const d3 = new date();
// d3.setDate(20);
// d3.setFullYear(2021);
// d3.setMonth(3);
// console.log(d.toString());

// console.log(d3.getFullYear());


// ChatGpt Correct

const d = new Date(); // Current date and time
console.log(d.toDateString()); // Displays date in human-readable form (e.g., "Thu Dec 02 2024")
console.log(d.toString()); // Displays full date and time string (e.g., "Mon Dec 02 2024 14:20:30 GMT+0530 (IST)")
console.log(d.toISOString()); // ISO format (e.g., "2024-12-02T08:50:30.000Z")

console.log(typeof d); // "object" (Date is an object)

console.log(d.getDate()); // Day of the month (1-31)
console.log(d.getDay()); // Day of the week (0-6, where Sunday is 0)
console.log(d.getMonth()); // Month (0-11, where January is 0)
console.log(d.getFullYear()); // Four-digit year (e.g., 2024)
console.log(d.getMilliseconds()); // Milliseconds (0-999)
console.log(d.getMinutes()); // Minutes (0-59)
console.log(d.getTime()); // Timestamp (milliseconds since Jan 1, 1970)

const now = Date.now(); // Current timestamp in milliseconds since Jan 1, 1970
console.log(now); // Prints the current timestamp

// Create a specific date
const d1 = new Date("2022-10-20"); // ISO 8601 string format
console.log(d1.toString()); // Converts to a readable string format

// Create another specific date with detailed inputs
const date = new Date(2022, 9, 20, 10, 30, 0, 0); // Note: Month is 0-based, so 9 is October
console.log(date.toString()); // Displays "Thu Oct 20 2022 10:30:00 GMT+0530 (IST)"

// Modify an existing date object
const d3 = new Date();
d3.setDate(20); // Sets the day of the month to 20
d3.setFullYear(2021); // Sets the year to 2021
d3.setMonth(3); // Sets the month to April (3 because months are 0-based)
console.log(d3.toString()); // Updated date string
console.log(d3.getFullYear()); // Prints 2021

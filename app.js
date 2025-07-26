
// --------Day-Based Meal Suggestion----------

let day = prompt("Enter the day of the week:");

if (day === "monday") {
  alert("Today is Biryani!");
} else if (day === "tuesday") {
  alert("Today is Nihari!");
} else if (day === "wednesday") {
  alert("Today is Fried Chicken!");
} else if (day === "thursday") {
  alert("Today is Pizza!");
} else if (day === "friday") {
  alert("Today is Burgers!");
} else if (day === "saturday") {
  alert("Today is Pasta!");
} else if (day === "sunday") {
  alert("Today is Steak!");
} else {
  alert("Please enter a valid day!");
}


// ---------Weekend vs Weekday Reminder-----------

let Day = prompt("Enter the Day of the week:");

if (Day === "saturday" || Day === "sunday") {
  alert("It's the weekend! Time to relax.");
} else {
  alert("It's a weekday! Work hard!");
}

// --------Age-Based Discount Calculation-----------

let age = parseInt(prompt("Enter your age:"));
let DAY = prompt("Enter the day of the week:");

if (age < 18 && (DAY === "friday" || DAY === "saturday")) {
  alert("You get a 15% discount!");
} else if (age >= 18 && (DAY === "monday" || DAY === "tuesday" || DAY === "wednesday" || DAY === "thursday")) {
  alert("You get a 10% discount!");
} else if (age >= 50 && DAY === "sunday") {
  alert("You get a 20% discount!");
} else {
  alert("No discount available.");
}




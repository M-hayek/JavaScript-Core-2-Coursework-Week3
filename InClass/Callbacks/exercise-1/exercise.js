/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen

Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
================
*/

//Task 1

// setTimeout (() => {
//  document.querySelector ("body").style.backgroundColor = "red";}, 5000    
// );


//Task2


setInterval(() => {
 var r = Math.round(Math.random()*255);
 var g = Math.round(Math.random()*255);
 var b = Math.round(Math.random()*255);

    document.querySelector ("body").style.backgroundColor = "rgb("+r+","+g+","+b+")";

}, 5000

);





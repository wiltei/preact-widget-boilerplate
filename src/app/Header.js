import React from 'react'
import logo from '../assets/favicon-hapa.png'

const Header = () => (
  <div className="app-header">
    <img src={logo} className="app-logo" alt="logo" />
    <h1>"Eiköhän mennä tuon suon yli että heilahtaa!"</h1>
  </div>
);
// Example: Variable Hoisting - var x is hoisted to the second line from for-loop statement
var consoleTest = function() {
    for(var x = 0;x<5;x++) {
        console.log(x);
    }
    console.log("x can be accessed outside the block scope x value is :"+x);
    console.log('x is hoisted to the function scope');
};


var modulusOperatorTest;
modulusOperatorTest = function () {
    //var modulusTest = 0;
    var a = 7;
    var b = 5;
    var modulusTest = a % b;
    console.log("modulus remainder is " + modulusTest);
    // typeof operator test
    console.log("type of var content is "+typeof modulusTest)
};

//alert("toimiiko?")

consoleTest();
modulusOperatorTest();
export default Header
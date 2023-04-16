import React from 'react';
import ReactDOM from 'react-dom';

/** Babel is compiler which converts modern 
 javascript code into browser understandble code 
var React = require('react')
var ReactDOM = require('react-dom') this traditional JS code for using react
---------------------------------------------------
*/


// ReactDOM.render(
//           "Kya dikhana hai", 
//           "Kahan dikhana hai", 
//           "callback function"
//           );

/*
ReactDOM.render(
  <h1>Hello World</h1>, //<-  this html expression is called Jsx expression
  document.getElementById("root")
  );
*/

/**above code convrted by babel as:
  import { jsx as _jsx } from "react/jsx-runtime";
  ReactDOM.render( /_jsx("h1", {
  children: "Hello World"
}),
document.getElementById("root")
);*/
//----------------------------------------------------------


//array or div for multiple jsx element
// ReactDOM.render(
//   [
//     <h1>Hello World</h1>,
//     <p>Ujala maurya first react application</p>
//   ],
//   document.getElementById("root")
//   );
// ----------------------------------------------------------

//<React.Fragment> or <></> is used to remove one extra div inserted
const ujala_name = "Ujala Maurya";
ReactDOM.render(
  <>
    <h1>Hello World</h1>
    <p>{ujala_name} you are learning react app</p>
    <p>{`your name is ${ujala_name}`}</p>
  </>,
  document.getElementById("root")
  );
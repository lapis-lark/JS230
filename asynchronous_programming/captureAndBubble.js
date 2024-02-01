// prob 1
// MAIN
// DIV
/*
  target === elem4 (main) capture 1, bubble 2
  current target === elem1 (div) capture 2, bubble 1
*/

// prob 2
/*
  second listener first, then first listener
  first to to trigger is a listener on div element (current target) listening during the capture phase
  triggered on the main element (target)

  second is the click event listener listening during the bubble phase on the div element
  (current target) and triggers on the main element (target)
*/

// prob 3
/*
  1 - qw - 4
  DIV
  KeyQ
  KeyW
  MAIN

  first: the 'click' event listener listening on elem1 (DIV) that alerts the target name (DIV,
    elem1) during the bubbling phase
  second: the 'keypress' event listener listening on the document (current target)
  during the bubbling phase; it triggers when q, then w are entered into the input element (target)
  third: the 'click' event listener listening on elem1 (DIV) that alerts the target name (MAIN,
    elem4) during the bubbling phase
 
*/
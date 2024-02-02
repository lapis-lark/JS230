/*
  you can't determine whether code is asynchronous just by looking at it;
  a function could be invoked asynchronously, it could call a function that is invoked asynchronously

  an event is an object that represents some occurrence; has information about where and what

  currentTarget === this !!

  if the change you made JUST WON'T OCCUR, see if the element you're listening on actually has
  screen real estate? maybe just use flags as conditions and put the event listener on document
  or an outer element

  callbacks let java execute tasks in the background that take time

*/
let $h1s = $('h1');

$('article').find('li');

$('article li').eq(2);

let $table = $('table');
let $oddRows = $table.find('tr').odd();

$('li li').filter(":contains('ac ante')").parents('li');
$('li li').filter(":contains('ac ante')").next();

$("td[class!='protected']");
$('td').not(".protected");

$("a[href^='#']")


$(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    alert('hi!!');
  }); 
});
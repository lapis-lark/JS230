let request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/rails/rails');
request.responseType = 'json';

request.addEventListener('load', (event) => {
  console.log(request.status);
  console.log(request.response.open_issues);
});a

request.send();
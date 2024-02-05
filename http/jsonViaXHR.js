let request = new XMLHttpRequest();

request.open('post', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');
request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
request.setRequestHeader('Authorization', 'token AUTH_TOKEN');


let data = {name: 'rainbow pen', price: 99, sku: 'RBP5678'};
let jsonData = JSON.stringify(data);

request.addEventListener('load', () => {
  console.log('this product was added: ${request.responseText}');
});

// set header content type
// convert object to json
// send data

request.send(jsonData);
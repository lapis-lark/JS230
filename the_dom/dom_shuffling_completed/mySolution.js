/*
let header = document.querySelector('header');
let body = document.body;

let firstBodyElement = body.firstElementChild;

body.insertBefore(header, firstBodyElement);



// let headerClone = header.cloneNode(true);


let headers = document.querySelectorAll('header');
let [header1, header2] = headers;

let body = document.body;

let firstBodyElement = body.firstElementChild;

body.insertBefore(header2, firstBodyElement);

for (let i = header1.childNodes.length - 1; i >= 0; i -= 1){
  header2.insertBefore(header1.childNodes[i], header2.firstChild);
}

*/
let body = document.body;
let topHeader = document.querySelectorAll('header')[1];
body.insertBefore(topHeader, body.firstChild);
let title = document.querySelector('h1');
topHeader.insertBefore(title, topHeader.firstChild);

let images = document.querySelectorAll('img')
let [image1, image2] = images;

let image1Clone = image1.cloneNode(true);
let image2Clone = image2.cloneNode(true);

let figure1 = image1.parentElement;
let figure2 = image2.parentElement;

figure1.insertBefore(image2Clone, image1);
figure2.insertBefore(image1Clone, image2);
image1.remove();
image2.remove();

let article = document.querySelector('article');
article.append(figure1);
article.append(figure2);
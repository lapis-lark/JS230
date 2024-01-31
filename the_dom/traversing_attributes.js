function getParaElements() {
  let paragraphs = [];
  let nodes = document.body.childNodes;
  
  nodes.forEach(node => {
    if (node.nodeName === 'P') {
      paragraphs.push(node);
    }
  });
  
  return paragraphs;
}

function getParagraphElements() {
  return document.querySelectorAll('P')
}

function updatePClasses(newClass) {
  let nodes = document.body.childNodes;
  
  nodes.forEach(node => {
  	if (node.nodeName === 'P') {
    	node.classList.add(newClass);
    }
  });
}

function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

function getElementsByTagName(name) {
  let elements = [];
  walk(document, node => {
    if (node.nodeName.toLowerCase() === name) {
      elements.push(node);
    }
  });

  return elements;
}

getElementsByTagName('p').forEach(node => node.classList.add('article-text'));

let paragraphs = document.getElementsByTagName('p');
paragraphsArr = Array.prototype.slice.call(paragraphs);
paragraphsArr.forEach(node => node.classList.add('article-text'));


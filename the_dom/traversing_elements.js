let h2s = document.querySelectorAll('h2');


let wordCount = [];
for (let i = 0; i < h2s.length; i += 1) {
  wordCount.push(h2s[i].textContent.split(' ').length);
}
wordCount;

let indexes = document.querySelectorAll('a');
for (let i = 1; i < indexes; i += 2) {
  indexes[i].style.color = 'green';
}

let captions = document.querySelectorAll('.thumbcaption');
Array.prototype.slice.call(captions).map(node => {
  return node.innerText;
});

// animal classification extraction
function extractAnimalData() {
  let classification = {
    kingdom: '',
    phylum: '',
    class: '',
    order: '',
    family: '',
    genus: '',
    species: '',
  }
  
  let tableRows = document.querySelectorAll('tr');
  
  let rowArr = Array.prototype.slice.call(tableRows);
  rowArr.forEach(node => {
    let text = node.firstElementChild.textContent.toLowerCase().slice(0, -1);
    if (Object.keys(classification).includes(text)) {
      classification[text] = node.lastElementChild.textContent;
    }
  });

  return classification;
}


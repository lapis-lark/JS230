document.addEventListener('mousemove', event => {
  let x = document.querySelector('.x');


  x.style.left = event.clientX + 'px';
  x.style.top = event.clientY + 'px';
});

document.addEventListener('keyup', event => {


  let color;
  let key = event.key;
  if (key === 'b') {
    color = 'blue';
  } else if (key = 'g') {
    color = 'green';
  } else if (key = 'r') {
    color = 'red';
  }

  if (color) {
    let x = document.querySelector('.x');
    for (let index = 0; index < x.children.length; index += 1) {
      let child = x.children[index];
      child.style.background = color;
    }
  }
});
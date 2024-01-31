let button = document.getElementById('toggle');

button.onclick = function() {
  let notice = document.getElementById('notice');
  if (notice.classList.contains('hidden')) {
    notice.classList.remove('hidden');
  } else {
    notice.classList.add('hidden');
  }
}
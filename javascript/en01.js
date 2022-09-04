const input = document.getElementById('en1');

input.addEventListener('input', event => {
  if (input.value === '') {
    input.style.backgroundColor = 'lime';
  } else {
    input.style.backgroundColor = '';
  }
});

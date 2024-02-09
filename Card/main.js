const divElement = document.getElementById('note');

divElement.addEventListener('click', () => {
  setTimeout(() => {
    window.location.href = '/Message/index.html';
  }, 3000);
});

document.addEventListener("DOMContentLoaded", function() {
    includeHTML();
  });
  
  function includeHTML() {
    let elements = document.querySelectorAll('[data-include-html]');
    elements.forEach(function(el) {
      let file = el.getAttribute('data-include-html');
      fetch(file)
        .then(response => response.text())
        .then(data => {
          el.innerHTML = data;
        })
        .catch(error => {
          console.error('Error al cargar el archivo:', error);
        });
    });
  }
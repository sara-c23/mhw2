document.addEventListener("DOMContentLoaded", function() {
  const nextBtn = document.querySelector('#next');
  const prevBtn = document.querySelector('#prev');

  let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  function updateSlider() {
      slides.forEach(function(slide, index) {     /*for each*/
      slide.classList.remove('active');
      if (index === currentIndex) {
      slide.classList.add('active');
        }
      });
  }

  nextBtn.addEventListener('click', function() {
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateSlider();
      }
  });

  prevBtn.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
  });

  updateSlider(); // Imposta la prima immaginek come visibile

  
  const noteLegaliLinks = document.querySelectorAll('.note-legali');

  noteLegaliLinks.forEach(function(link) {              /*foreach*/
  link.addEventListener('click', function(event) {
          
  const container = this.parentElement;
  const existingParagraph = container.querySelector('p');

    if (existingParagraph) {
    container.removeChild(existingParagraph);
    } else {
    const new_p = document.createElement('p');
    new_p.textContent = 'Informazioni aggiuntive: La promozione è valida solo per i residenti in Italia. Termini e condizioni applicabili.';
    container.appendChild(new_p);
          }
    });
  });
});


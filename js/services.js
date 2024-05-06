// Detonar la animación sólamente cuando la tarjeta esté visible

function isCardInViewport(el){
  const rect = el.getBoundingClientRect();

  // Evaluamos la condición lógica de área del elemento
  // comparado con área visible
  return (rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


// Función para validar si la tarjeta se encuentra en pantalla
// cada vez que el usuario hace scroll
function handleScrollCard(){
  const elements = document.getElementsByClassName('grid-item');

  for (let i = 0; i<elements.length; i++){
    let element = elements[i]; // La i-ésima tarjeta <div class="grid-item">
    let titleContainer = element.getElementsByTagName('div')[0];
    let titulo = titleContainer.getElementsByTagName('h2')[0].innerHTML;
    let chars = titulo.length;
    let claseTexto = 'type'.concat(chars.toString());
    let delay = Math.floor(Math.random()*3000)+1;

    if (isCardInViewport(element)) {
      //console.log('Found it!');
      console.log(titulo);
      console.log(claseTexto);
      setTimeout(() => {
        element.classList.add('neon-animation');
        titleContainer.classList.add(claseTexto);
        //window.removeEventListener('scroll', handleScrollCard);
      }, delay)
    }
  }
  
}

window.addEventListener('scroll', handleScrollCard);
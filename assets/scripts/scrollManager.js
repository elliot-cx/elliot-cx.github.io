// Set scroll at 0 when reload
// window.scrollTo(0, 0);

const nav = document.querySelector('header nav');
const menu = nav.querySelectorAll('li');
const sections = document.querySelectorAll('section');

// Reveal methods

function scrollAnimationsUpdate() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    
    for (let i = 0; i < reveals.length; i++) {
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = -100;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }

    // Affichage de la nav barre

    if (window.scrollY > windowHeight - 150){
        nav.classList.add('active');
    }else{
        nav.classList.remove('active');
    }

    // Gestion du menu actif de la nav barre

    sections.forEach(e => {
      let top = window.scrollY;
      let offset = e.offsetTop - 150;
      let height = e.offsetHeight;
      let id = e.getAttribute('id');
      if (top >= offset && top < offset + height) {
        menu.forEach(link => {
          link.classList.remove('active','glass');
          document.querySelector(`header nav li[data-id="${id}"]`).classList.add('active','glass');
        });
      }
    });
}

window.addEventListener("scroll", scrollAnimationsUpdate);
scrollAnimationsUpdate();
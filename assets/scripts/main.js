const cursor = document.getElementById('cursor');

document.addEventListener('mousemove',(ev) => {
    setTimeout(() => {
        cursor.style.left = window.scrollX + ev.clientX - 23 + "px";
        cursor.style.top = window.scrollY + ev.clientY - 23 +"px";
    }, 100);
});

// Set scroll at 0 when reload
window.scrollTo(0, 0);

const nav = document.querySelector('header nav');

// Reveal methods

function reveal() {
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
}

window.addEventListener("scroll", reveal);
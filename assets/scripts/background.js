const scene = document.getElementById('scene');
const home = document.querySelector('#home > div');

const isMobile = navigator.userAgentData.mobile;

const loading_animation = anime.timeline({
    easing: 'easeOutExpo',
    complete: ()=>{
        if(!isMobile){cursor.classList.add('active')};
    }
});

loading_animation.add({
    targets: '#home main *',
    translateY: [-1200,0],
    duration: 2000,
    delay: anime.stagger(1000),
    complete: ()=>{
        // if (!isMobile) {
        for (let index = 0; index < 25; index++) {
            const div = document.createElement('div');
            let x = `${Math.random() * 200 + 50}vmax`;
            let y = `${Math.random() * 200 + 50}vh`;
            let z = `${Math.random() * 200 - 100}vmin`;
            let rx = `${Math.random() * 360}deg`;
            div.style.setProperty('--x', x);
            div.style.setProperty('--y', y);
            div.style.setProperty('--z', z);
            div.style.setProperty('--rx', rx);
            let delay = `${Math.random() * 2000}ms`;
            div.style.animationDelay = delay;
            scene.appendChild(div);
        }
        // }
        const scroll_el = document.createElement('div');
        scroll_el.classList.add('scroll-icon');
        home.appendChild(scroll_el);
    }
});
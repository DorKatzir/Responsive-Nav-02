
const navSlide = () => {
    
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    

    burger.addEventListener('click', ()=>{
        
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        links.forEach((link,index) => {
   
            if(link.style.animation){
                link.style.animation = '';
    
            }else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('anim');

    })

}


navSlide();

// const app = ()=>{

//     navSlide();

// }
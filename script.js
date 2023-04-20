//Défi : Esssayer d'améliorer le code js et en faire un code potable et facile d'amélioration

let image = document.querySelector('.img-wrapper')
let logo = document.querySelector('.logo')
let texte = document.querySelector('.texte')
let footer = document.querySelector('.footer')
let body = document.querySelector('body');
let liste = document.querySelectorAll('.navigation li')

const width = image.clientWidth;
const height = image.clientHeight;
let move = false;

if (move === false){
    image.style.backgroundPosition =  '50% 50%';
}
image.addEventListener('mousemove', (e) => {
    move =  true;
    var x = e.clientX;
    var y = e.clientY;
    var translationX = ((width / x) * 30) / 5;
    var translationY = ((height / y) * 30) / 5;
    image.style.backgroundPosition = (50 - translationX) + '%' +  (50 - translationY) +  '%';
})
image.addEventListener('mouseup', () => {
    move = false
}) 

window.onload = () => {

    window.setTimeout(function(){
        image.style.transform = 'scale(1.15)';
    }, 1000);
    window.setTimeout(function(){
        image.style.transform = 'translateY(-100px) translateX(0)';
    }, 3000);   
    window.setTimeout(function(){
        image.style.transform = 'translateY(0) translateX(0)';
    }, 4000);   

    window.setTimeout(positionnement, 5000);
    
    function positionnement(){
        logo.style.transform = 'translateX(0px)';
        liste_positionnement();
        texte.style.transform = 'translateY(0px)';
        footer.style.transform = 'translateY(0px)';
       
    };
    // window.setTimeout(function(){
    //     image.style.backgroundSize = 'cover';
    // },8500)
    function liste_positionnement(){
        i = 0.25
        liste.forEach(li => {
            li.style.transform = 'translateY(0)';
            li.style.transitionDelay =  1 + i + 's';
            i += 0.25
        });
    }
}
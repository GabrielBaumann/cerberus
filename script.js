document.addEventListener('DOMContentLoaded', function() {
    const words = document.querySelectorAll('.word');
    let currentIndex = 0;
    if (words.length > 0) {
        words[0].classList.remove('hidden');
    }
    setInterval(function() {
        words[currentIndex].classList.add('hidden');
        currentIndex = (currentIndex + 1) % words.length;
        words[currentIndex].classList.remove('hidden');
    }, 3000);
});

setInterval(function() {
    const currentWord = words[currentIndex];
    currentWord.style.opacity = '0';
    
    setTimeout(() => {
        currentWord.classList.add('hidden');
        currentIndex = (currentIndex + 1) % words.length;
        const nextWord = words[currentIndex];
        nextWord.classList.remove('hidden');
        nextWord.style.opacity = '1';
    }, 500); 
}, 2000);

function toggleMenu() {

    if (document.getElementById("mobile-menu").classList.contains("hidden")) {
        document.getElementById("mobile-menu").classList.replace("hidden", "teste");
    } else {
        document.getElementById("mobile-menu").classList.replace("teste", "hidden");
    } ;
}
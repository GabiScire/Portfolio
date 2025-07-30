document.addEventListener('DOMContentLoaded', () => {
    const typewriterTextElement = document.getElementById('typewriter-text');
    const phrases = [
        "Las buenas experiencias visuales conectan.",
        //"Creamos sitios web que inspiran.",
        //"Transformamos ideas en experiencias memorables."
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typingSpeed = 70;
    const erasingSpeed = 40;
    const pauseAfterTyping = 1500;
    const pauseAfterErasing = 500;

    function typeWriterEffect() {
        const currentPhrase = phrases[phraseIndex];

        // Controlar el parpadeo del cursor:
        if (charIndex === currentPhrase.length && !isDeleting) {
            typewriterTextElement.classList.add('blinking-cursor');
        } else if (charIndex === 0 && isDeleting) {
             typewriterTextElement.classList.remove('blinking-cursor');
        } else {
            typewriterTextElement.classList.remove('blinking-cursor');
        }

        if (!isDeleting) {
            if (charIndex < currentPhrase.length) {
                typewriterTextElement.textContent += currentPhrase.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriterEffect, typingSpeed + Math.random() * 30);
            } else {
                isDeleting = true;
                setTimeout(typeWriterEffect, pauseAfterTyping);
            }
        } else {
            if (charIndex > 0) {
                typewriterTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeWriterEffect, erasingSpeed + Math.random() * 10);
            } else {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(typeWriterEffect, pauseAfterErasing);
            }
        }
    }

    typeWriterEffect();
});
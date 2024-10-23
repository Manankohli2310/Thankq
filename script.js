// Function to create confetti
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    for (let i = 0; i < 25; i++) { // Adjust the number of confetti particles
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        // Randomize color
        confetti.classList.add('color' + (Math.floor(Math.random() * 10) + 1));
        // Randomize position
        confetti.style.left = Math.random() * 100 + 'vw';
        // Randomize animation duration to vary the falling speed
        confetti.style.animationDuration = 3 + Math.random() * 5 + 's';
        // Randomize size
        confetti.style.width = 8 + Math.random() * 4 + 'px';
        confetti.style.height = 15 + Math.random() * 10 + 'px';
        confettiContainer.appendChild(confetti);
        
        // Remove confetti after animation ends
        setTimeout(() => {
            confetti.remove();
        }, 5000); // Slightly longer than animation duration to allow complete animation
    }
}

// Trigger the confetti burst repeatedly
setInterval(createConfetti, 1000); // Burst every 2 seconds for continuous effect

window.onload = function() {
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
        const randomDir = Math.random() > 0.5 ? 1 : -1; // Random direction: 1 or -1
        const randomRotation = Math.random() * 270; // Random rotation between 0 and 360 degrees
        const randomDuration = Math.random() * (10 - 5) + 5; // Random duration between 5s and 10s

        balloon.style.setProperty('--random-dir', randomDir);
        balloon.style.setProperty('--random-rotation', randomRotation + 'deg');
        balloon.style.animationDuration = randomDuration + 's'; // Set random duration for each balloon
    });
};

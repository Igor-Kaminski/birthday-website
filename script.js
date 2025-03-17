function nextPage() {
  // Play the birthday audio
  const audio = document.getElementById('birthdayAudio');
  audio.play();

  // Redirect to birthday page after a short delay
  setTimeout(() => {
    window.location.href = "birthday.html";
  }, 1000);
}

// Generate random balloons
const balloonContainer = document.getElementById('balloonContainer');

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('ballon');

  const string = document.createElement('div');
  string.classList.add('string');

  // Random balloon color
  const colors = ['#FFB6C1', '#FFD700', '#ADFF2F', '#87CEFA', '#FF69B4'];
  balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  // Random horizontal position
  const x = Math.random() * window.innerWidth;
  balloon.style.left = x + 'px';

  // Random animation duration for floating
  const duration = 8 + Math.random() * 5;
  balloon.style.animationDuration = duration + 's';

  balloon.appendChild(string);
  balloonContainer.appendChild(balloon);

  // Remove balloon after it floats away
  setTimeout(() => {
    balloon.remove();
  }, duration * 1000);
}

// Create a new balloon every second
setInterval(createBalloon, 1000);

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("birthdayAudio");

    // Try to play automatically, but handle restrictions
    audio.play().catch(() => {
        // Add a click event to start audio if blocked
        document.addEventListener("click", function () {
            audio.play();
        }, { once: true });
    });
});

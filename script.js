let cookies = 0;
let clickValue = 1;
let autoClickerCost = 50;
let grandmaCost = 30;
let grandmaCount = 0;

let cookieElement = document.getElementById('cookie');
cookieElement.addEventListener('click', clickCookie);

function clickCookie() {
  playClickSound();
  cookies += clickValue + grandmaCount; // Add cookies from grandma
  updateCookiesDisplay();
  addFallingCookie();
}

function playClickSound() {
  // Add code to play a click sound (e.g., using an <audio> element or a library)
  // Example: const clickSound = new Audio('path/to/click-sound.mp3');
  // clickSound.play();
}

function addFallingCookie() {
  const fallingCookie = document.createElement('div');
  fallingCookie.className = 'falling-cookie';
  document.body.appendChild(fallingCookie);

  const cookieEmoji = document.createElement('span');
  cookieEmoji.innerHTML = '🍪';
  fallingCookie.appendChild(cookieEmoji);

  let positionX = Math.random() * window.innerWidth;
  let positionY = 0;
  let rotation = Math.random() * 360;
  let size = Math.random() * 40 + 20; // Random size between 20 and 60

  fallingCookie.style.left = `${positionX}px`;
  fallingCookie.style.top = `${positionY}px`;
  fallingCookie.style.width = `${size}px`;
  fallingCookie.style.height = `${size}px`;
  fallingCookie.style.transform = `rotate(${rotation}deg)`;

  const fallInterval = setInterval(() => {
    positionY += 5;
    fallingCookie.style.top = `${positionY}px`;

    if (positionY >= window.innerHeight) {
      clearInterval(fallInterval);
      document.body.removeChild(fallingCookie);
    }
  }, 20);
}

function buyAutoClick() {
  if (cookies >= autoClickerCost) {
    cookies -= autoClickerCost;
    startAutoClicker();
    autoClickerCost = Math.round(autoClickerCost * 1.5); // 50% more expensive
    updateCookiesDisplay();
  } else {
    alert(`Not Enough Cookies. You need ${autoClickerCost - cookies} more!`);
  }
}

function buyGrandma() {
  if (cookies >= grandmaCost) {
    cookies -= grandmaCost;
    grandmaCount++;
    grandmaCost = Math.round(grandmaCost * 1.5); // 50% more expensive
    updateCookiesDisplay();
    addGrandma();
  } else {
    alert(`Not Enough Cookies. You need ${grandmaCost - cookies} more to get a Grandma!`);
  }
}

function startAutoClicker() {
  autoClickerInterval = setInterval(function () {
    clickCookie();
  }, 1000);
}

function addGrandma() {
  const grandmaContainer = document.getElementById('grandma-container');
  const grandma = document.createElement('img');
  grandma.src = 'https://i.pinimg.com/474x/e1/8f/4a/e18f4a4c8e716afeb5a1bbf598db00be.jpg';
  grandma.alt = 'Grandma Image';
  grandma.className = 'grandma-img';
  grandmaContainer.appendChild(grandma);
}

function updateCookiesDisplay() {
  document.getElementById('cookies').innerText = `${cookies} cookies`;
}

let cookies = 0;
let clickValue = 1;
let upgradeCost = 10;
let autoClickerCost = 50;
let grandmaCost = 30;
let grandmaCount = 0;

let cookieElement = document.getElementById('cookie');
cookieElement.addEventListener('click', clickCookie);

function clickCookie() {
  cookies += clickValue + grandmaCount; // Add cookies from grandma
  updateCookiesDisplay();
  addChocolateChip();
}

function buyUpgrade() {
  if (cookies >= upgradeCost) {
    cookies -= upgradeCost;
    clickValue *= 2;
    upgradeCost = Math.round(upgradeCost * 1.5); // 50% more expensive
    updateCookiesDisplay();
  } else {
    alert(`Not Enough Cookies. You need ${upgradeCost - cookies} more!`);
  }
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

function addChocolateChip() {
  const chocolateChip = document.createElement('div');
  chocolateChip.className = 'chocolate-chip';
  const chipPosition = {
    top: Math.random() * 200,
    left: Math.random() * 200,
  };
  chocolateChip.style.top = `${chipPosition.top}px`;
  chocolateChip.style.left = `${chipPosition.left}px`;
  cookieElement.appendChild(chocolateChip);
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

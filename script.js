let cookies = 0;
let clickValue = 1;
let upgradeCost = 10;
let autoClickerCost = 50;
let grandmaCost = 30;
let grandmaCount = 0;

document.getElementById('cookie').addEventListener('click', clickCookie);

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
  const cookie = document.getElementById('cookie');
  const chipPosition = {
    top: Math.random() * 200,
    left: Math.random() * 200,
  };
  chocolateChip.style.top = `${chipPosition.top}px`;
  chocolateChip.style.left = `${chipPosition.left}px`;
  cookie.appendChild(chocolateChip);
}

function updateCookiesDisplay() {
  document.getElementById('cookies').innerText = `${cookies} cookies`;
}

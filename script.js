let cookies = 0;
let clickValue = 1;
let upgradeCost = 10;
let autoClickerCost = 50;
let autoClickerInterval;

function clickCookie() {
  cookies += clickValue;
  updateCookiesDisplay();
}

function buyUpgrade() {
  if (cookies >= upgradeCost) {
    cookies -= upgradeCost;
    clickValue *= 2;
    upgradeCost *= 2;
    updateCookiesDisplay();
  }
}

function buyAutoClick() {
  if (cookies >= autoClickerCost) {
    cookies -= autoClickerCost;
    startAutoClicker();
    autoClickerCost *= 2;
    updateCookiesDisplay();
  }
}

function startAutoClicker() {
  autoClickerInterval = setInterval(function() {
    clickCookie();
  }, 1000);
}

function updateCookiesDisplay() {
  document.getElementById('cookies').innerText = `${cookies} cookies`;
}

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

function startAutoClicker() {
  autoClickerInterval = setInterval(function () {
    clickCookie();
  }, 1000);
}

function updateCookiesDisplay() {
  document.getElementById('cookies').innerText = `${cookies} cookies`;
}

let cookies = 0;
let clickValue = 1;
let upgradeCost = 10;

function clickCookie() {
  cookies += clickValue;
  updateCookiesDisplay();
}

function buyUpgrade() {
  if (cookies >= upgradeCost) {
    cookies -= upgradeCost;
    clickValue *= 2; // Upgrade click value
    upgradeCost *= 2; // Increase upgrade cost
    updateCookiesDisplay();
  }
}

function updateCookiesDisplay() {
  document.getElementById('cookies').innerText = `${cookies} cookies`;
}

document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');
  const authForms = document.getElementById('authForms');
  const game = document.getElementById('game');
  const showUsersBtn = document.getElementById('showUsersBtn');
  const userList = document.getElementById('userList');
  const cookie = document.getElementById('cookie');
  const cookiesDisplay = document.getElementById('cookies');
  const grandmaContainer = document.getElementById('grandma-container');
  const buyGrandmaBtn = document.getElementById('buyGrandmaBtn');

  let cookies = 0;
  let grandmas = 0;

  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.json();
    alert(result.message);

    // Hide registration and login forms, show game and user list button
    authForms.style.display = 'none';
    game.style.display = 'block';
    showUsersBtn.style.display = 'block';
  });

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.json();
    alert(result.message);

    // Hide registration and login forms, show game and user list button
    authForms.style.display = 'none';
    game.style.display = 'block';
    showUsersBtn.style.display = 'block';
  });

  cookie.addEventListener('click', () => {
    cookies++;
    updateCookiesDisplay();
  });

  buyGrandmaBtn.addEventListener('click', () => {
    if (cookies >= 30) {
      cookies -= 30;
      grandmas++;
      updateCookiesDisplay();
      addGrandma();
    } else {
      alert('Not enough cookies to buy a grandma!');
    }
  });

  showUsersBtn.addEventListener('click', () => {
    // Fetch and display registered users
    fetch('/users')
      .then(response => response.json())
      .then(users => {
        userList.innerHTML = '';
        users.forEach(user => {
          const listItem = document.createElement('li');
          listItem.textContent = user.username;
          userList.appendChild(listItem);
        });
      });
  });

  function updateCookiesDisplay() {
    cookiesDisplay.textContent = `${cookies} cookies`;
  }

  function addGrandma() {
    const grandma = document.createElement('img');
    grandma.src = 'https://i.pinimg.com/474x/e1/8f/4a/e18f4a4c8e716afeb5a1bbf598db00be.jpg';
    grandma.alt = 'Grandma Image';
    grandma.className = 'grandma-img';
    grandmaContainer.appendChild(grandma);
  }

  setInterval(() => {
    cookies += grandmas;
    updateCookiesDisplay();
  }, 1000);
});

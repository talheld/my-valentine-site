const CONFIG = {
  expectedEmail: 'hila9il@gmail.com',
  expectedPassword: '08022020',
  question: "What is Hila's Nickname from London trip?",
  answer: 'Bao',
};

const loginSection = document.querySelector('#login');
const treasureSection = document.querySelector('#treasure');
const finalSection = document.querySelector('#final');

const loginForm = document.querySelector('#login-form');
const loginError = document.querySelector('#login-error');
const questionText = document.querySelector('#question-text');
const treasureBtn = document.querySelector('#treasure-btn');
const scroll = document.querySelector('#scroll');
const questionForm = document.querySelector('#question-form');
const questionError = document.querySelector('#question-error');
const heartsContainer = document.querySelector('.hearts');

questionText.textContent = CONFIG.question;

const showSection = (section) => {
  [loginSection, treasureSection, finalSection].forEach((item) => {
    if (item === section) {
      item.classList.add('show');
    } else {
      item.classList.remove('show');
    }
  });
};

const showError = (node, message) => {
  node.textContent = message;
  node.classList.add('shake');
  setTimeout(() => node.classList.remove('shake'), 500);
};

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  loginError.textContent = '';

  const email = document.querySelector('#email').value.trim().toLowerCase();
  const password = document.querySelector('#password').value.trim();

  if (email === CONFIG.expectedEmail.toLowerCase() && password === CONFIG.expectedPassword) {
    showSection(treasureSection);
  } else {
    showError(loginError, 'Oops! That is not the secret combo.');
  }
});

treasureBtn.addEventListener('click', () => {
  scroll.classList.remove('hidden');
});

questionForm.addEventListener('submit', (event) => {
  event.preventDefault();
  questionError.textContent = '';

  const answer = document.querySelector('#answer').value.trim().toLowerCase();
  if (answer === CONFIG.answer.toLowerCase()) {
    showSection(finalSection);
  } else {
    showError(questionError, 'Almost! Try again, cutie.');
  }
});

const sprinkleHearts = () => {
  const heartSymbols = ['💖', '💗', '💘', '💕', '💞', '💓'];
  for (let i = 0; i < 24; i += 1) {
    const span = document.createElement('span');
    span.textContent = heartSymbols[i % heartSymbols.length];
    span.style.left = `${Math.random() * 100}%`;
    span.style.top = `${Math.random() * 100}%`;
    span.style.animationDelay = `${Math.random() * 3}s`;
    span.style.fontSize = `${1 + Math.random() * 1.2}rem`;
    heartsContainer.appendChild(span);
  }
};

sprinkleHearts();

let currentPage = document.querySelector('.page.active');

// Page transitions
function transitionTo(pageId) {
  if (currentPage.id === pageId) return;
  const nextPage = document.getElementById(pageId);

  // Slide current page to left
  currentPage.classList.add('exit-left');

  // Prepare next page
  nextPage.style.left = '100%';
  nextPage.classList.add('active');

  setTimeout(() => {
    currentPage.classList.remove('active', 'exit-left');
    nextPage.style.left = '0';
    currentPage = nextPage;
  }, 600);
}

// Side menu toggle
function toggleMenu() {
  const menu = document.getElementById('sideMenu');
  if (menu.style.width === '250px') {
    menu.style.width = '0';
  } else {
    menu.style.width = '250px';
  }
}

// Change text color dynamically
function changeColor(color) {
  currentPage.style.color = color;
}

// Box animation
function startAnimation() {
  const box = document.getElementById('box');
  box.classList.add('animate');
  setTimeout(() => box.classList.remove('animate'), 4000);
}

// Portfolio card flip
function flipCard(card) {
  card.classList.toggle('flipped');
}

// Contact form
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;
  document.getElementById('formOutput').textContent =
    `Thank you ${name}! We'll contact you at ${email}. Your message: "${message}"`;
  form.reset();
});

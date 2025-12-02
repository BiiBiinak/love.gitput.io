// Set the correct password here
const CORRECT_PASSWORD = "iloveyou";

// Get DOM elements
const passwordScreen = document.getElementById('password-screen');
const loveScreen = document.getElementById('love-screen');
const passwordInput = document.getElementById('password-input');
const unlockBtn = document.getElementById('unlock-btn');
const lockBtn = document.getElementById('lock-btn');
const errorMessage = document.getElementById('error-message');
const floatingHeartsContainer = document.getElementById('floating-hearts');

// Function to create floating hearts
function createFloatingHearts() {
    // Clear existing hearts
    floatingHeartsContainer.innerHTML = '';
    
    // Create 20 floating hearts
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-float');
        
        // Random position and animation delay
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.width = (Math.random() * 20 + 10) + 'px';
        heart.style.height = (Math.random() * 20 + 10) + 'px';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        
        floatingHeartsContainer.appendChild(heart);
    }
}

// Function to show love screen
function showLoveScreen() {
    passwordScreen.classList.add('hidden');
    loveScreen.classList.remove('hidden');
    createFloatingHearts(); // Create floating hearts when showing love screen
}

// Function to show password screen
function showPasswordScreen() {
    loveScreen.classList.add('hidden');
    passwordScreen.classList.remove('hidden');
    passwordInput.value = '';
    errorMessage.classList.add('hidden');
    floatingHeartsContainer.innerHTML = ''; // Clear hearts when hiding love screen
}

// Function to check password
function checkPassword() {
    const enteredPassword = passwordInput.value.trim();
    
    if (enteredPassword === CORRECT_PASSWORD) {
        showLoveScreen();
    } else {
        // Show error message
        errorMessage.classList.remove('hidden');
        
        // Shake animation for error
        passwordInput.style.borderColor = '#ff6b6b';
        passwordInput.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(0)' }
        ], {
            duration: 300,
            iterations: 1
        });
    }
}

// Event listeners
unlockBtn.addEventListener('click', checkPassword);

lockBtn.addEventListener('click', showPasswordScreen);

// Allow Enter key to submit password
passwordInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
});

// Clear error when user starts typing
passwordInput.addEventListener('input', function() {
    if (!errorMessage.classList.contains('hidden')) {
        errorMessage.classList.add('hidden');
        passwordInput.style.borderColor = '#ddd';
    }
});

// Initialize floating hearts on load for decorative purposes
document.addEventListener('DOMContentLoaded', function() {
    // We won't create hearts on initial load since we start on password screen
    // Hearts will be created when user successfully enters password
});
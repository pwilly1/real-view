// Simple admin login check (replace this with real authentication)
const adminLoginForm = document.getElementById('adminLoginForm');
const loginSection = document.getElementById('login-section');
const propertyManagementSection = document.getElementById('property-management');
const logoutBtn = document.getElementById('logout-btn');

adminLoginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple login validation (in a real app, use server-side authentication)
    if (username === 'admin' && password === 'password123') {
        alert('Login successful');
        loginSection.style.display = 'none';
        propertyManagementSection.style.display = 'block';
        logoutBtn.style.display = 'inline-block';
    } else {
        alert('Invalid credentials');
    }
});

logoutBtn.addEventListener('click', function () {
    alert('You have been logged out');
    loginSection.style.display = 'block';
    propertyManagementSection.style.display = 'none';
    logoutBtn.style.display = 'none';
});


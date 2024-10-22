// Role selection buttons
const sellerBtn = document.getElementById('seller-btn');
const adminBtn = document.getElementById('admin-btn');

// Sections for seller and admin
const sellerSection = document.getElementById('seller-section');
const adminSection = document.getElementById('admin-section');

// Property listings area
const propertyListings = document.getElementById('property-listings');

// Role selection logic
sellerBtn.addEventListener('click', () => {
    sellerSection.style.display = 'block';
    adminSection.style.display = 'none';
});

adminBtn.addEventListener('click', () => {
    window.location.href = "admin-dashboard.html";  // Redirects to admin dashboard page
});

// Seller form submission
document.getElementById('sellerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const sellerName = document.getElementById('sellerName').value;
    const sellerEmail = document.getElementById('sellerEmail').value;
    const propertyName = document.getElementById('propertyName').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const address = document.getElementById('address').value;
    const bedrooms = document.getElementById('bedrooms').value;
    const bathrooms = document.getElementById('bathrooms').value;
    const sqft = document.getElementById('sqft').value;
    const imageFile = document.getElementById('image').files[0];

    // Handle image uploading and other property data submission (in a real application this would be sent to a server)
    const reader = new FileReader();
    reader.onload = function (e) {
        const newProperty = {
            sellerName,
            sellerEmail,
            propertyName,
            price,
            description,
            address,
            bedrooms,
            bathrooms,
            sqft,
            image: e.target.result
        };
        alert("Property submitted by seller!");
        // Add logic to display the property or send it to a server for admin approval
    };
    reader.readAsDataURL(imageFile);
});



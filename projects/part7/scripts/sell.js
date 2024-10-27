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

document.getElementById("sellerForm").onsubmit = async (e) => {
    e.preventDefault(); // prevent the default form submission

    const form = e.target;
    const formData = new FormData(form); // get form data
    const object = Object.fromEntries(formData); // convert form data to an object
    const json = JSON.stringify(object); // convert object to JSON
    const result = document.getElementById("result");

    result.innerHTML = "Submitting property...";

    const response = await sendEmail(json); // send form data using sendEmail function

    if (response.status == 200) {
        result.innerHTML = "Property successfully submitted";
    } else {
        result.innerHTML = "Sorry, there was an error submitting your property";
    }
};

const sendEmail = async (json) => {
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        return response;
    } catch (error) {
        console.log(error);
        document.getElementById("result").innerHTML = "Error sending property data";
    }
};



// Fetch the properties data from the JSON file
const getProperties = async () => {
    const url = "properties.json";  // Replace with the correct path to your JSON file

    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

// Function to display properties on the page
const showProperties = async () => {
    const propertyData = await getProperties();

    // Assuming the property listings will be displayed in a container with the id 'property-listings'
    const listingsContainer = document.getElementById("property-listings");
    listingsContainer.classList.add('listing-grid');

    propertyData.properties.forEach((property) => {
        listingsContainer.append(getPropertySection(property));
    });
};

// Function to generate HTML structure for each property
const getPropertySection = (property) => {
    const section = document.createElement("section");
    section.classList.add("listing-box");

    // Create an image element for the property image
    const img = document.createElement("img");
    img.classList.add('image-placeholder');
    img.src = property.img_name;  // Image source, assuming image name matches in JSON
    img.alt = "Property Image";
    section.append(img);

    // Create paragraph elements for price, description, address, and features
    const price = document.createElement("p");
    price.innerHTML = `<strong>Price:</strong> ${property.price}`;
    section.append(price);

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description:</strong> ${property.description}`;
    section.append(description);

    const address = document.createElement("p");
    address.innerHTML = property.address;
    section.append(address);



    return section;
};

// Call the function to display the properties on page load
showProperties();


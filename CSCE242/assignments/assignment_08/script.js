// Associative array using an array-like object
let imageInfo = [];
imageInfo["party.png"] = { title: "Party Time", description: "A party hat!" };
imageInfo["koala.png"] = { title: "bow tie", description: "He has a bow tie" };
imageInfo["umbrella.png"] = { title: "Rainy Day", description: "umbrella!" };
imageInfo["clipboard.png"] = { title: "Clipboard", description: "Time to take notes and stay organized." };
imageInfo["shovel.jpg"] = { title: "Gardening", description: "Ready to plant some flowers!" };
imageInfo["work.jpg"] = { title: "Laptop Work", description: "Getting things done on the laptop." };

// Reference to the image grid
const imageGrid = document.getElementById('imageGrid');

// Loop through the array-like object and create image elements
for (const imageName in imageInfo) {
    if (imageInfo.hasOwnProperty(imageName)) {
        const imageBox = document.createElement('div');
        imageBox.classList.add('image-box');

        const img = document.createElement('img');
        img.src = `images/${imageName}`;
        img.alt = imageInfo[imageName].title;
        img.dataset.title = imageInfo[imageName].title;
        img.dataset.description = imageInfo[imageName].description;

        // Add click event listener to display title and description
        img.addEventListener('click', (e) => {
            document.getElementById('image-title').innerText = e.target.dataset.title;
            document.getElementById('image-description').innerText = e.target.dataset.description;
        });

        // Append the image to the image box and the box to the grid
        imageBox.appendChild(img);
        imageGrid.appendChild(imageBox);
    }
}

// Bird class definition
class Bird {
    constructor(name, size, lifespan, food, habitat, fact, image) {
        this.name = name;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.fact = fact;
        this.image = image;
    }
}

// Create an array of Bird objects
const birds = [
    new Bird("Hummingbird", "2.5 inches", "3-5 years", "Nectar", "Trees", "They're nicknamed 'Hummers'", "hummingbird.jpg"),
    new Bird("Blue Jay", "9-12 inches", "7 years", "Insects, fruits, and nuts", "Forests", "Known for their intelligence", "bluejay.jpg"),
    new Bird("Cardinal", "8-9 inches", "3-4 years", "Seeds and grains", "Woodlands", "The males are bright red", "cardinal.jpg"),
    new Bird("Robin", "10 inches", "2 years", "Worms and insects", "Gardens", "Their song is a sign of spring", "robin.jpg")
];

// Function to create bird boxes and insert into the container

    const birdContainer = document.getElementById('bird-container');

    birds.forEach(bird => {
        // Create a container div for each bird
        const birdBox = document.createElement('div');
        birdBox.classList.add('bird-box')
        birdBox.onclick = () => showModal(bird);

        // Create and add the title
        const birdTitle = document.createElement('h3');
        birdTitle.innerHTML = bird.name;
        birdBox.appendChild(birdTitle);

        // Create and add the image
        const birdImage = document.createElement('img');
        birdImage.src = `images/${bird.image}`;
        birdImage.alt = bird.name;
        birdImage.className = 'bird-image';
        birdBox.appendChild(birdImage);

        // Append the bird box to the main container
        birdContainer.appendChild(birdBox);
    });


// Function to show the modal with bird details
function showModal(bird) {
    const modal = document.getElementById('bird-modal');
    const modalBody = document.getElementById('modal-body');

    // Clear previous content
    modalBody.innerHTML = '';

    // Create and add bird name
    const birdName = document.createElement('h2');
    birdName.textContent = bird.name;
    modalBody.appendChild(birdName);

    // Create and add bird attributes
    const birdDetails = [
        { label: "Size", value: bird.size },
        { label: "Lifespan", value: bird.lifespan },
        { label: "Food", value: bird.food },
        { label: "Habitat", value: bird.habitat },
        { label: "Interesting Fact", value: bird.fact }
    ];

    birdDetails.forEach(detail => {
        const detailParagraph = document.createElement('p');
        detailParagraph.innerHTML = `<strong>${detail.label}:</strong> ${detail.value}`;
        modalBody.appendChild(detailParagraph);
    });

    // Create and add bird image in modal
    const birdImage = document.createElement('img');
    birdImage.src = `images/${bird.image}`;
    birdImage.alt = bird.name;
    birdImage.className = 'bird-modal-image';
    modalBody.appendChild(birdImage);

    // Display the modal
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('bird-modal');
    modal.style.display = 'none';
}



  
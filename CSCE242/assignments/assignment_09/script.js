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

    get item() {
        // Create a section element for the bird item
        const section = document.createElement('section');
        section.classList.add('bird-box');
        // Set the onclick event to directly pass the bird object to showModal
        section.onclick = () => showModal(this);

        // Create and add the bird name
        const title = document.createElement('h3');
        title.textContent = this.name;
        section.appendChild(title);

        // Create and add the bird image
        const imageElement = document.createElement('img');
        imageElement.src = `images/${this.image}`;
        imageElement.alt = this.name;
        imageElement.className = 'bird-image';
        section.appendChild(imageElement);

        return section;
    }

    // Method to create and return a detailed section for modal display
    get expandedItem() {
        const section = document.createElement('section');

        // Create and add the bird name
        const birdName = document.createElement('h2');
        birdName.textContent = this.name;
        section.appendChild(birdName);

        // Create and add bird details
        const details = [
            `Size: ${this.size}`,
            `Lifespan: ${this.lifespan}`,
            `Food: ${this.food}`,
            `Habitat: ${this.habitat}`,
            `Interesting Fact: ${this.fact}`
        ];

        details.forEach(detail => {
            const detailParagraph = document.createElement('p');
            detailParagraph.textContent = detail;
            section.appendChild(detailParagraph);
        });

        // Create and add bird image in modal
        const birdImage = document.createElement('img');
        birdImage.src = `images/${this.image}`;
        birdImage.alt = this.name;
        birdImage.className = 'bird-modal-image';
        section.appendChild(birdImage);

        return section;
    }
}

// Create an empty array to store bird objects
const birds = [];

birds.push(new Bird("Hummingbird", "2.5 inches", "3-5 years", "Nectar", "Trees", "They're nicknamed 'Hummers'", "hummingbird.jpg"));
birds.push(new Bird("Blue Jay", "9-12 inches", "7 years", "Insects, fruits, and nuts", "Forests", "Known for their intelligence", "bluejay.jpg"));
birds.push(new Bird("Cardinal", "8-9 inches", "3-4 years", "Seeds and grains", "Woodlands", "The males are bright red", "cardinal.jpg"));
birds.push(new Bird("Robin", "10 inches", "2 years", "Worms and insects", "Gardens", "Their song is a sign of spring", "robin.jpg"));

const birdContainer = document.getElementById('bird-container');

birds.forEach((bird) => {
    birdContainer.append(bird.item);
});

// Function to show the modal with bird details
function showModal(bird) { 
    const modal = document.getElementById('bird-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = ''; 
    modalBody.appendChild(bird.expandedItem);
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('bird-modal');
    modal.style.display = 'none';
}






  
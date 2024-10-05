// Dog class definition
class Dog {
    constructor(title, breed, color, age, size, pic) {
      this.title = title;
      this.breed = breed;
      this.color = color;
      this.age = age;
      this.size = size;
      this.pic = pic;
    }
  
    // Create and return a dog section element with image and title
    get item() {
      const section = document.createElement("section");
      section.classList.add("dog");
  
      const img = document.createElement("img");
      img.src = this.pic;
      img.alt = this.title;
  
      const title = document.createElement("h3");
      title.innerText = this.title;
  
      section.append(img, title);

      const arrow = document.createElement("dog-name");
      arrow.href="#";
      arrow.innerHTML = "&#x2964";
      section.append(arrow);
  
      // Add click event to show the dog's details
      arrow.addEventListener("click", () => {
        displayDogDetails(this);
      });
  
      return section;
    }
  }
  
  // Array to store dog objects
  const dogs = [];
  dogs.push(new Dog("Coco", "Morkie", "Black", 5, "Small", "images/yorkie.jpg"));
  dogs.push(new Dog("Sam", "Golden Retriever", "Yellow", 1, "Medium", "images/golden-retriever.jpg"));
  dogs.push(new Dog("Gerald", "Pit Bull", "White", 3, "Large", "images/pit-bull.jpg"));
  
  // Function to display the dog list
  dogs.forEach((dog) => {
    document.getElementById("dog-list").append(dog.item);
  });
  
  function displayDogDetails(dog) {
    document.getElementById("dog-list").classList.add("hidden");
    const detailsSection = document.getElementById("dog-details");
    detailsSection.classList.remove("hidden");
  
    document.getElementById("dog-name").innerText = dog.title;
    document.getElementById("dog-pic").src = dog.pic;
    document.getElementById("dog-breed").innerText = `Breed: ${dog.breed}`;
    document.getElementById("dog-color").innerText = `Color: ${dog.color}`;
    document.getElementById("dog-age").innerText = `Age: ${dog.age} years`;
    document.getElementById("dog-size").innerText = `Size: ${dog.size}`;
  }
  
  
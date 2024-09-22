

document.getElementById("exercise2").onclick = () => {
    document.getElementById("colorSlider").style.display = "block";
    document.getElementById("colorSlider").classList.remove("hidden");
    document.getElementById("pictureChooser").classList.add("hidden");
       
};

document.getElementById("exercise1").onclick = () => {
    document.getElementById("colorSlider").classList.add("hidden");
    document.getElementById("colorSlider").style.display = "none";
    document.getElementById("pictureChooser").classList.remove("hidden");   
};


    document.getElementById("arrow").onclick = () => {
        const exercises = document.getElementById("exercises1");
        if (exercises.style.display === "none" || exercises.style.display === "") {
            exercises.style.display = "block";
        } else {
            exercises.style.display = "none";
        }
    };

    document.getElementById('slider').oninput = () => {
        const sliderValue = document.getElementById('slider').value; // Get the value from the slider (0 to 100)
        const newColor = `rgb(${sliderValue}, 0, 0)`;
        document.getElementById("colorSlider").style.backgroundColor = newColor;
        const message = document.getElementById("message")
        if (sliderValue <= 70) {
            message.innerHTML = "you are sad";
        }
        else if (sliderValue >= 71 && sliderValue <= 150){
            message.innerHTML = "you are mad";
        }
        else{
            message.innerHTML = "you are happy";
        }
};

document.getElementById("pictureChooser").onclick = (event) => {
    // Check if the clicked element is a button
    if (event.target.tagName === "BUTTON") {
        // Show the container
        document.getElementById("imgs").classList.remove("hidden");

        // Hide all images first
        document.getElementById("smallimg").classList.add("hidden");
        document.getElementById("medimg").classList.add("hidden");
        document.getElementById("bigimg").classList.add("hidden");

        // Determine which button was clicked and show the corresponding image
        if (event.target.id === "small") {
            document.getElementById("smallimg").classList.remove("hidden");
        } else if (event.target.id === "med") {
            document.getElementById("medimg").classList.remove("hidden");
        } else if (event.target.id === "large") {
            document.getElementById("bigimg").classList.remove("hidden");
        }
    }
};
    
    

// Define the count variable outside the function to track it globally
let count = 0;

// Add event listener to the count box
document.getElementById('countBox').addEventListener('click', function() {
    // Increase the count by 1
    count++;

    // Update the count display in the count box
    document.getElementById('countValue').innerText = count;
});

// Function to refresh the image by reloading the page
function refreshImage() {
    location.reload(); // Reload the page, which will cause the image to be refreshed
}

// Add event listener to the slider to move the square
document.getElementById('slider').addEventListener('input', function(event) {
    const sliderValue = event.target.value; // Get the value from the slider (0 to 100)
    
    const square = document.getElementById('square');
    
    // Calculate the new left position based on the slider value (proportional movement)
    // Slider value is from 0 to 100, so we want to move it across the width of the box (200px max)
    const maxMove = 200 - square.offsetWidth; // Maximum amount the square can move within the box (relative)
    
    const newLeft = (sliderValue / 100) * maxMove; // Calculate the left position based on slider value
    
    // Update the left position of the square
    square.style.left = `${newLeft}px`;
});






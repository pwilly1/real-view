let count = 0;


document.getElementById('countBox').addEventListener('click', function() {
    // Increase the count by 1
    count++;

    // Update the count display in the count box
    document.getElementById('countValue').innerText = count;
});

function refreshImage() {
    location.reload(); // Reload the page, which will cause the image to be refreshed
}

// Add event listener to the slider to move the square
document.getElementById('slider').addEventListener('input', function(event) {
    const sliderValue = event.target.value; // Get the value from the slider (0 to 100)
    
    const square = document.getElementById('square');
    
    const maxMove = 200 - square.offsetWidth; // Maximum amount the square can move within the box (relative)
    
    const newLeft = (sliderValue / 100) * maxMove; //find the px position of square
    
    // Update the left position of the square
    square.style.left = `${newLeft}px`;
});

















document.getElementById('toggle-nav').addEventListener('click', function(event) {  // (event) is parameter for click to store click information
    document.getElementById('nav').classList.toggle("hidden");
});




        const ball = document.getElementById('ball');
        const colorPicker = document.getElementById('colorPicker');

        colorPicker.addEventListener('input', function() {
            ball.style.backgroundColor = colorPicker.value;
        });








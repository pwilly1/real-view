document.getElementById("draw").onclick = () => {

    if( document.getElementById("stars").value < 0){
        document.getElementById("error").innerHTML = "Invalid input";
    }
    else if (document.getElementById("stars").value >= 0){
        document.getElementById("error").innerHTML = "";
        document.getElementById("canvas").innerHTML = ""
        let canvasWidth = canvas.clientWidth;
        let canvasHeight = canvas.clientHeight;

        // Generate stars
        for (let i = 0; i < document.getElementById("stars").value; i++) {
            let star = document.createElement("div"); // Create a new star div
            star.innerHTML = "&#9733;"; // Unicode star character
            star.style.position = "absolute";
            star.style.color = "#FFD700"; // Gold color for stars
            star.style.fontSize = "15px"; // Size of stars
            star.classList.add('star')
            
            // Random positions
            let x = Math.random() * (canvasWidth- 10); // Random x position
            let y = Math.random() * (canvasHeight - 10); // Random y position
    
            star.style.left = `${x}px`;
            star.style.top = `${y-10}px`;
            let message = document.createElement("div");
            star.onclick = () => {
                message.innerHTML = "";
                message.innerHTML = `I am number ${i + 1}`;
                document.getElementById("canvas").appendChild(message); 
                
            };
            
    
            // Append star to canvas
            document.getElementById("canvas").appendChild(star);
        }
    }
};
    

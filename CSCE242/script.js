const doStuff = () => {
alert("hrllo")
};


const myButton = document.getElementById("btn");
//myButton.onclick = doStuff;
myButton.onclick = () => {
    document.getElementById("message").innerHTML = "hellow";
    document.getElementById("stuff").classList.add("assignment-box");
};

//Showing data from an imput field
/*document.getElementById("text-first-name").onkeyup = () => {
    const textBox = document.getElementById("text-first-name");
    //console.log(textBox.value)
    document.getElementById("result").innerHTML = textBox.value;
} */

document.getElementById("text-first-name").onkeyup = (event) => {
   document.getElementById("result").innerHTML = event.target.value;    
}

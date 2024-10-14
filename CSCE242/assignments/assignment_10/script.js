const getIcecream = async() => {
    const url = "https://portiaportia.github.io/json/ice-creams.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showIcecream = async() => {
    const icecreams = await getIcecream();

    icecreams.forEach((icecream) => {
        document.getElementById("icecream-container").append(getIcecreamSection(icecream));
    })
}

const getIcecreamSection = (icecream) => {
    const section = document.createElement("section");

    const h3 = document.createElement("h3");
    h3.innerHTML = icecream.name;
    h3.classList.add('overlay');
    section.append(h3);
    const img = document.createElement("img");
    img.src = `images/${icecream.image}`;
    section.append(img);


    return section;
}

showIcecream();


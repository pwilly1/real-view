const getBrews = async() => {
    const url = "https://api.openbrewerydb.org/breweries";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showBrews = async() => {
    const breweries = await getBrews();
    breweries.forEach((brewery) => {
        document.getElementById("breweries-section").append(getBrewerySection(brewery));
    });
};

const getBrewerySection = (brewery) => {
    const section = document.createElement("section");
    const h3 = document.createElement("h3");
    h3.innerHTML = brewery.name; 
    section.append(h3);

    return section;
};

showBrews();



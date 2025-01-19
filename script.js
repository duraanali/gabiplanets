// Planet data with information about each planet
const planetData = {
    mercury: {
        name: "Mercury",
        image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800",
        description: "Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes only 87.97 Earth days, the shortest of all the Sun's planets.",
        facts: [
            "Closest planet to the Sun",
            "Has no moons",
            "Surface temperatures range from -180°C to 430°C",
            "Named after the Roman god of commerce"
        ]
    },
    venus: {
        name: "Venus",
        image: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=800",
        description: "Venus is the second planet from the Sun and is Earth's closest planetary neighbor. It's one of the four inner, terrestrial planets, and it's often called Earth's twin because it's similar in size and density.",
        facts: [
            "Hottest planet in our solar system",
            "Rotates backwards compared to most planets",
            "Has the longest rotation period of any planet",
            "Named after the Roman goddess of love"
        ]
    },
    earth: {
        name: "Earth",
        image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800",
        description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29.2% of Earth's surface is land and 70.8% is water.",
        facts: [
            "Only known planet with life",
            "Has one natural satellite - the Moon",
            "Has a protective magnetic field",
            "Only planet not named after a god or goddess"
        ]
    },
    mars: {
        name: "Mars",
        image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800",
        description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System. It is often called the 'Red Planet' because of its reddish appearance.",
        facts: [
            "Known as the Red Planet",
            "Has two moons: Phobos and Deimos",
            "Home to the largest volcano in the Solar System",
            "Named after the Roman god of war"
        ]
    },
    jupiter: {
        name: "Jupiter",
        image: "https://images.unsplash.com/photo-1614732484003-ef9881555dc3?w=800",
        description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets combined.",
        facts: [
            "Largest planet in our solar system",
            "Has the Great Red Spot storm",
            "Has at least 79 moons",
            "Named after the king of the Roman gods"
        ]
    }
};


const planetInfo = document.querySelector("#planetInfo") // meeshii aan wax galin laheyn
const planetNav = document.querySelector("#planetNav") // habkaan u badali laheyn planetka

function displayPlanetInfo(planetName) {
    // Get planet data
    const planet = planetData[planetName]

    // Clear existing data
    planetInfo.innerHTML = '';

    // Create the planet container div
    const planetContainer = document.createElement("div")
    planetContainer.className = "planet-content";

    // create image
    const planetImage = document.createElement("img")
    planetImage.src = planet.image;
    planetImage.alt = planet.name;
    planetImage.className = "planet-image"

    // Info container
    const planetDetails = document.createElement("div")
    planetDetails.className = "planet-details"

    // create h2
    const planetTitle = document.createElement("h2")
    planetTitle.textContent = planet.name;

    // create p
    const planetParagraph = document.createElement("p")
    planetParagraph.textContent = planet.description

    // create h3, interesting facts title
    const factsTitle = document.createElement("h3")
    factsTitle.textContent = "Interesting Facts:";

    // create the ul
    const factsList = document.createElement("ul")
    factsList.className = "fact-list"

    planet.facts.forEach((fact) => {
        const li = document.createElement("li");
        li.textContent = fact
        factsList.append(li) // isku xire, wuxuu isku xiray li iyo ul
    })

    // CONNECT ALL THE PARTS

    planetContainer.append(planetImage);
    planetContainer.append(planetDetails)
    planetDetails.append(planetTitle)
    planetDetails.append(planetParagraph)
    planetDetails.append(factsTitle)
    planetDetails.append(factsList)

    planetInfo.append(planetContainer)
}

function handlePlanetClick(event) {
    const button = event.target;
    if (!button.classList.contains('planet-button')) return;

    // Remove active class from all buttons
    document.querySelectorAll('.planet-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    button.classList.add('active');
    
    // Display planet information
    const planetKey = button.dataset.planet;
    displayPlanetInfo(planetKey);
}

planetNav.addEventListener("click", handlePlanetClick)
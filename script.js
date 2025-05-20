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


// Let's build the card displaying the planets

const planetInfo = document.querySelector("#planetInfo")
const planetNav = document.querySelector("#planetNav")

function displayPlanetInfo(planetName) {

    // Step 1: Give data
    const currentPlanet = planetData[planetName];

    // Step 2: Planet-kii hore meesha ka bixi
    planetInfo.innerHTML = "";

    // Step 3: Samee DIV ugu horeeyo ee wixii soo bandhigi lahaa planet-ka
    const planetMainDiv = document.createElement("div")
    planetMainDiv.className = "planet-content"

    // Step 4: Samee sawirka

    const planetImage = document.createElement("img")
    planetImage.src = currentPlanet.image;
    planetImage.alt = currentPlanet.name;
    planetImage.className = "planet-image"

    // Step 5: Samee planet details div

    const planetDetailsDiv = document.createElement("div")
    planetDetailsDiv.className = "planet-details"

    // Step 6: Samee h2 oo ah planet name
    const planetTitle = document.createElement("h2")
    planetTitle.textContent = currentPlanet.name;

    // Step 7: Samee p tag oo ah planet description
    const planetDesc = document.createElement("p")
    planetDesc.textContent = currentPlanet.description;


    // Step 8: Isku xir wixii aad kor kusoo sameysay adigoo isticmaalaayo append ama appendChild

    planetMainDiv.append(planetImage)
    planetMainDiv.append(planetDetailsDiv)

    planetDetailsDiv.appendChild(planetTitle)
    planetDetailsDiv.append(planetDesc)

    // Step 9: Ku xir main div-ka, PlanetInfo div oo ah midka ku jiro HTML-ka
    planetInfo.append(planetMainDiv)

    return planetInfo;
}

// Step 10: Samee function markii planet menu dhag lasiiyo loo yeeraayo, kaas oo u yeeraayo functionka aan kor ku sameynay siinaayo planet name.

function handlePlanetClick(event) {
    const button = event.target
    if (!button.classList.contains("planet-button")) return

    // remove active class from all buttons
    document.querySelectorAll(".planet-button").forEach(btn => {
        btn.classList.remove("active")
    })


    // add active to the clicked button
    button.classList.add("active")

    // call the displayPlanetInfo function and give the planet name
    const planetName = button.dataset.planet
    displayPlanetInfo(planetName) // invoke function-ka kor ku yaalo, kadib sii magaca planetka
}

// markii dhag lasiiyo, u yeer functionka handlePlanetClick

planetNav.addEventListener("click", handlePlanetClick)

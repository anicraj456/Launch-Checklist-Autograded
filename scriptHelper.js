// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById('missionTarget');

    missionTarget.innerHTML = 
                `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src='${imageUrl}'>`
    
}
 
 function validateInput(testInput) {
    if (testInput === "" || testInput === null || testInput === 0) {
        return `Empty`
    } else if ((!isNaN(Number(testInput)))) {
        return `Is a Number`
    } else {
        return 'Not a Number'
    }
    
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

  
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const launchStatus = document.getElementById("launchStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        alert("All fields are required!");

        //checking pilot,co-pilot are strings & fuelLevel,cargoLevel are numbers:     
       
     }else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
            alert("Make sure to enter vaild information for each field");
        }
        else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
            alert("Please enter numerical values for Fuel Level and Cargo Mass");
        }

        //status change for pilot and copilot:
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        list.style.visibility = 'hidden';
       
        //checking fuel levels,cargo mass and updating faulty items:
       
        if (Number(fuelLevel) < 10000) {
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            list.style.visibility = 'visible'; //list is faulty item
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            launchStatus.style.color = `red`;
       } else if (Number(cargoLevel) > 10000 && Number(fuelLevel) >= 10000) {
        fuelStatus.innerHTML = `Fuel level high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
            list.style.visibility = `visible`;
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            launchStatus.style.color = `red`;
        } else if (Number(cargoLevel) < 10000 && Number(fuelLevel) >= 10000) {
            list.style.visibility = `visible`;
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            launchStatus.innerHTML = `Shuttle is Ready for Launch`;
            launchStatus.style.color = `green`;
        }

        }
 
  async function myFetch() {

    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       console.log(response);
       return response.json()
        });
        console.log(planetsReturned);
        return planetsReturned;
}

function pickPlanet(planets) {
   //return random selected index
   let index = Math.floor(Math.random() * planets.length);
   //return planets[planetIndex];
   return planets[index];

}
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;

 

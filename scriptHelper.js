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
        
        //checking fuel levels,cargo mass and updating faulty items:
       
       if (Number(fuelLevel) < 10000 && Number(cargoLevel) < 10000 ) {
            list.style.visibility = 'visible'; //list is faulty item   
            pilotStatus.style.visibility = 'visible';
            copilotStatus.style.visibility = 'visible'; 
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            fuelStatus.innerHTML = `Fuel level too low for launch`; 
            fuelStatus.style.visibility = 'visible';
            cargoStatus.style.visibility = 'visible';
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            launchStatus.style.color = `red`;
       }else if (Number(fuelLevel) < 10000 && Number(cargoLevel) >=10000 ) {
            list.style.visibility = 'visible'; //list is faulty item   
            pilotStatus.style.visibility = 'visible';
            copilotStatus.style.visibility = 'visible'; 
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            fuelStatus.innerHTML = `Fuel level too low for launch`; 
            fuelStatus.style.visibility = 'visible';
            cargoStatus.style.visibility = 'visible';
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            launchStatus.style.color = `red`;
       } else if (Number(cargoLevel) >= 10000 && Number(fuelLevel) >= 10000) {
            pilotStatus.style.visibility = 'visible';
            copilotStatus.style.visibility = 'visible';
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            fuelStatus.style.visibility = 'visible';
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
            cargoStatus.style.visibility = 'visible';
            list.style.visibility = `visible`;
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            launchStatus.style.color = `red`;
        } else if (Number(cargoLevel) < 10000 && Number(fuelLevel) >= 10000) {
            pilotStatus.style.visibility = 'hidden';
            copilotStatus.style.visibility = 'hidden';
            list.style.visibility = `visible`;
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            fuelStatus.style.visibility = 'hidden';
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            cargoStatus.style.visibility = 'hidden';
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

 

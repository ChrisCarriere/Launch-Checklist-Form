// Write your JavaScript code here!

window.addEventListener("load", function () {
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         event.preventDefault();
         alert("All fields are required!");
      } else if (isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true) {
         event.preventDefault();
         alert("Fuel Level and Cargo Mass should be numbers.");
      } else {
         event.preventDefault();
         let shuttleStatus = document.getElementById("faultyItems");
         let launchStatus = document.getElementById("launchStatus");
         let pilotStatus = document.getElementById("pilotStatus");
         let copilotStatus = document.getElementById("copilotStatus");
         let fuelStatus = document.getElementById("fuelStatus");
         let cargoStatus = document.getElementById("cargoStatus");

         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;

         if (fuelLevel.value < 10000) {
            fuelStatus.innerHTML = "There is not enough fuel for the journey.";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            shuttleStatus.style.visibility = "visible";
         } else if (cargoMass.value > 10000) {
            cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            shuttleStatus.style.visibility = "visible";
         } else {
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
         }

      }
   })
});

fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
   return response.json();
})
   .then(function (json) {
      let containerTag = document.getElementById("missionTarget");
      let missionDestination = [];
      missionDestination.push(json[5]);

      containerTag.innerHTML = `<h2>Mission Destination</h2>
       <ol>
          <li>Name: ${missionDestination[0].name}</li>
          <li>Diameter: ${missionDestination[0].diameter}</li>
          <li>Star: ${missionDestination[0].star}</li>
          <li>Distance from Earth: ${missionDestination[0].distance}</li>
          <li>Number of Moons: ${missionDestination[0].moons}</li>
       </ol>
       <img src="${missionDestination[0].image}">`
   })

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

const vehicles = [
  { type: "Bus", 
    fuel: "Diesel", 
    passengers: 45, 
    stops: ["Nørrebrogade", "Elmegade"] },

  { type: "Bil", 
    fuel: "Benzin", 
    passengers: 4, 
    ownedBy: "Klaus" },

  { type: "Cykel", 
    fuel: "Rugbrød", 
    passengers: 0, 
    ownedBy: "Jonas", 
    isElectric: true },

  { type: "Bil", 
    passengers: 5, 
    ownedBy: "Elon", 
    isElectric: true },

  { type: "MC", 
    fuel: "Benzin", 
    passengers: 2, 
    ownedBy: "Fonda" },

  { type: "Cykel", 
    fuel: "Rugbrød", 
    passengers: 2, 
    ownedBy: "Vingegård", 
    isTandem: true },

  { type: "MC", 
    fuel: "Benzin", 
    passengers: 2, 
    ownedBy: "Yolanda" },

  { type: "Knallert", 
    fuel: "Benzin", 
    passengers: 1, 
    ownedBy: "Børge" },

  { type: "Knallert", 
    fuel: "Benzin", 
    passengers: 1, 
    ownedBy: "Jonas" },

  { type: "Løbehjul", 
    passengers: 1, 
    isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");

const allElectricArr = vehicles.filter(isVehiclesElectric);
console.log(allElectricArr);

showTheseVehicles(allElectricArr)
// const elec = vehicles.filter();
function isVehiclesElectric(vehicle){
if (vehicle ===  undefined){
  return true;
} else {
  return false
}
}

// Alle elektrisk køretøjer
// const elec = vehicles.filter();
// function isVehiclesElectric(vehicle){
// if (vehicle.isElectric ===  true){
//   return true;
// } else {
//   return false
// }
// }

// Alle køretøjer med mere end to sæder
// function isVehiclesElectric(vehicle){
//   if (vehicle.passengers > 2){
//     return true;
//   } else {
//     return false
//   }
//   }


// Alle køretøjer der er elektriske og ejet af Jonas
//   function isVehiclesElectric(vehicle){
//     if (vehicle.isElectric === true,
//       vehicle.ownedBy === "Jonas"
//     ){
//       return true;
//     } else {
//       return false
//     }
//     }


  // Alle rugbrødsdrevne køretøjer hvor der er plads til mere end 1 person
    // function isVehiclesElectric(vehicle){
    //   if (vehicle.fuel === "Rugbrød" &&
    //     vehicle.passengers > 1 
    //   ){
    //     return true;
    //   } else {
    //     return false
    //   }
    //   }


function showTheseVehicles(arr) {

  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  ${each.stops ? `<td>${each.stops}</td>` : `<td> - </td>`}
  <td>${each.ownedBy}</td>
  ${each.isElectric ? `<td>${each.isElectric}</td>` : `<td> - </td>`}
  ${each.isTandem ? `<td>${each.isTandem}</td>` : `<td> - </td>`}
  </tr>`;
});
}
// <td>${each.stops}</td>



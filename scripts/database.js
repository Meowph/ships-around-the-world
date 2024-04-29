const database = {
  docks: [
      { id: 1, location: "Shanghai, China", volume: "43.5" },
      { id: 2, location: "Busan, South Korea", volume: "21.6" },
      { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
      { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
  ],

  haulers: [
      {haulerId: 1, name: "Beaut-Hauler", cargoShips:"Sea Besse", dockId: 3},
      {haulerId: 2, name: "Snoodle-Hauler", cargoShips:"Jane II", dockId:1},
      {haulerId: 3, name: "Blue Sky-Hauler", cargoShips:"R.S.S Sea-Sick", dockId:4},
      {haulerId: 4, name: "Starry-Hauler", cargoShips:"Mad Ship", dockId:2}
  ],

  cargoShips: [
    {cargoId:1, name:"WIIILSON!", haulerId: 4},
    {cargoId:2, name:"Sea Besse", haulerId: 4},
    {cargoId:3, name:"Jane II", haulerId: 1},
    {cargoId:4, name:"R.S.S Sea-Sick", haulerId: 3},
    {cargoId:5, name:"Mad Ship", haulerId: 3},
    {cargoId:6, name:"We're Gonna Need a Bigger Boat", haulerId: 2},
  ]
}

export const getDocks = () => {
  // You write the code for copying the array and returning it
  return database.docks.map(dock => ({...dock}))
}

export const getHaulingShips = () => {
  // You write the code for copying the array and returning it
  return database.haulers.map(haulers => ({...haulers}))
}

export const getShippingShips = () => {
  // You write the code for copying the array and returning it
  return database.cargoShips.map(ships => ({...ships}))
}

//Create taskId (foreign key) for each array since they are connected by that data
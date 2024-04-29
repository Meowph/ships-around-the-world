const database = {
  docks: [
      { id: 1, location: "Shanghai, China", volume: "43.5" },
      { id: 2, location: "Busan, South Korea", volume: "21.6" },
      { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
      { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
  ],

  haulers: [
      {id: 1, name: "Beaut-Hauler", assignment:"Sea Besse", docking:"Shanghai, China"},
      {id: 2, name: "Snoodle-Hauler", assignment:"Jane II", docking:"Busan, South Korea"},
      {id: 3, name: "Blue Sky-Hauler", assignment:"R.S.S Sea-Sick", docking:"Rotterdam, The Netherlands"},
      {id: 4, name: "Starry-Hauler", assignment:"Mad Ship", docking:"Antwerp, Belgium"}
  ],

  shippingShips: [
    {id:1, name:"WIIILSON!", assigned: "Zeerbra-Hauler"},
    {id:2, name:"Sea Besse", assigned: "Beaut-Hauler"},
    {id:3, name:"Jane II", assigned: "Snoodle-Hauler"},
    {id:4, name:"R.S.S Sea-Sick", assigned: "Blue Sky-Hauler"},
    {id:5, name:"Mad Ship", assigned: "Starry-Hauler"},
    {id:6, name:"We're Gonna Need a Bigger Boat", assigned: "No Name-Hauler"},
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
  return database.shippingShips.map(ships => ({...ships}))
}

//Create taskId (foeeign key) for each array since they are connected by that data
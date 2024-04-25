const database = {
  docks: [
      { id: 1, location: "Shanghai, China", volume: "43.5" },
      { id: 2, location: "Busan, South Korea", volume: "21.6" },
      { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
      { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
  ],

  haulers: [
      {id: 1, name: "", assignment:"Sea Besse", docking:"Shanghai, China"},
      {id: 2, name: "", assignment:"Jane II", docking:"Busan, South Korea"},
      {id: 3, name: "", assignment:"R.S.S Sea-Sick", docking:"Rotterdam, The Netherlands"},
      {id: 4, name: "", assignment:"Mad Ship", docking:"Antwerp, Belgium"}
  ],

  shippingShips: [
    {id:1, name:" ", assigned: " "},
    {id:2, name:"Sea Besse", assigned: " "},
    {id:3, name:"Jane II", assigned: " "},
    {id:4, name:"R.S.S Sea-Sick", assigned: " "},
    {id:5, name:"Mad Ship", assigned: " "},
    {id:6, name:" ", assigned: " "},
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
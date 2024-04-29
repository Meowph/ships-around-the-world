import { getShippingShips } from "./database.js"

const ships = shippingShips() //this stays outside of export {} if it needs to be accessed by more then one export. If not, if can either saty outside of {} or go inside them 


export const getShippingShips = () => {
    //const ships = getShippingShips()

    let shipsHTML = "<ul>"

    for (const ship of ships) {
        // Convert each hauler object to an <li> and append to the shipsHTML string
        shipsHTML += 
        `
        <li>${ship.name}</li>
        <li>${ship.assigned}</li>
        `
    }

    shipsHTML += "</ul>"

    return shipsHTML
}
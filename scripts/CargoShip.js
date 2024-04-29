import { getShippingShips } from "./database.js"

const ships = getShippingShips() //this stays outside of export {} if it needs to be accessed by more then one export. If not, if can either saty outside of {} or go inside them 


export const shippingShips = () => {
    //const ships = getShippingShips()

    let shipsHTML = "<ul>"

    for (const ship of ships) {
        // Convert each hauler object to an <li> and append to the shipsHTML string
        shipsHTML += 
        `
        <li data-type="ships">${ship.name}</li>
        `
    }

    shipsHTML += "</ul>"

    return shipsHTML
}
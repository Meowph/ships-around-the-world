import { getShippingShips } from "./database.js"


export const getShippingShips = () => {
    const ships = getShippingShips()

    let shipsHTML = "<ul>"

    for (const ship of ships) {
        // Convert each hauler object to an <li> and append to the shipsHTML string
        shipsHTML += 
        `<li>${ship.id}</li>
        <li>${ship.name}</li>
        <li>${ship.assigned}</li>
        `
    }

    shipsHTML += "</ul>"

    return shipsHTML
}
import { getHaulingShips } from "./database.js"


export const getHaulingShips = () => {
    const haulers = getHaulingShips()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        // Convert each hauler object to an <li> and append to the haulersHTML string
        haulersHTML += 
        `<li>${hauler.id}</li>
        <li>${hauler.assignment}</li>
        <li>${hauler.docking}</li>
        `
    }

    haulersHTM += "</ul>"

    return haulersHTM
}
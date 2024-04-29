import { getHaulingShips } from "./database.js"

const haulers = getHaulingShips()


export const haulingShips = () => {

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        // Convert each hauler object to an <li> and append to the haulersHTML string
        haulersHTML += 
        `
        <li>${hauler.assignment}</li>
        <li>${hauler.docking}</li>
        `
    }

    haulersHTML += "</ul>"

    return haulersHTML
}
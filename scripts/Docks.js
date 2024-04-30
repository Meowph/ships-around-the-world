import { getDocks, getHaulingShips } from "./database.js"



export const DockList = () => {
    const docks = getDocks()

    const locations = docks.map(dock => dock.location).sort() // For getting the sorted list of dock locations

    let docksHTML = "<ul>"

    for (const location of locations) {
    const dock = docks.find(dock => dock.location === location) // For finding the dock object with the matching location
        // Convert each dock object to an <li> and append to the docksHTML string

        docksHTML += 
        `
        <li 
        data-type = "dock"
        data-id = "${dock.id}"
        data-name = "${dock.location}"
        data-haulerId = "${dock.haulerId}"
        >${dock.location} can hold ${dock.volume} million tons of cargo</li>
        `
    }

    docksHTML += "</ul>"

    return docksHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        /*
            Your job is to design an algorithm and implement it
        */
       if (itemClicked.dataset.type === "dock") {

            let haulerName = {name: "Incorrect"} //This will show if hauler name is not displaying properly

            const haulers = getHaulingShips()

            const dockDataId = itemClicked.dataset.id 

        for (const hauler of haulers) {

            if (hauler.dockId === parseInt(dockDataId)) {
                haulerName = hauler.name
                }
            }
                window.alert(`The ${itemClicked.dataset.name} dock is currently unloading ${haulerName}`)
       }
    }
)
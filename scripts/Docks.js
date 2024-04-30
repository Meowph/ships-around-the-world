import { getDocks, getHaulingShips } from "./database.js"



export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += 
        `
        <li 
        data-type = "docks"
        data-id = "${dock.id}"
        data-haulerId = "${dock.haulerId}"
        >${dock.location}</li>
        <li>${dock.volume}</li>
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
       if (itemClicked.dataset.type === "docks") {
        const dockId = parseInt(itemClicked.dataset.haulerId)

        let dockPort = {""}
       }
    }
)
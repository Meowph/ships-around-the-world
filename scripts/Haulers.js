import { getHaulingShips, getShippingShips} from "./database.js"

export const haulingShips = () => {
    const haulers = getHaulingShips()

    let haulersHTML = "<ul>"

    for (const haul of haulers) {
        // Convert each hauler object to an <li> and append to the haulersHTML string
        haulersHTML += 
        `
        <li data-type="haulers" 
        data-id="${haul.haulerId}">
        ${haul.name}</li>
        `
    }

    haulersHTML += "</ul>"

    return haulersHTML
};

//haul.innerHTML = haulingShips();


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a hauler list item clicked?
        if (itemClicked.dataset.type === "hauler") {


            // Get the id of the hauler clicked
                const haulerId = itemClicked.dataset.haulerid

            // Start a counter variable at 0
            let shipCounter = 0

            // Iterate all of the shipping ships
            const cargoShips = getShippingShips ()

            for (const cargo of cargoShips) {
                // Does the haulerId foreign key match the id?
                if (parseInt(haulerId) === cargo.haulerId) {

                    // Increase the counter by 1
                    shipCounter++
                }
            }        
                window.alert(`This hauler is carrying ${shipCounter} shipping ships`)
        }
    }
)
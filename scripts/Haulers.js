import { getshippingShips } from "./CargoShip.js";
import { getHaulingShips} from "./database.js"

export const haulingShips = () => {

    let haulersHTML = "<ul<h2>Hauling Ships</h2>"
    const haulers = getHaulingShips()

    for (const hauler of haulers) {
        // Convert each hauler object to an <li> and append to the haulersHTML string
        haulersHTML += 
        `
        <li data-type="number" data-id="${hauler.id}">${hauler.name}</li>
        <li>${hauler.docking}</li>
        `
    }

    haulersHTML += "</ul>"

    return haulersHTML
};

hauler.innerHTML = haulingShips();


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "number") {
            const haulerId = itemClicked.dataset.id;
            let shipCounter = 0;
            const shippingShips = getshippingShips()

            for (const ship of shippingShips) {
                if (parseInt(haulerId) === ship.haulerId) {
                    shipCounter++
                }
            }
            window.alert(`This Hauler is currently carrying ${shipCounter} shipping ships`)
    
            }

        // Was a hauler list item clicked?

            // Get the id of the hauler clicked

            // Start a counter variable at 0

            // Iterate all of the shipping ships

                // Does the haulerId foreign key match the id?

                    // Increase the counter by 1

    }
)
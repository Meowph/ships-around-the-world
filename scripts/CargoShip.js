import { getShippingShips, getHaulingShips } from "./database.js"

const cargos = getShippingShips() //this stays outside of export {} if it needs to be accessed by more then one export. If not, if can either saty outside of {} or go inside them 


export const cargoShippingShips = () => {
    //const ships = getShippingShips()

    let cargoHTML = "<ul>";

    for (const cargo of cargos) {
        // Convert each hauler object to an <li> and append to the cargoHTML string
        cargoHTML += 
        `
        <li data-type = "cargo"
        data-id = "${cargo.id}"
        data-haulerId = "${cargo.haulerId}"
         data-name = "${cargo.name}">
         ${cargo.name}</li>
        `;
    }

    cargoHTML += "</ul>";

    return cargoHTML;
};


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
            
            if (itemClicked.dataset.type === "cargo") {  // Was a shipping ship list item clicked?

                const cargoId = parseInt(itemClicked.dataset.haulerid) // Get the haulerId value of the shipping ship clicked
                
                let haulingShip = {name: "Incorrect"} // Define a default object for the found hauler

                const haulers = getHaulingShips() // Iterate the array of hauler objects
               
                for (const hauler of haulers) {  
                    
                    if (cargoId === hauler.id) { // Does the haulerId foreign key match the id of the current hauler?

                        haulingShip = hauler; // Reassign the value of `haulingShip` to the current hauler

                    }
                }
                        // Show an alert to the user with this format...
                        // Palais Royal is being hauled by Seawise Giant
                        window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip.name}`)
            }
    }

)

//original issue was the data was showing up as incorrect because Cargo in database was labeled incorrectly. It was originally cargoId, which is just needed to be id 
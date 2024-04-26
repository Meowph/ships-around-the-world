import { getShippingShips } from "./CargoShip.js"
import { getDocks } from "./Dock.js"
import { getHaulingShips } from "./Haulers.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping Ship Ships</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Shipping Ships</h2>
        ${getShippingShips()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Hauling Ships</h2>
        ${getHaulingShips ()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Docks</h2>
        ${getDocks()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML
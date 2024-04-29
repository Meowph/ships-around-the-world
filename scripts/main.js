import { haulingShips } from "./Haulers.js"
import { shippingShips } from "./CargoShip.js"
import { DockList } from "./Docks.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping Ship Ships</h1>
<article class="details">
    <section class="detail--column list">
        <h2>Hauling Ships</h2>
        ${haulingShips()}
    </section>
    <section class="detail--column list">
        <h2>Shipping Ships</h2>
        ${shippingShips()}
    </section>
    <section class="detail--column list">
        <h2>Docks</h2>
        ${DockList()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML
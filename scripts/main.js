/**
Render the applications HTML to the DOM
Listening for stateChanged custom event
 */

import { Governors } from "./Governors.js"

const mainContainer = document.querySelector("#container")

mainContainer.innerHTML = Governors()
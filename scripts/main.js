/**
Render the applications HTML to the DOM
Listening for stateChanged custom event
 */

import { Exomine } from "./Exomine.js"

const mainContainer = document.querySelector("#container")

const renderAppHTML = () => mainContainer.innerHTML = Exomine()

renderAppHTML()

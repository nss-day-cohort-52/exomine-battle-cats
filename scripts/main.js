/**
Render the applications HTML to the DOM
Listening for stateChanged custom event
 */

import { Exomine } from "./Exomine.js"

// get a reference to the HTML element with an id of "container" and store it in the variable mainContainer
const mainContainer = document.querySelector("#container")

// define a variable renderAppHTML whose value is a function that renders the app HTML to the DOM
const renderAppHTML = () => mainContainer.innerHTML = Exomine()

// invoke the function renderAppHTML to render the HTML to the DOM
renderAppHTML()

/**
Generate HTML for governor dropdown based on current state
Listen for change in user selection and set state based on user input
 */
import { getGovernors, setGovernor } from "./database.js";

const governors = getGovernors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "governor") {
            setGovernor(parseInt(event.target.value))
        }
    }
)

export const Governors = () => {
    return `
        <div class="governorDropdown">
            <label>Select a governor</label>
            <select id="governor">
            <option value="0">Select a governer...</option>
                ${governors.map(governor =>
        `<option value="${governor.id}">
                    ${governor.name}
                    </option>
                `)
        }
            </select>
        </div>
    `
}
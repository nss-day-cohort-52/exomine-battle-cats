/**
Generate HTML for governor dropdown based on current state
Listen for change in user selection and set state based on user input
 */
import { getGovernors } from "./database.js";

const governors = getGovernors()

export const Governors = () => {
    return `
        <div class="governorDropdown">
            <label>Select a governor</label>
            <select id="governor">
            <option value="0">Select a governer...</option>
                ${governors.map(governor =>
        `<option>${governor.name}</option>
                `)
        }
            </select>
        </div>
    `
}
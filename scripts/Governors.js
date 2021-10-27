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
            ${governors.map(governor => governor.name)}
        </div>
    `
}
/**
 * Responsibility: Generate application HTML based on current state
 */
export const Exomine = () => { // Generate app HTML based on current state

  return `
  <section class="flex column top-section">

    <div class="header flex row">
      <h1 class="heading1 text-center flex">Exomine</h1>
    </div>

    <div class="flex row">
      <section class="container flex column">

        <article class="governors container flex column">
          <select id="governorSelect">
            <option value="0">Please select a Governor...</option>
          </select>
        </article>

        <article class="facilities container flex column">
          <select id="facilitySelect">
            <option value="0">Please select a Facility...</option>
          </select>
        </article>

      </section>

      <article class="colony-minerals container flex column">
        <h2 class="heading2 text-center flex">Colony Minerals</h2>

      </article>

    </div>

  </section>

  <section class="bottom-section flex row">

      <article class="facility-minerals container flex column">
        <h2 class="heading2 text-center flex">Minerals Available</h2>

      </article>

    <article class="cart container flex column">
      <h2 class="heading2 text-center flex">Cart</h2>
    </article>

  </section>
  `
}

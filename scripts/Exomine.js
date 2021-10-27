// Generate HTML for application

export const Exomine = () => {
  // This function returns a string of HTML
  return `
  <section class="flex column top-section">
    <div class="header flex row">
      <h1 class="heading1 text-center flex">Exomine</h1>
    </div>

    <section class="flex row">
      <article class="governors container flex column">
      <h2 class="heading2 text-center flex">Select a Governor</h2>

      </article>
      <article class="colony-minerals container flex column">
      <h2 class="heading2 text-center flex">Colony Minerals</h2>

      </article>

    </section>

  </section>

  <section class="bottom-section flex row">
    <article class="facilities container flex column">
    <h2 class="heading2 text-center flex">Select a Facility</h2>

    </article>

    <article class="facility-minerals container flex column">
    <h2 class="heading2 text-center flex">Available Facility Minerals</h2>

    </article>

    <article class="cart container flex column">
      <h2 class="heading2 text-center flex">Cart</h2>
    </article>

  </section>
  `
}

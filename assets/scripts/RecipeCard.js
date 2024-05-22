// RecipeCard.js

class RecipeCard extends HTMLElement {
  // Called once when document.createElement('recipe-card') is called, or
  // the element is written into the DOM directly as <recipe-card>
  constructor() {
    super(); // Inherit everything from HTMLElement

    // EXPOSE - START (All expose numbers start with A)
    this.shadow = this.attachShadow({ mode: 'open' }); // A1. Attach the shadow DOM to this Web Component (leave the mode open)
    this.container = document.createElement('article'); // A2. Create an <article> element - This will hold our markup once our data is set
    this.style = document.createElement('style'); // A3. Create a style element - This will hold all of the styles for the Web Component

    this.style.innerHTML = ` /* copy everything INSIDE the <style> tag from cardTemplate.html */`; // A4. Insert all of the styles from cardTemplate.html into the <style> element you just made (copy everything INSIDE the <style> tag>)
    this.shadow.appendChild(this.container); // A5. Append the <style> and <article> elements to the Shadow DOM
  }

  /**
   * Called when the .data property is set on this element.
   *
   * For example:
   * let recipeCard = document.createElement('recipe-card'); // Calls constructor()
   * recipeCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
   *
   * @param {Object} data - The data to pass into the <recipe-card> must be of the
   *                        following format:
   *                        {
   *                          "imgSrc": "string",
   *                          "imgAlt": "string",
   *                          "titleLnk": "string",
   *                          "titleTxt": "string",
   *                          "organization": "string",
   *                          "rating": number,
   *                          "numRatings": number,
   *                          "lengthTime": "string",
   *                          "ingredients": "string"
   *                        }
   */
  set data(data) {
    // If nothing was passed in, return
    if (!data) return;

    // Set the contents of the <article> with the <article> template given in cardTemplate.html and the data passed in
    this.container.innerHTML = ` 
      <!-- Replace placeholders with data -->
      <img src="${data.imgSrc}" alt="${data.imgAlt}">
      <a href="${data.titleLnk}" target="_blank">${data.titleTxt}</a>
      <span>${data.organization}</span>
      <div>
        <span class="rating">${data.rating}</span>
        <span class="numRatings">(${data.numRatings} ratings)</span>
      </div>
      <p>${data.lengthTime}</p>
      <p>${data.ingredients}</p>
    `;
  }
}

// A8. Define the Class as a customElement so that you can create 'recipe-card' elements
customElements.define('recipe-card', RecipeCard);

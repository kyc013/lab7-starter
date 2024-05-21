class RecipeCard extends HTMLElement {
    // Called once when document.createElement('recipe-card') is called, or
    // the element is written into the DOM directly as <recipe-card>
    constructor() {
        super(); // Inherit everything from HTMLElement

        // EXPOSE - START (All expose numbers start with A)
        this.shadow = this.attachShadow({ mode: 'open' }); // A1. TODO - Attach the shadow DOM to this Web Component (leave the mode open)
        const article = document.createElement('article'); // A2. TODO - Create an <article> element - This will hold our markup once our data is set
        const style = document.createElement('style'); // A3. TODO - Create a style element - This will hold all of the styles for the Web Component

        style.innerHTML = `/* copied from cardTemplate.html */`; // A4. TODO - Insert all of the styles from cardTemplate.html into the <style> element you just made (copy everything INSIDE the <style> tag>)
        article.innerHTML = `/* copied from cardTemplate.html and filled with data */`; // A7. TODO - Set the contents of the <article> with the <article> template given in cardTemplate.html and the data passed in (You should only have one <article>, do not nest an <article> inside another <article>). You should use template literals (template strings) and element.innerHTML for this.
        // A6. TODO - Select the <article> we added to the Shadow DOM in the constructor

        this.shadow.appendChild(article);
        this.shadow.appendChild(style);
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
        if (!data) return;

        const articleElement = this.shadow.querySelector('article');
    articleElement.innerHTML = ` 
                                  <img src="${data.imgSrc}" alt="${data.imgAlt}">
                              <a href="${data.titleLnk}" target="_blank">${data.titleTxt}</a>
                              <p>${data.organization}</p>
                              <p>${data.rating} out of ${data.numRatings} stars</p>
                              <p>${data.lengthTime}</p>
                              <p>${data.ingredients}</p>
                                `;
    }
}

customElements.define('recipe-card', RecipeCard); // A8. TODO - Define the Class as a customElement so that you can create 'recipe-card' elements

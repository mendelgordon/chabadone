if (window.location.href.includes(5879661)) {
    window.location.pathname = "/templates/fundraising/default_cdo/aid/6430627/jewish/Campaign.htm";
}
if (window.location.href.includes(6430627)) {
    /**
     * Generates HTML for a list.
     *
     * @param {Array} items - The list items.
     * @param {string} className - The class name for the list container.
     * @param {string} listTitle - The title for the list.
     * @return {string} - The HTML for the list.
     */
    function generateListHTML(items, className, listTitle) {
        // Concatenate the list items with line breaks and spaces between them.
        const listItems = items.join('<br /><br />');

        // Generate the HTML for the list container.
        const listHTML = `
            <div class='${className}'>
                <!-- List container -->
                <h3>${listTitle}</h3>
                <h4 class='fs-matcher-title'>
                    <!-- List title -->
                    ${listItems}
                </h4>
            </div>
        `;

        return listHTML;
    }

    /**
     * Inserts HTML content into the DOM.
     *
     * @param {string} selector - The CSS selector for the element to be inserted into.
     * @param {string} content - The HTML content to be inserted.
     */
    function insertContent(selector, content) {
        // Find the element in the DOM based on the selector
        const element = document.querySelector(selector);

        // If the element exists, insert the content
        if (element) {
            element.innerHTML = content;
        } else {
            // If the element doesn't exist, log an error message
            console.error(`Element with selector "${selector}" not found.`);
        }
    }

    /**
     * Main function to generate and insert matchers content
     * 
     * This function generates the HTML for the matchers content and inserts it into the DOM.
     * It creates two lists of donors and community pillars and sorts them alphabetically.
     * The matchers content is then inserted into the DOM using the insertContent function.
     */
    function generateMatchersContent() {
        // Array of matching donors sorted alphabetically
        const matchingDonors = ["Marat & Leah Kushner", "Brian Levin & Family", "Steve & Allison Shapiro", "In memory of Valery ben Zalman"].sort();
        // Array of community pillars sorted alphabetically
        const communityPillars = ["Ben & Jesse Terner", "Elliott & Nava Gorbaty", "Jody Maier", "Moshe & Jodie Schwartz", "Natalio & Giselle Pincever"].sort();

        // Generate the HTML for the matchers content
        const matchersContent = `
      <!-- Matchers content -->
      <div class='row fs-matchers-list'>
        <!-- List of matching donors -->
        ${generateListHTML(matchingDonors, 'fs-matcher fs-matcher-right', 'Matching Donors')}
        <!-- Hearts donate image -->
        <img src='/media/images/1276/EfiK12767809.png' class='heart-donate' />
        <!-- List of community pillars -->
        ${generateListHTML(communityPillars, 'fs-matcher fs-matcher-left', 'Community Pillars')}
      </div>
    `;

        // Insert the matchers content into the DOM using the insertContent function
        insertContent('.fs-matchers-list', matchersContent);
    }

    // Call the main function
    generateMatchersContent();
}
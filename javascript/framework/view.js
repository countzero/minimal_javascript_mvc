/**
 * The framework view.
 */
export class FrameworkView {

    /**
     * Fetches a resource from an URL.
     *
     * @param {string} url A URL to request.
     * @returns {Promise} Promise object representing the fetch result.
     */
    render (elementId ) {

        document.getElementById(elementId).innerHTML = this.createHtmlFromTemplate();
    }

    createHtmlFromTemplate (element, ) {
    }
};

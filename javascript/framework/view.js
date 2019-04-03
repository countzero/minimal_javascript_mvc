/**
 * The framework view.
 */
export class FrameworkView {

    /**
     * Renders a template into a specific DOM element.
     *
     * @param {object} domElement A reference to a DOM element.
     */
    render (domElement) {

        domElement.innerHTML = this.renderTemplateWithModel();
    }

    /**
     * Render the template with the view model.
     *
     * @returns {string} The rendered template HTML that can be injected in the DOM.
     */
    renderTemplateWithModel () {

        return this.template(this.model);
    }
}

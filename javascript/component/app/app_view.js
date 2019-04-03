import { FrameworkView } from './../../framework/view.js';

/**
 * The app view.
 *
 * @extends FrameworkView
 */
export class AppView extends FrameworkView {

    /**
     * Initialize the view.
     *
     * @param {object} viewModel The model containing the data for the template.
     */
    constructor (viewModel) {

        super();

        this.model = viewModel;

        this.template = model => `
            <div class='app'>
                <h1>${model.title}</h1>
                <b>This is a minimal ES Module experiment. You can see the source code at <a href="https://github.com/countzero/minimal_javascript_mvc">https://github.com/countzero/minimal_javascript_mvc</a>.</b>
                <div id="systems-container"></div>
            </div>
        `;
    }
}

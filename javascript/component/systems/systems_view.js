import { FrameworkView } from './../../framework/view.js';

/**
 * The systems view.
 *
 * @extends FrameworkView
 */
export class SystemsView extends FrameworkView {

    /**
     * Initialize the view.
     *
     * @param {object} viewModel The model containing the data for the template.
     */
    constructor (viewModel) {

        super();

        this.model = viewModel;

        this.template = model => {

            return model.systems
                .map(system => `<div><h2>${system.name}</h2></div>`)
                .join('');
        };
    }
}

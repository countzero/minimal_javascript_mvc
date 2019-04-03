import { SystemsModel } from './systems_model.js';
import { SystemsView } from './systems_view.js';

/**
 * Class handling the systems.
 */
export class SystemsController {

    /**
     * Construct all controllers.
     */
    constructor () {

        this.systemsModel = new SystemsModel();
        this.systemsView = new SystemsView(this.systemsModel);
    }

    /**
     * Initialize the systems.
     */
    async initialize () {

        try {

            await this.systemsModel.fetch('api/systems.json');

        } catch (error) {

            console.error(error);

            const userDemandsRetry = this.showModal(
                'Failed to fetch a resource from the API, do you want to retry?'
            );

            if (userDemandsRetry) {
                this.initialize();
            }

            return;
        }

        this.systemsView.render(document.getElementById('systems-container'));
    }

    /**
     * Show a modal with a specific question.
     *
     * @param {string} message The message that will be displayed in the modal.
     * @returns {boolean} The users choice.
     */
    showModal (message) {

        // eslint-disable-next-line no-alert
        return window.confirm(message);
    }
}

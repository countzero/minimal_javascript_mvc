import { FrameworkView } from './../../framework/view.js';

/**
 * The app view.
 * @extends FrameworkModel
 */
export class AppView extends FrameworkModel {
/**
     * Construct all controllers.
     */
    constructor () {

        this.template = new AppModel();

        this.model

        this.systemsController = new SystemsController();
    }
}

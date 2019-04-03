import { FrameworkModel } from './../../framework/model.js';

/**
 * The app model.
 *
 * @extends FrameworkModel
 */
export class AppModel extends FrameworkModel {

    /**
     * Initialize the model.
     */
    constructor () {

        super();

        this.title = 'Minimal JavaScript MVC';
    }
}

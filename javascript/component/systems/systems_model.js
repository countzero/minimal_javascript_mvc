import { FrameworkModel } from './../../framework/model.js';

/**
 * The systems model.
 *
 * @extends FrameworkModel
 */
export class SystemsModel extends FrameworkModel {

    /**
     * Initialize the model.
     */
    constructor () {

        super();

        this.systems = [];
    }
}

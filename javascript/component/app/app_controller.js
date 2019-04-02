import { AppModel } from './app_model.js';
import { AppView } from './app_view.js';
import { SystemsController } from './../systems/systems_controller.js';

/**
 * Class controlling the application.
 */
export class AppController {

    /**
     * Initialize the application on construct.
     */
    constructor () {

        this.appModel = new AppModel();
        this.appView = new AppView(this.appModel);

        this.systemsController = new SystemsController();
    }

    /**
     * Start the application.
     */
    start () {

        this.appView.render(document.body);
    }
}

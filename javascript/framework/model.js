/**
 * The framework model.
 */
export class FrameworkModel {

    /**
     * Fetch a JSON resource from an URL.
     *
     * @param {string} url A URL to a JSON resource.
     * @returns {Promise} Promise object representing the fetch result.
     */
    fetch (url) {

        return new Promise(async (resolve, reject) => {

            try {

                const responseText = await this.requestUrl(url);
                const responseJson = JSON.parse(responseText);
                this.mergeFetchedDataIntoModel(responseJson);

            } catch (error) {

                reject(error);
                return;
            }

            resolve(this);
        });
    }

    /**
     * Merge the fetched data into the model.
     *
     * @param {string} responseJson The fetched data in a JSON format.
     */
    mergeFetchedDataIntoModel (responseJson) {

        Object.keys(responseJson).forEach(key => {

            const modelPropertyType = typeof this[key];

            if (modelPropertyType === 'undefined') {

                throw new Error(`The model property '${key}' has to be defined.`);
            }

            if (modelPropertyType !== typeof responseJson[key]) {

                throw new Error(`The type of the fetched property '${key}' must be '${modelPropertyType}'.`);
            }

            this[key] = responseJson[key];
        });
    }

    /**
     * Fetches a resource from an URL.
     *
     * @param {string} url A URL to request.
     * @returns {Promise} Promise object representing the fetch result.
     */
    async requestUrl (url) {

        return new Promise((resolve, reject) => {

            let xhr;

            try {

                xhr = new XMLHttpRequest();

                xhr.onreadystatechange = () => {

                    const xhrDoneStateValue = 4;

                    if (xhr.readyState !== xhrDoneStateValue) {
                        return;
                    }

                    const httpOkStatusCode = 200;

                    if (xhr.status === httpOkStatusCode) {

                        resolve(xhr.responseText);
                    }

                    reject(new Error('The HTTP status code is not OK.'));
                };

                xhr.open('GET', url, true);
                xhr.send();

            } catch (error) {

                reject(error);
            }
        });
    }
}

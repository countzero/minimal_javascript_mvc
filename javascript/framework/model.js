/**
 * The framework model.
 */
export class FrameworkModel {

    /**
     * Fetches a resource from an URL.
     *
     * @param {string} url A URL to request.
     * @returns {Promise} Promise object representing the fetch result.
     */
    fetch (url) {

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

                    reject(
                        new Error('The HTTP status code is not OK.'),
                        xhr
                    );
                };

                xhr.open('GET', url, true);
                xhr.send();

            } catch (error) {

                reject(
                    error,
                    xhr
                );
            }
        });
    }
}

let Index = require("./controllers/index");

class Routes {
    static setup(app) {
        // Just to check if it's alive.
        app.get('/', Index.showWorking);

        // GET REQUESTS

        // POST REQUESTS
    }
}

module.exports = Routes;

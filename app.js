const initializeDB = require("./db/db");

// console.log(initializeDB)
(async function () {
    await initializeDB();
    const app = require("./api");
    await app.start();
})();
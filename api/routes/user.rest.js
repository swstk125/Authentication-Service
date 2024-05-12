const express = require("express");
router = express.Router();
const serviceHandler = require("../../utils/serviceHandler");
const UserService = require("../services/UserService");

router.get("/", async (req, res) => {
    let query = req.query;
    query = JSON.parse(JSON.stringify(query));
    for(const key in query){
        if (typeof query[key] === 'string') {
            query[key] = JSON.parse(query[key]);
        }
    }
    console.log(query);
    return serviceHandler(req, res, UserService.getUser());
});

router.post("/", async ( req, res ) => {
    return serviceHandler(req, res, UserService.register(req.body));
})



module.exports = router;
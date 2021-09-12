const express = require("express");
const shirtItemsModel = require("../models/shirtItemsModel");
const router = express.Router();


router.post("/add", async function (request, response) {
    //console.log("request.body", request.body);
  try {
    const dataBaseCreationResponse = await shirtItemsModel.create(request.body);
    console.log("dataBaseCreationResponse", dataBaseCreationResponse);
    response.send({ result: "Success" });
  } catch (error) {
    console.log("error occured", err);
  }
});


router.get("/getAll", async function (request, response) {
  try {
    const listOfshirtItems = await shirtItemsModel.find({}, { __v: 0, _id: 0 });
   // console.log("data from database", listOfshirtItems);
    response.send({ result: listOfshirtItems });
  } catch (error) {
    console.log("error occured", err);
  }
});

module.exports = router;




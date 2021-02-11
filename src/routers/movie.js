const express = require('express');
const Movie = require('../models/movie')
const router = new express.Router();

router.post("/", async (req, res) => {
  try {
    const { search = "", sort = "", searchType = "" } = req.body;
    let result;

    if (search) {
      const regExp = new RegExp(search); 

      if (searchType === "movie") {
        result = await Movie.find({ name: { $regex: regExp } })
      } else {
        result = await Movie.find({ director: { $regex: regExp } })
      }
    } else if (sort) {
      switch(sort) {
        case "popularity":
          result = await Movie.find().sort(`-${sort}`);
          break;
        case "director":
          result = await Movie.find().sort(sort);
          break;
        case "name":
          result = await Movie.find().sort(sort);
          break;
        default:
          result = result;
      }
    } else {
      result = await Movie.find();
    }
    res.json(result)
  } catch (err) {
    res.send({ "errorMsg": err, "status": "failure" })
  }
})

module.exports = router

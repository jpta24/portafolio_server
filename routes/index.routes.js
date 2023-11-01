const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/test", (req, res, next) => {
  res.json("Test from Backend WORKING");
});


module.exports = router;

const express = require('express');
const router = express.Router();
const jokeController = require("../controllers/joke.controller");

router.post("", jokeController.createBroma);
router.get("", jokeController.getBromas);
router.get("/random", jokeController.getBromaRandom);
router.get("/:id", jokeController.getBromaById);
router.put("/:id", jokeController.updateBroma);
router.delete("/:id", jokeController.deleteBroma);

module.exports = router;
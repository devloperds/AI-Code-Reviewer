const express = require('express');
const aiController = require("../controllers/ai.controllers");

const router = express.Router();

// POST endpoint for code review
router.post("/get-review", aiController.getReview);

module.exports = router;    
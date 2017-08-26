const express = require('express');
const router = express.Router();

const impressionController = require('../controllers/ImpressionController.js');

router
  .route('/impressions')
  .get(impressionController.getAllimpressions)
  .post(impressionController.addOneimpression);

module.exports = router;

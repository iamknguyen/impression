const models = require('../config/db.config.js');

module.exports = {

  getAllimpressions: function(req, res, next) {
    models.Impression.findAll({})
    .then((data) => {
      res.json(data.length);
    });
  },

  addOneimpression: function(req, res, next) {
    var uniqueId = Math.random().toString(36).substring(2) 
    + (new Date()).getTime().toString(36);
    res.json(req.query)
    // models.Impression.create({
    //   uuid: req.query.uuid,
    //   timestamp: req.query.timestamp
    // })
    //  .then((user) => {
    //    res.json(user);
    //  })
    //  .catch((err) => {
    //    res.json(err);
    //  });
  }
}
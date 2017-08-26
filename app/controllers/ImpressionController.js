const models = require('../config/db.config.js');

module.exports = {

  /**
   * Get the number of impressions
   */
  getAllimpressions: function(req, res, next) {
    models.Impression.count()
    .then((data) => {
      res.json(data);
    });
  },

  /**
   * Will add an impression to the database
   * returns 200 if successful
   * returns 400 if uuid and timestamp were not passed in
   */
  addOneimpression: function(req, res, next) {
    if(req.query.uuid && req.query.timestamp){
      models.Impression.findOne({
        where: {
          uuid: req.query.uuid
        }
      })
      .then(data => {
        if(data) res.status(400).json("Duplicate uuid detected, please try again")
        else{
          models.Impression.create({
            uuid: req.query.uuid,
            timestamp: req.query.timestamp
          })
           .then((user) => {
             res.json("saved");
           })
           .catch((err) => {
             res.json(err);
           });
        }
      })
      .catch((err) => {
        res.json(err);
      });
    }else{
      res.status(400).json("Please enter a valid uuid and timestamp")
    }
    
  }
}
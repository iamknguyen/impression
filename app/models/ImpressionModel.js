

module.exports = (sequelize, DataTypes) => {
  
  const Impression = sequelize.define('Impression', {
      uuid: {
        type: DataTypes.STRING
      },
      timestamp: {
        type: DataTypes.STRING
      }
    }, {
    /**
     * freezeTableName: Model tableName will be the same as the model name
     *  */ 
    freezeTableName: true
  })
  
  return Impression;
}
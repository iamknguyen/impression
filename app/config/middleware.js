const morgan = require('morgan');
const bodyParser = require('body-parser');

module.exports = (app, express) => {
   app.use(bodyParser.urlencoded({extended:true}));
   app.use(bodyParser.json());
   app.use(morgan('dev'));
   app.use(express.static(__dirname + 'public'));
}
const dotenv = require('dotenv');
dotenv.config();
const url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds153974.mlab.com:53974/cinema`
const port = process.env.PORT || 5000;

exports.MongoURL = url;
exports.port = port;
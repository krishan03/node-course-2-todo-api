const mongoose = require('mongoose');
//instructing moongoose to use promises
mongoose.Promise=global.Promise;
mongoose.connect(process.env.MONGODB_URI );

module.exports={
    mongoose:mongoose
};
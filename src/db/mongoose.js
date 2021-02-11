const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DATABASE_CONNECTION, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true
});

const con = mongoose.connection

con.on('open', function(){
  console.log("DB connected...")
})

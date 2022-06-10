const mongoose = require('mongoose')
const connect = function(){
   if(process.env.NODE_ENV !== 'production'){
      mongoose.set('debug', true)
   }
   mongoose.connect('mongodb://mango:1234@localhost:27017/sensor',
      {dbName:'sensor', useNewUrlParser: true},
      function(error){
         if(error){
            console.log('mongodb connection failed');
         } else {
            console.log('mongodb connection success');
         }
      }
   )
}
mongoose.connection.on('error', function(error){
   console.error('mongodb connection error', error);
})
mongoose.connection.on('disconnected', function(){
   console.error('mongodb connection disconnected. retry connection');
   connect();
})

module.exports = connect

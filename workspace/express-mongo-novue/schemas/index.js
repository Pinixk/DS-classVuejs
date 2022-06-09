const mongoose = require('mongoose')
const connect = function(){
   if(process.env.NODE_ENV !== 'production'){
      mongoose.set('debug', true)
   }
   mongoose.connect('mongodb://sensor:1234@localhost:27017/admin',
      {dbName:'sensor', useNewUrlParser: true, useCreateIndex: true,},
      function(err){
         if(err){
            console.log('mongodb connection failed');
         } else {
            console.log('mongodb connection success');
         }
      }
   )
}
mongoose.connect.on('error', function(error){
   console.log('mongodb connection error', error);
})

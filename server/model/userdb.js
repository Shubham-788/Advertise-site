const mongoose=require('mongoose');

// const userShema= new mongoose.Schema({
//     googleId:String,
//     displayName:String,
//     email:String,
//     // image:String
// },{timestamps:true});
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    age: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    hobby: {
      type: [{
        type: String,
        enum: ['food', 'sport', 'music', 'travelling']
      }]
    }
  }, { timestamps: true });
  
  
const userdb=new mongoose.model('user',userSchema);

module.exports=userdb;
const mongoose=require('mongoose');

// const userShema= new mongoose.Schema({
//     googleId:String,
//     displayName:String,
//     email:String,
//     // image:String
// },{timestamps:true});
const loginSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    roles: [{
      type: String,
      enum: ['user', 'business'],
      default: 'user'
    }]
  },{ timestamps: true });
  
const logindb=new mongoose.model('login',loginSchema);

module.exports=logindb;
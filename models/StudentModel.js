import mongoose from "mongoose";


const studentSchema=mongoose.Schema({
name:{
    type:String,
    required:true
},
phone:{
    type:Number,
    required:true
},
course:{
    type:String,
    required:true
},
education:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
Address:{
    type:String
}

});
export default mongoose.model("student", studentSchema)
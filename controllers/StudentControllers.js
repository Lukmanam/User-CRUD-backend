import Student from "../models/StudentModel.js";



 const addStudent=async(req,res)=>{
    try {
        console.log("in postman",req.body)
        const {name,phone,course,education,email,Address}=req.body;
        console.log(name)

        const student=new Student({ 
            name:name,
            phone:phone,
            course:course,
            education:education,
            email:email,
            Address:Address})
       
            await student.save()
        res.status(200,"user added successfully")
        
    } catch (error) {
        console.log(error);
        
    }

}
export {
    addStudent
}
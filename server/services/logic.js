
// import db

const db = require('./db')

// get all employee

const allEmployee = () => 
{
    return db.Employee.find().then(
        (result) => {
            if (result) 
            {
                return {
                    statusCode: 200,
                    employee: result
                }
            }
            else
            {
                return{
                    statusCode:404,
                    message:'Employees not found'
                }
            }
        }
    )
}


// add employee

const addEmployee=(id,empname,age,designation,salary)=>{
    return db.Employee.findOne({id}).then(
        (result)=>{
            if(result)
            {
                return{
                    statusCode:401,
                    message:'employee already exist'
                }
            }
            else
            {
                const newEmployee=db.Employee({id,empname,age,designation,salary})
                newEmployee.save()

                return{
                    statusCode:200,
                    message:'employee added successfully'
                }
            }
        }
    )

}

// delete employee

const delEmployee=(id)=>{
    return db.Employee.deleteOne({id}).then(
        (result)=>{
            if(result)
            {
                return{
                    statusCode:200,
                    message:'Delete successful'
                }
            }
            else
            {
                return{
                    statusCode:404,
                    message:'No data found'
                }
            }
        }
    )
}

// get perticular employee details

const getAnEmployee=(id)=>{
    return db.Employee.findOne({id}).then(
        (result)=>{
            if(result)
            {
                return{
                    statusCode:200,
                    employee:result
                }
            }
            else
            {
                return{
                    statusCode:401,
                    message:'invalid user'
                }
            }
        }
    )
}

// Update employee

const updateEmployee=async(id,empname,age,designation,salary)=>{
    return db.Employee.findOne({id}).then(
        (result)=>{
            if(result)
            {
                result.id=id,
                result.empname=empname,
                result.age=age,
                result.designation=designation,
                result.salary=salary

                result.save()  // save data into mongodb
                
                return{
                    statusCode:200,
                    message:'Update successfull'
                }
            }
            else
            {
                return{
                    statusCode:401,
                    message:'Employee not found'
                }
            }
        }
    )

}



module.exports={
    allEmployee,
    addEmployee,
    delEmployee,
    getAnEmployee,
    updateEmployee

}
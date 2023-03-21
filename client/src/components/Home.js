import React from 'react'
import employee from './Employee'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link,useNavigate } from 'react-router-dom';
import { FaUserEdit, FaTrashAlt, FaUserPlus } from "react-icons/fa";
import { useState,useEffect } from 'react';
import axios from 'axios'


function Home() 
{
    const [allEmployees,setAllEmployees]=useState([''])

    const fetchData=async()=>{
        const result=await axios.get('http://localhost:8000/allemployee')
        // console.log(result.data.employee);
        setAllEmployees(result.data.employee)
    }


    useEffect(() => {
        fetchData()
    }, []);


    // const history=useNavigate()

    const handleDelete=async(id)=>{
        const result=await axios.delete('http://localhost:8000/delemployee/'+id)
        alert(await result.data.message)
        fetchData()
    }

    const handleEdit=(id,empName,age,designation,salary)=>{
        
        localStorage.setItem("Id",id)
        localStorage.setItem("Name",empName)
        localStorage.setItem("Age",age)
        localStorage.setItem("Designation",designation)
        localStorage.setItem("Salary",salary)
     
    }

    return (
        <>

            <h2 className='text-center mt-4'>List of Employees</h2>
            <p className='p-3'>Employee managements is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits and types and list some examples of employee management software tools.</p>
            
            <Link to={'/add'}>
            
            <Button variant="info" style={{ float: 'right', marginRight: '50px', width: '97px', height: '50px',borderRadius:'8px' }}>Add <FaUserPlus /></Button> <br /><br /><br />
            </Link>
            
            <Table striped bordered hover style={{ width: '1200px', marginLeft: '100px' }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Employee Name</th>
                        <th>Age</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        
                            allEmployees.map((item) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.empname}</td>
                                    <td>{item.age}</td>
                                    <td>{item.designation}</td>
                                    <td>{item.salary}</td>
                                    <td>

                                        <Link to={'/edit/'+item.id}>
                                        <Button variant="success" onClick={()=>handleEdit(item.id,item.empName,item.age,item.designation,item.salary)}><FaUserEdit/> </Button>{' '}
                                        </Link>

                                        <Button onClick={()=>handleDelete(item.id)} variant="danger" ><FaTrashAlt /></Button>

                                    </td>
                                </tr>
                            ))
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Home
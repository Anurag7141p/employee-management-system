

import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'


function Edit() {

    const [id, setId] = useState('')
    const [empname, setempName] = useState('')
    const [age, setAge] = useState('')
    const [designation, setDesignation] = useState('')
    const [salary, setSalary] = useState(0)


    const params=useParams()
    // api call to get particular employee

    const fetchEmployee=async()=>{
        const result=await axios.get('http://localhost:8000/getanemployee/'+params.id)
        console.log(result.data.employee)
        setId(result.data.employee.id)
        setempName(result.data.employee.empname)
        setAge(result.data.employee.age)
        setDesignation(result.data.employee.designation)
        setSalary(result.data.employee.salary)
    }

    useEffect(() => {
        fetchEmployee()

    }, [])

    let history = useNavigate()

    const handleUpdate = async(e) => {
        e.preventDefault() // avoid refreshing
        console.log(e) // event 

        const body={
            id,
            empname,
            age,
            designation,
            salary
        }
        
        // api call - post request

        const result=await axios.post('http://localhost:8000/updateemployee',body)
        alert(result.data.message)

        history('/')

    }



    return (
        <>

            <h2 className='text-center'>List of Employees</h2>
            <p className='p-3'>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits and types and list some examples of employee management software tools.</p>


            <Row>

                <Col md={1}>

                </Col>
                <Col md={3}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3616/3616927.png" alt="" />

                </Col >
                <Col md={3}>

                </Col>

                <Col md={4}>
                    <Form className='p-4'>
                        <Form.Group className="mb-3" >
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter Id"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name"
                                value={empname}
                                onChange={(e) => setempName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" placeholder="Enter age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" placeholder="Enter Designation"
                                value={designation}
                                onChange={(e) => setDesignation(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Salary</Form.Label>
                            <Form.Control type="text" placeholder="Enter Salary"
                                value={salary}
                                onChange={(e) => setSalary(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={(e) => handleUpdate(e)} >
                            Update
                        </Button>
                    </Form>
                </Col>

                <Col md={1}>

                </Col>
            </Row>
        </>
    )
}

export default Edit

import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import employee from './Employee';
import uuid from 'react-uuid';
import axios from 'axios';

function Add() {

  const [id, setId] = useState('')
  const [empname, setempName] = useState('')
  const [age, setAge] = useState('')
  const [designation, setDesignation] = useState('')
  const [salary, setSalary] = useState(0)

  const history = useNavigate()

  useEffect(() => {
    setId(uuid().slice(0,3))

  }, []);

  const handleAdd = async (e) => {

    e.preventDefault() // prevent refreshing

    // let ids = uuid()
    // console.log(ids)
    // let uniqueId = ids.slice(0, 8)
    // console.log(uniqueId)
    // setId(uuid().slice(0,3))
  
    const body={
      id,
      empname,
      age,
      designation,
      salary
    }

    const result = await axios.post('http://localhost:8000/addemployee',body)
    console.log(result)

    history('/')

  }

  return (
    <>

      <h2 className='text-center'>Add Employees</h2>
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
            {/* <Form.Group className="mb-3" >
              <Form.Label>ID</Form.Label>
              <Form.Control type="text" placeholder="Enter Id"
                onChange={(e) => setId(e.target.value)}
                required
              />
            </Form.Group> */}

            <Form.Group className="mb-3" >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name"
                onChange={(e) => setempName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Age</Form.Label>
              <Form.Control type="text" placeholder="Enter age"
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Designation</Form.Label>
              <Form.Control type="text" placeholder="Enter Designation"
                onChange={(e) => setDesignation(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Salary</Form.Label>
              <Form.Control type="text" placeholder="Enter Salary"
                onChange={(e) => setSalary(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={(e) => handleAdd(e)} >
              Add
            </Button>
          </Form>
        </Col>

        <Col md={1}>

        </Col>
      </Row>
    </>
  )
}

export default Add
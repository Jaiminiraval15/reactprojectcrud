import { Form,Button } from "react-bootstrap"
import { useParams,useNavigate } from "react-router-dom"
import {useState} from 'react'
export default function AddStudent(){
    const param=useParams();
    const navigate=useNavigate();
    const [data,setData]=useState({});
    return(
        <>
       <Form>
       <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>{
      setData({...data,StudentName:e.target.value});
    }} />
        <Form.Label>Department</Form.Label>
        <Form.Control type="text" placeholder="Enter Department" onChange={(e)=>{
      setData({...data,Department:e.target.value});
    }}/>
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Upload" onChange={(e)=>{
      setData({...data,StudentImage:e.target.value});
    }}/>
      </Form.Group>
      </Form>
      <Button variant="success" onClick={()=>
      fetch("https://631c12264fa7d3264ca669fd.mockapi.io/student"+"/",
      {method:"POST",
      body:JSON.stringify(data),
      headers:{
        "Content-Type":"application/json"}
    })
        .then((res)=>navigate("/Student"))}>Add</Button>
    </>
    )
}
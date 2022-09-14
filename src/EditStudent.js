import { useNavigate,useParams } from "react-router-dom";
import {useState, useEffect} from 'react'
import {Form,Button} from 'react-bootstrap'
export default function EditStudent(){
    const navigate=useNavigate();
    const param=useParams();
    useEffect(()=>{
        fetch("https://631c12264fa7d3264ca669fd.mockapi.io/student"+"/"+param.id,
        {method:"GET"})
        .then((res)=>res.json())
        .then((res)=>setData(res))
    },[])
    const [data,setData]=useState({});
    return(
      <>
       <Form>
       <Form.Group className="mb-3" >
       <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder={data.StudentName} onChange={(e)=>{
      setData({...data,StudentName:e.target.value});
    }} />
        <Form.Label>Department</Form.Label>
        <Form.Control type="text" placeholder={data.Department}  onChange={(e)=>{
      setData({...data,Department:e.target.value});
    }}/>
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder={data.Image} onChange={(e)=>{
      setData({...data,StudentImage:e.target.value});
    }}/>
      </Form.Group>
      </Form>
  <Button variant='secondary' onClick={()=>{

      fetch("https://631c12264fa7d3264ca669fd.mockapi.io/student"+"/"+param.id,{
        method:"PUT",
        body:JSON.stringify(data),
        headers:{
          "Content-Type":"application/json"
        }
      })
      .then((res)=>{
        
        navigate('/Student');
      })
    }} >Edit</Button>
      
    </>
    )
    
  
}
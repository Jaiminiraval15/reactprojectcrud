import {useParams,useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';
import {Col,Card,Row,Button}from 'react-bootstrap'
export default function StudentDetail(){
    const navigate = useNavigate();
    const param = useParams();
    const [data,setData] = useState({});
    useEffect(()=>{
        fetch("https://631c12264fa7d3264ca669fd.mockapi.io/student"+"/"+param.id,{method:"GET"})
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[])
    return(<>
        <Row>
        <Col className="col-3" onClick={()=>navigate('/Student/'+data.id)}>
                             <Card style={{width:'15rem'}}>
                            <Card.Img variant='top' src= {data.StudentImage}></Card.Img>
                            <Card.Body>
                                <Card.Text>Name: {data.StudentName}</Card.Text>
                                <Card.Text>Department: {data.Department}</Card.Text>
                                <Card.Text>Id: {data.id}</Card.Text>
                            </Card.Body>
                        </Card>
                  </Col>
                  
        </Row><br></br>
       
        <Button variant='warning' onClick={()=>navigate('../Student/edit/'+param.id)}>Edit</Button>
        <Button variant="danger" onClick={()=>{
            fetch("https://631c12264fa7d3264ca669fd.mockapi.io/student"+"/"+param.id,{method:"DELETE"})
            .then((res)=>navigate("/Student"))
        }}>Delete</Button>
        
        </>
    )
}
import {useEffect,useState} from 'react'
import {Col,Card,Row}from 'react-bootstrap'
import {useNavigate } from 'react-router-dom'
export default function Student(){
    const navigate = useNavigate();
    const [data,setData]=useState([]);
        useEffect(()=> {
            fetch("https://631c12264fa7d3264ca669fd.mockapi.io/student")
            .then((res)=>res.json())
            .then((res)=>setData(res))
        },[])
        function MyStudents(){
            const FormattedStudents= data.map((stu)=>{
                return (
                    <>
                    <Col className="col-3" onClick={()=>navigate('/Student/'+stu.id)}>
                             <Card style={{width:'15rem'}}>
                            <Card.Img variant='top' src={stu.StudentImage}></Card.Img>
                            <Card.Body>
                                <Card.Text>Name: {stu.StudentName}</Card.Text>
                                
                            </Card.Body>
                        </Card>
                  </Col>
                  </>
                )
      
        })
        return (
            <Row>{FormattedStudents}</Row>
        )
        }
    
        return (<MyStudents/>)
        
    
}
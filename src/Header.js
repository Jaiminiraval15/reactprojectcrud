import {Nav,Navbar,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function(){
    return(
      <Navbar bg="primary" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="./">Home</Nav.Link>
          <Nav.Link href="./Student">All Students</Nav.Link>
          <Nav.Link href="./Student/add">Add</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    )
}





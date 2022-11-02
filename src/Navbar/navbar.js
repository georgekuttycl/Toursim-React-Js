
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import flower from '../assets/images/logo.png';
import Carousel from 'react-bootstrap/Carousel';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
    return (
      <div>
          <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            {/* <img src= {require('../../assets/images/logo.png').default } /> */}
            <img src= {flower } width={200} height={30} alt={"Not Available"}/>
            
          </Navbar.Brand>
          <Nav className="me-3">
            <Nav.Link className='text-dark' href="#home">Home</Nav.Link>
            <Nav.Link className='text-dark' href="#features">About Us</Nav.Link>
            <Nav.Link className='text-dark' href="#pricing">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/2026454/pexels-photo-2026454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/2031758/pexels-photo-2031758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1594069758873-e79e9075eb7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    <Container>
        <hr></hr>
      <Row>
        <Col className='col-md-7'>
            <img src='https://deih43ym53wif.cloudfront.net/bern-switzerland-shutterstock_1845136612.jpg_ecb4c93750.jpg' width={550} height={350} alt="Not Availble"/>
        </Col>
        <Col className='col-md-5'>
            <h2 className=''>About</h2>
            <p className='text-justify'>
            Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. 
            Its cities contain medieval quarters, with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge. 
            The country is also known for its ski resorts and hiking trails. 
            Banking and finance are key industries, and Swiss watches and chocolate are world renowned.
            </p>
        </Col>
      </Row>
    </Container>
      </div>
     
    );
  }
  
  export default Header;
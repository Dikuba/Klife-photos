import React from 'react';
import {ReactTyped} from 'react-typed';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaRegCheckCircle } from "react-icons/fa";
import './Services.css';
const Services = () => {
  return (
   
      <div className= "service" style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + 'images/background1.png'})` 
    }}>
      <div  className= "servicetitle">
        <span style={{marginTop: '3.5rem'}} className ="size">Our <span className="servicestyle">Services</span></span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '3.5rem' }}>
  <Card style={{ width: '18rem', backgroundColor: 'white', borderRadius: '2px', boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.75)' }}>
    <Card.Img variant="top" src="./image1.jpg" />
    <Card.Body>
      <Card.Title className ="Title">Professional Photography </Card.Title>
      <Card.Text><span className ="text">
      <FaRegCheckCircle color= 'red' /> Some quick example text to build on the card title and make up the
        bulk of the card's content.
              </span>
      </Card.Text>
      <Button style= {{alignSelf: 'center', color: "#FFFFFF", marginRight: "50%", backgroundColor: "#B20F22", padding: "8px 16px", border: "none",  borderRadius: "9px", shadow:"0px 0px 10px 1px rgba(223, 19, 19, 0.75)"}}
      >Book Now</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '22.7rem', height: '30rem', backgroundColor: 'white', borderRadius: '4px', boxShadow: '0px 0px 10px 1px rgba(255, 255, 255, 0.75)' }}>
    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/image1.jpg`}  style={ {width: '363px', height: '243px', borderRadius: '3px'} } />
    <Card.Body>
      <Card.Title className ="Title">Family Portrait</Card.Title>
      <Card.Text><span className ="text">
      <FaRegCheckCircle color= 'red' /> Some quick example text to build on the card title and make up the
        bulk of the card's content.
              </span>
      </Card.Text>
      <Button style= {{alignSelf: 'center', color: "#FFFFFF", marginRight: "50%", backgroundColor: "#B20F22", padding: "8px 16px", border: "none",  borderRadius: "9px", shadow:"0px 0px 10px 1px rgba(223, 19, 19, 0.75)"}}
      >Book Now</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem', backgroundColor: 'white', boxShadow: '0px 0px 10px 1px rgba(255, 255, 255, 0.75)' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
    <span className ="title"><Card.Title >Event Photography</Card.Title></span>
      <Card.Text><span className ="text">
      <FaRegCheckCircle color= 'read' /> Some quick example text to build on the card title and make up the
        bulk of the card's content.
              </span>
      </Card.Text>
      <Button style= {{alignSelf: 'center', color: "#FFFFFF", marginRight: "50%", backgroundColor: "#B20F22", padding: "8px 16px", border: "none",  borderRadius: "9px", shadow:"0px 0px 10px 1px rgba(223, 19, 19, 0.75)"}}
      >Book Now</Button>
    </Card.Body>
  </Card>
</div>
       </div>
  );
};

export default Services;
 
 /* 
 <div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <Card style={{ width: '18rem', backgroundColor: 'white', boxShadow: '0px 0px 10px 1px rgba(255, 255, 255, 0.75)' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title 1</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem', backgroundColor: 'white', boxShadow: '0px 0px 10px 1px rgba(255, 255, 255, 0.75)' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title 2</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem', backgroundColor: 'white', boxShadow: '0px 0px 10px 1px rgba(255, 255, 255, 0.75)' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title 3</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
</div>
 
 */
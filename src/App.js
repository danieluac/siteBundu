import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,Route,Link,} from "react-router-dom";
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavbarText } from 'reactstrap';

import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
class App extends React.Component {
  constructor (props){
    super(props);
   
    this.state = {
      title : "Artisan School",
      handleLinks: [
        { title : "home", path: "/"},
        { title : "About", path: "/about"},
        { title : "Contact", path: "/contact"},      
      ],
      home : { title : "Be yourSelf", 
      subtitle: "Make your Mind", 
      text: "procjets can change your life in all time"},
      about : { title : "Aboute me"},
      contact : { title : "Contact myself"},
    }
    
  }
 render () {
  return (
    <Router>   
       <div className="top-white"></div>   
     <Container className="blue-container" fluid={true}>
      
       <Navbar className=""  expand="md" >
  <NavbarBrand right id="idBrand">
    <img src="/img/logoBuntu.png"/>
  </NavbarBrand>
         <NavbarToggler className="border-10" area-control="navbar-toggle"/>
         <Collapse isOpen={true}  navbar>
           
           <Nav className="mr-auto"    navbar>
            <Link className="nav-link" to="/">INICIO</Link>
             <Link className="nav-link" to="/about">SOBRE NÓS</Link>
             <Link className="nav-link" to="/course">CURSOS</Link>
             <Link className="nav-link" to="/contact">CONTACTE-NOS</Link>
           </Nav>
         </Collapse>
       </Navbar>
       
     </Container>
  <Route path="/" exact render={() => <Home title={this.state.home.title}/> } />
  <Route path="/about"  exact render={() => <About title={this.state.about.title}/> } />
  <Route path="/contact" exact render={() => <Contact title={this.state.contact.title}/> } />
     

     <Footer />
    </Router>
   
  );
 }
}

export default App;


import './App.css';
import React, { Component} from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './pages/partials/Header';
import './Styles/HomePage.css'
import Footer from './pages/partials/footer';
import About from './pages/about';
import Contact from './pages/Contacts'
import Booking from './pages/booking'



class App extends Component {
  render() {
    return (
      <div className="App">
      
      <br/>
      <br/>
        <Router>
        <Header/>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/booking' component={Booking}/>
        </Router>
        <br />
        <br />
      <Footer/>  
      </div>
    )
  }
}
export default App

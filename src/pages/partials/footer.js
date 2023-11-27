import React, { Component } from 'react'

 class Footer extends Component {
  render() {
    return (
        <footer>
        <h2 className='footer'>Cincinnati World Tour</h2>
        <p className='footer'>Welcome to the Cincinnati World Tour! A wonderfule place to explore our attractions in Cincinnati. View our page and see what attractions fit you!</p>
        <h2 className="footer">Tyrese West</h2>
        <a className="btn btn-dark btn-social " href="https://www.facebook.com/profile.php?id=100085323807515" aria-label="Parveen Anand Facebook Profile">facebook<i className="fab fa-facebook-f social-buttons"></i></a>
        <br />
        <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/tyrese-west-5b22361ab/ " aria-label="Parveen Anand LinkedIn Profile">LinkedIn<i class="fab fa-linkedin-in"></i></a>
        <br />
        <a className="btn btn-dark btn-social mx-2" href="https://github.com/dashboard" aria-label="Parveen Anand Github Profile">Github<i class="fab fa-linkedin-in"></i></a>
        <br />
        <h2 className="footer">Tarique El-shamy</h2>
        <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/profile.php?id=100085323807515" aria-label="Parveen Anand Facebook Profile">facebook<i class="fab fa-facebook-f"></i></a>
        <br />
        <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/tyrese-west-5b22361ab/ " aria-label="Parveen Anand LinkedIn Profile">LinkedIn<i class="fab fa-linkedin-in"></i></a>
        <br />
        <a className="btn btn-dark btn-social mx-2" href="https://github.com/dashboard" aria-label="Parveen Anand Github Profile">Github<i class="fab fa-linkedin-in"></i></a>
        <br />
        &copy;
        <p className="footer"> Cincinnati World Tour | Brought to you by Tyrese and Tarique</p>
       </footer>
    )
  }
}
export default Footer

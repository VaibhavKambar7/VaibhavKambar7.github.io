import React, { Component } from 'react'
import contact from '../Components/public/image/contactlogo.png';
import mailme from '../Components/public/image/mailmeimg.png';


class Contact extends Component {
    render() {
        return (
            <section className="container-1">

                {/* <img id="contactimg" src={contact} width="180" height="180" alt="contactlogo"/> */}
                <h3> <strong>Vaibhav Kambar</strong></h3>
                <h4></h4>
                <h4>Email Id: vaibhavkambar123@gmail.com</h4>
                {/* <a id="mail"href=""><img id="mailmelogo" src={mailme} alt="mail me"/>Click Here To Send Mail</a> */}
                <h4>Contant Info:1234567890</h4>

                
                
                        <a href="">
                        <span className="icon fa fa-facebook" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="" >
                                <span className="icon fa fa-twitter"  style={{color:'antiquewhite'}}></span>
                        </a>
                        <a href="">
                                <span className="icon fa fa-github" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="">
                                <span className="icon fa fa-linkedin-square"  style={{color:'antiquewhite'}}></span>
                        </a>
                        <a href="">
                                <span className="icon fa fa-wordpress" style={{color:'antiquewhite'}}></span>
                        </a>
                
            </section>
        )
    }
}

export default Contact

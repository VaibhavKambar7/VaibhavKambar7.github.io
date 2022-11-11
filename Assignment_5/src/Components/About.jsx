import React, { Component } from 'react'
import biologo from './public/image/biopicimg.jpg'

class About extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
                    <h1>About Me</h1> 

                    {/* <img  width="180" height="180" /> */}
                    <p>Hey, I'm <b> Vaibhav Kambar</b> 👋 😃 !
👉 I'm in sophomore year pursuing Bachelors of Engineering in Information Technology.
🔭 I'm skilled and proficient in Web Development and technologies like React JS,
Javascript , Java , Python , C, C++.
🤔 Learning ML and AI, Backend Development

                    </p>
                
            </section>
        )
    }
}

export default About

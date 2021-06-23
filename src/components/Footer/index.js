import React from 'react'
import './style.css';

const Footer = () => {
    //
    return(
       <footer>
           <a href="tel:+7243163226"> 
                <img src={`${process.env.PUBLIC_URL}/phone.png`}
                            alt="phone icon"
                />
           </a>
           <a href="mailto:morgan.allison.schall@gmail.com">
                <img src={`${process.env.PUBLIC_URL}/email.png`}
                            alt="email icon"
                />
           </a>
           <a href="https://github.com/mschall217">
                <img src={`${process.env.PUBLIC_URL}/GitHub.png`}
                            alt="phone icon"
                />
           </a>
           <a href="www.linkedin.com/in/morgan-a-schall">
                <img src={`${process.env.PUBLIC_URL}/LinkedIn.png`}
                            alt="linkedIn icon"
                />
           </a>
       </footer>
    )
}

export default Footer;
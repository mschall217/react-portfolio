import React from 'react'
import './style.css';

const Footer = () => {
    //
    return(
       <footer>
           <a href="tel:+7243163226" target="_blank" rel="noreferrer"> 
                <img src={`${process.env.PUBLIC_URL}/assets/icons/phone.png`}
                            alt="phone icon"
                />
           </a>
           <a href="mailto:morgan.allison.schall@gmail.com" target="_blank" rel="noreferrer">
                <img src={`${process.env.PUBLIC_URL}/assets/icons/email.png`}
                            alt="email icon"
                />
           </a>
           <a href="https://github.com/mschall217" target="_blank" rel="noreferrer">
                <img src={`${process.env.PUBLIC_URL}/assets/icons/GitHub.png`}
                            alt="phone icon"
                />
           </a>
           <a href="https://www.linkedin.com/in/morgan-a-schall/" target="_blank" rel="noreferrer">
                <img src={`${process.env.PUBLIC_URL}/assets/icons/LinkedIn.png`}
                            alt="linkedIn icon"
                />
           </a>
       </footer>
    )
}

export default Footer;
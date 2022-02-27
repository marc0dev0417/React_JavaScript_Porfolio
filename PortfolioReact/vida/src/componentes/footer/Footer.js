import React from 'react';
import './Footer.css';

const Footer = () =>{
    return(
        <footer class="footer">
            <div className="footer-info">
                <h1>Marco Alonso Benegas</h1>
                    <p>Basado en mi ciudad</p>
            </div>
            <div className="footer-contacto">
                <h3>Contactame</h3>
                <p>Y dejame conseguir a trabajar</p>
            </div>
            <div className="footer-sns">
                <div className="programado-por">
                    Programada por Marco Alonso Benegas
                </div>
                <div className="mis-links">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin linkedin"></i></a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter twitter"></i></a>
                    <a href="##" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp whatsapp"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
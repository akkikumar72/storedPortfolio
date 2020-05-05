import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="https://www.linkedin.com/in/akashmax" className="icon alt fa-linkedin"><span className="label" target='_blank'>LinkedIn</span></a></li>
                <li><a href="https://www.facebook.com/akashpathak123" className="icon alt fa-facebook" target='_blank'><span className="label">Facebook</span></a></li>
                <li><a href="hhttps://twitter.com/akashpathak06" className="icon alt fa-twitter" target='_blank'><span className="label">Twitter</span></a></li>
                <li><a href="https://www.instagram.com/akashpathak06/" className="icon alt fa-instagram" target='_blank'><span className="label">Instagram</span></a></li>
                <li><a href="https://bitbucket.org/akashpathak/" className="icon alt fa-bitbucket" target='_blank'><span className="label">GitHub</span></a></li>
            </ul>
            <ul className="copyright">
                <li>© 2020 All Rights Reserved</li>
                <li>Designed & Build with love in Stockholm,sweden <i className="icon fa-heart"></i></li>
            </ul>
        </div>
    </footer>
)

export default Footer

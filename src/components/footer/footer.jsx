import './footer.scss';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-wrapper">

                <p>
                    <span className='name-company__span'>FlashCards</span> is an application for foreign words learning.
                </p> 
                <p className='copyright'>Copyright © 2001-2022 StudyStack LLC. All rights reserved.</p>

                <ul className="menu-footer">
                    <li className="menu-footer-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="menu-footer-item">
                        <a href="#">Terms of Service</a>
                    </li>
                    <li className="menu-footer-item">
                        <a href="#">Privacy Statement</a>
                    </li>
                    <li className="menu-footer-item">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
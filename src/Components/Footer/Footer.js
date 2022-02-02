import './Footer.css';
import mailLogo from './logo/gmail.png';
import inLogo from './logo/linkedin.png';
import gitLogo from './logo/github.png';

function Footer() {
    return (
        <div className="footer">
            <div className="col-md-3 ta-center">
                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=hayktermarkosyan@gmail.com" target="_blank" rel="noreferrer">
                    <img className="footerImg" src={mailLogo} alt="mailLogo" width="30" height="30"/>
                </a>
                <a href="https://www.linkedin.com/in/hayk-ter-markosyan/" target="_blank" rel="noreferrer">
                    <img className="footerImg" src={inLogo} alt="inLogo" width="30" height="30"/>
                </a>
                <a href="https://github.com/hayktermarkosyan" target="_blank" rel="noreferrer">
                    <img className="footerImg" src={gitLogo} alt="gitLogo" width="30" height="30"/>
                </a>
            </div>
            <div className="col-md-3 ta-center">
                <p className="cellphone">
                    Cell:<u>(+374 77) 606 016</u>
                </p>
            </div>
        </div>
    )
}

export default Footer;
//We import a couple of images
import ogl from '../images/ogl.png';
import lions from '../images/lions.png';

//This is the footer section, at the very bottom of the page
const Footer = (props) => {
    //We need some props to render the links of the footer
    const footerData = props.footerData;

    return (
        <div className="footer-section">
            <div className='footer-container'>
                <footer className="footer">
                    <div className="footer-links">
                        {/* We create a <ul> and use map in order to add each element of the props inside a <li> */}
                        <ul className="footer-flex">
                            {footerData.map(link => 
                                <a key={link[0]} href={link[2]}><li>{link[1]}</li></a>
                            )}
                        </ul>
                    </div>
                    {/* This is the image and link on the very last line of the page */}
                    <div className="footer-copyright">
                        <img src={ogl}></img>
                        <p>All content is available under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">Open Government Licence v3.0</a>, except where otherwise stated</p>
                    </div>

                </footer>
                {/* This is the image and link on the right side */}
                <div className='footer-lions'>
                    <img src={lions}></img>
                    <a href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/"><p>© Crown copyright</p></a>
                </div>
            </div>
        </div>
    )
};

export default Footer;
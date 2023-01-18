
const Cookies = (props) => {

    //We add the 'showCookies' boolean to decide whether this section appears or not
    //And also the function to set the boolean to 'false', once the user clicks any option
    const showCookies = props.showCookies;
    const handleShowCookies = props.handleShowCookies;

    //An if statement, if this is 'false', then this section will not show at all
    if (showCookies === true) {
        return (
            <div className="cookies-section">
                <h2>Cookies on GOV.UK</h2>
                <p>We use some essential cookies to make this website work.</p>
                <p>We’d like to set additional cookies to understand how you use GOV.UK, remember your settings and improve government services.</p>
                <p>We also use cookies set by other sites to help us deliver content from their services.</p>
                <div className="cookies-choices">
                    {/* We pass the same function to both buttons, as there are no real cookies */}
                    <button onClick={handleShowCookies}>Accept additional cookies</button>
                    <button onClick={handleShowCookies}>Reject additional cookies</button>
                    {/* We pass the link where the cookies are listed in the real page */}
                    <a href="https://www.gov.uk/help/cookies"><p>View cookies</p></a>
                </div>
            </div>
        )
    }
};

export default Cookies;
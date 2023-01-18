//This is some sort of summary of the main options of the page, a grey section under a blue line
//It always shows around the bottom of the page, and it shows on top when the user clicks on the menu button
const Menu = (props) => {

    //Props for the part on the left
    const topicsData = props.topicsData;
    //Props for the part on the rigth
    const govActData = props.govActData;

    return (
        <div className="summary-bottom-section">

            <div className="topics-summary">
                <h2>Topics</h2>
                <div className="bottom-topics">
                    {/* We map through the props to render all links */}
                    {topicsData.map(topic =>
                    <a href={topic[3]}><li>{topic[1]}</li></a>
                        )}
                </div>
            </div>

            <div className="gov-activity-summary">
                <h2>Government activity</h2>
                <div className="bottom-gov-activity">
                    {/* We map through the props to render all links */}
                    {govActData.map(title => 
                        <a href={title[3]}><li>{title[1]}</li></a>
                        )}
                        <a href="https://www.gov.uk/government/how-government-works"><li>How government works</li></a>
                        <a href="https://www.gov.uk/government/get-involved"><li>Get involved</li></a>
                </div>
            </div>
        </div>
    )
};

export default Menu;
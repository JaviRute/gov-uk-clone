//This is the 'Government Activity' section, around the middle of the page
const GovernmentActivity = (props) => {

    //All the contents are in an array, which we take as props
    const govActData = props.govActData

    return (
        <div className="government-activity-section">
            <div>
                <h2>Government activity</h2>
                <p className="gob-p">Find out what the government is doing</p>
                <div className="gov-act-div">
                    {/* We will map through the props */}
                    {/* For each item of the array, we create an <a>, to which we add the text and link of the item */}
                    {govActData.map(topic => 
                        <a href={topic[3]}><div key={topic[0]} className="topic">
                        <div className="flex-div">
                            <h3>{topic[1]}</h3>
                            <i class="fa-solid fa-angle-right"></i>
                        </div>
                        <p className="topic-p">{topic[2]}</p>
                        </div></a>
                    )}
                </div>
            </div>
            {/* This is the part with the two big numbers on the right */}
            <div id="right-part">
                <h2>Departments and organisations</h2>
                <div className="departments-organisations">
                    <a href="https://www.gov.uk/government/organisations#ministerial_departments">
                    <span className="big-number">23</span><br></br>
                    <span className="big-number-text">Ministerial departments</span>
                    </a>
                </div>
                <div className="departments-organisations"><a href="https://www.gov.uk/government/organisations#agencies_and_other_public_bodies">
                    <span className="big-number">400+</span><br></br>
                    <h3 className="big-number-text">Other agencies and public bodies</h3>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default GovernmentActivity;
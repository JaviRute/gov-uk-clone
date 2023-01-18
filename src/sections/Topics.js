
//One of the main sections of the page, biggest section in white 
const Topics = (props) => {

    //All data are contained in these props
    const topicsData = props.topicsData;

    return (
        <div className="topics-section">
            <h2>Topics</h2>
            <div className="topics-div">
                {/* We map through the props to render all links */}
                {topicsData.map(topic => 
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
    )
};

export default Topics;
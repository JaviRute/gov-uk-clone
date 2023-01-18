
//THis is a small section with a bunch of links around the middle/bottom of the page
const More = (props) => {

    //These props contain the titles and links
    const moreData = props.moreData

    return (
        <div className="more-section">
            <h2>More on GOV.UK</h2>
            <div className="more-div">
                {/* We map through the props and add the links to an anchor tag */}
                {moreData.map(article => 
                    <div key={article[0]} className="more">
                        <a href={article[2]}><p>{article[1]}</p></a>
                    </div>
                )}
            </div>
        </div>
    )
};

export default More;
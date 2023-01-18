//Grey section under the blue section on top
const Popular = (props) => {

    //The links for this section are contained here
    const popularData = props.popularData;

    return (
        //This is the part on the left with the links
        <div className="page-margin popular-section">

            <div className="popular-links">
                <h2>Popular on GOV.UK</h2>
                <ul>
                    {popularData.map(article => 
                        <a key={article[0]} href={article[2]}><li>{article[1]}</li></a>
                        )}
                </ul>

            </div>
            {/* This is the search bar on the right */}
            <div className="popular-search">
                <h2>Search</h2>
                <div className="search-div">
                    <input></input><i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
    )
};

export default Popular;
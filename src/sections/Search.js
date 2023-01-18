
//This is the search section which appears when you click on the search bar on the black header
const SearchSection = (props) => {

    //Some props with links
    const popularData = props.popularData;

    return (
        <div className="search-section">
            <div>
                <h2>Search</h2>
                <div className="search-top-div">
                    <input></input><i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div className="popular-div-section">
                <h2>Popular on GOV.UK</h2>
                <ul>
                    {/* We map through the props to show the links */}
                    {popularData.map(article => 
                        <a key={article[0]} href={article[2]}><li>{article[1]}</li></a>
                        )}
                </ul>
            </div>
        </div>
    )
};

export default SearchSection;
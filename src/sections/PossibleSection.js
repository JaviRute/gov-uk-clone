import SummaryBottom from "./SummaryBottom";
import SearchSection from "./Search";

//This is a section that looks invisible by default
const PossibleSection = (props) => {

    //Booleans which dictate whether either of the sections is showing
    const menuIsOn = props.menuIsOn;
    const searchIsOn = props.searchIsOn;
    //Props for the menu section
    const topicsData = props.topicsData;
    const govActData = props.govActData;
    //Props for the search section
    const popularData = props.popularData;

    //If the user clicks on the menu button, the menu section will show
    if (menuIsOn === true) {
        return (
            <SummaryBottom topicsData={topicsData} govActData={govActData}/>
        )
    } 
    //If the user clicks on the search button, the search section will show
    if (searchIsOn === true) {
        return (
            <SearchSection popularData={popularData} />
        )
    }
};

export default PossibleSection;
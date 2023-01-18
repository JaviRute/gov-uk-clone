import '../App.css';

//We import the image of the crown
import crown from '../images/crown.png'
import MenuButton from './MenuButton'
import SearchButton from './SearchButton'

//No props or state needed in this section
const Header = (props) => {

    //Some booleans to decide whether the menu and search sections are showing
    const menuIsOn = props.menuIsOn;
    const searchIsOn = props.searchIsOn;
    //Some functions to switch those booleans as true/false
    const handleSetMenuIsOnToTrue = props.handleSetMenuIsOnToTrue;
    const handleSetMenuIsOnToFalse = props.handleSetMenuIsOnToFalse;   
    const handleSetSearchIsOnToFalse = props.handleSetSearchIsOnToFalse;
    const handleSetSearchIsOnToTrue = props.handleSetSearchIsOnToTrue;

    return (
        //First the black row
        <div>
            <div className="top-header">
                <div className="top-header-text">
                    <p><img src={crown}/>GOV.UK</p>
                </div>
                {/* Here are the menu and search buttons, which are react components themselves */}
                    <div className='top-buttons'>
                        <div className='lateral-line'></div>
                        <MenuButton menuIsOn={menuIsOn}
                                    handleSetMenuIsOnToTrue={handleSetMenuIsOnToTrue}
                                    handleSetMenuIsOnToFalse={handleSetMenuIsOnToFalse} />
                        <SearchButton searchIsOn={searchIsOn}
                                      handleSetSearchIsOnToFalse={handleSetSearchIsOnToFalse}
                                      handleSetSearchIsOnToTrue={handleSetSearchIsOnToTrue}/>
                    </div>
            </div>
        </div>
    )
};

export default Header;
//This is just a search button, which will show differently depending on a boolean
const MenuButton = (props) => {

    //This boolean will dictate the appearance of the button
    const searchIsOn = props.searchIsOn;

    //Functions to turn the former boolean to true/false
    const handleSetSearchIsOnToFalse = props.handleSetSearchIsOnToFalse;
    const handleSetSearchIsOnToTrue = props.handleSetSearchIsOnToTrue;

    //If the user clicks on the search button, the button will show as an 'X'
    if (searchIsOn === true) {
        return (
                <button onClick={handleSetSearchIsOnToFalse} className='search-button-pressed'>
                    <span><i class="fa-solid fa-xmark"></i></span>
                </button>
            )
    //By default, the button will show as a magnifying glass
    } else {
        return (
            <button onClick={handleSetSearchIsOnToTrue} className='search-button-idle'>
                <span><i class="fa-solid fa-magnifying-glass"></i></span>
            </button>
        )
    }
};

export default MenuButton;
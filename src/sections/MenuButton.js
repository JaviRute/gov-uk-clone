//This is just a button, which is inside the black header
const MenuButton = (props) => {

    //We need to pass some props to it, a boolean and two functions to turn the boolean as true/false
    const menuIsOn = props.menuIsOn;
    const handleSetMenuIsOnToTrue = props.handleSetMenuIsOnToTrue;
    const handleSetMenuIsOnToFalse = props.handleSetMenuIsOnToFalse;

    //The button will also have a different appearance depending on the boolean (arrow up if it's 'true')
    if (menuIsOn === true) {
        return (
                <button onClick={handleSetMenuIsOnToFalse} className='menu-button-pressed'>
                    <span><i class="fa-sharp fa-solid fa-chevron-up"></i>Menu</span>
                </button>
            )
    //If the boolean is false the button will show like this (arrow down)
    } else {
        return (
            <button onClick={handleSetMenuIsOnToTrue} className='menu-button-idle'>
                <span><i class="fa-sharp fa-solid fa-chevron-down"></i>Menu</span>
            </button>
        )
    }
};

export default MenuButton;
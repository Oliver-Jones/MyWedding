import React from 'react';
import Navigation from '../navigation/Navigation.js';
import Constants from '../Constants';
const Header = ({ onNavChange }) => {
    const handleNavChange = (value) => {
        onNavChange(value);
    };
    return (
        <React.Fragment>
            <div className="brideGroomFont">{Constants.groomName} & {Constants.brideName}</div>
            <Navigation onChange={handleNavChange}></Navigation>
        </React.Fragment>
    )
}

export default Header
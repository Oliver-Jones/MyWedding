import React from 'react';
import Constants from '../Constants';

const Navigation = ({ onChange }) => {
    const handleChange = event => {
        onChange(event.target.innerText);
    };

    const menus = [
        {"id" : "1", "name" : Constants.nav1, "state" : true}, 
        {"id" : "2", "name" : Constants.nav2, "state" : false},
        {"id" : "3", "name" : Constants.nav3, "state" : false},
        {"id" : "4", "name" : Constants.nav4, "state" : false}
    ]
    const lists = menus.map(menu => (
        <li key={menu.id} className="navMenu">
            <div href="/" className="navItem" onClick={handleChange}>
                {menu.name}
            </div>
        </li>
    ));
    return (
        <nav>
            <ul>{lists}</ul>
        </nav>
    )
}

export default Navigation
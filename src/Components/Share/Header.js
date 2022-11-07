import React, { useContext } from 'react';
import { AuthContex } from '../ContexApi/ContexApi';

const Header = () => {
    const {name} = useContext(AuthContex)
    return (
        <div>
           <h1>{name}</h1> 
        </div>
    );
};

export default Header;
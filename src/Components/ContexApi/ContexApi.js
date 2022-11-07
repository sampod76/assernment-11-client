import React, { createContext } from 'react';

export const AuthContex = createContext()

const ContexApi = ({ children }) => {

    const authInfo = {name:'sampod'}
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default ContexApi;
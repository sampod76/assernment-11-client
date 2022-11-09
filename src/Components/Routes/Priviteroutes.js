import React, { useContext } from 'react';
import { AuthContex } from '../ContexApi/ContexApi';

import { Audio, ColorRing } from 'react-loader-spinner'
import { Navigate, useLocation } from 'react-router-dom';

const Priviteroutes = ({ children }) => {
    const { user, loading } = useContext(AuthContex)

    const location= useLocation()

    if (loading) {
        return <div>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
    }

    if(user?.uid){
        return children
    }

    return <Navigate to='/login' state={{from : location}} replace></Navigate>

   
};

export default Priviteroutes;
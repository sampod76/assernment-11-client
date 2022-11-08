import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Services from '../../Home/section/Services';
import toast, { Toaster } from 'react-hot-toast';

const Delivery = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/delivery')
            .then(res => res.json())
            .then(data => {
                
                if (data.success) {
                    setServices(data.data)
                }else {
                    toast.error(data.message)
                }
            })
    }, [])
    console.log(services)
    return (
       
    );
};

export default Delivery;
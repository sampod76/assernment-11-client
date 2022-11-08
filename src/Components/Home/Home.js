import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Services from './section/Services';

const Home = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/delivery', {
            headers: {
                pages: 3
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.success) {
                    setServices(data.data)
                }
            })
    }, [])

    return (
        
    );
};

export default Home;
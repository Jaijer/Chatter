import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

function Home() {
    const {isSigned} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=> {
        if(isSigned) {
            navigate('/chat')
        }
        else {
            navigate('/login')
        }
    }, [])
}

export default Home
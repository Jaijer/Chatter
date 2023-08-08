import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import {auth, db} from '../firebase-config';
import {collection, getDocs, addDoc} from 'firebase/firestore'
import { toast } from "react-toastify";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isSigned, setIsSigned] = useState(false);
    const [contactedWith, setContactedWith] = useState('');
    const [users, setUsers] = useState([]);
    const [chats, setChats] = useState([]);
    const [chat, setChat] = useState({});
    const [currentUser, setCurrentUser] = useState({});
    const [contactedWithUser, setContactedWithUser] = useState({});
    const [isHamburger, setIsHamburger] = useState(true);
    const [signingUp, setSigningUp] = useState(false);

    const navigate = useNavigate();


    const usersCollectionRef = collection(db, 'users');
    const getUsers = async ()=> {
        try {
            const data = await getDocs(usersCollectionRef);
            const filteredData = data.docs.map((doc)=> ({
                ...doc.data(),
            }))
            return (filteredData);
        } catch (error) {
            console.error(error)
            toast.error("An Error Occurred")
        }
    }

    const chatsCollectionRef = collection(db, 'chats');
    const getChats = async ()=> {
        try {
            const data = await getDocs(chatsCollectionRef);
            const filteredData = data.docs.map((doc)=> ({
                ...doc.data(),
            }))
            return (filteredData);
        } catch (error) {
            console.error(error)
            toast.error("An Error Occurred")
        }
    }


    useEffect(()=> {
        const auth = getAuth();
        const getDataAsync = async ()=> {
            const usersData = await getUsers();
            setUsers(usersData);

            const chatsData = await getChats();
            setChats(chatsData);
        }    
        getDataAsync()

        onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsSigned(true);
            navigate('/');
        } else {
            setIsSigned(false);
            navigate('/');
        }
        });
    }, [contactedWith])


    return <AuthContext.Provider 
    value={{
        isSigned,
        contactedWith,
        setContactedWith,
        users,
        chats,
        chat,
        setChat,
        currentUser,
        setCurrentUser,
        contactedWithUser,
        setContactedWithUser,
        isHamburger,
        setIsHamburger,
        signingUp,
        setSigningUp
    }}>
        {children}
    </AuthContext.Provider>
}
import { createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from "../service/api";



const Context = createContext()

function Auth({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    let location = useLocation();
    let navigate = useNavigate();

    /**
     * Verifica se o usuario ja está logado
     * Se estiver, redireciona para a pagina principal
     * Se não, não faz nada
     */
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            api.defaults.headers.common['Authorization'] = JSON.parse(token)
            setAuthenticated(true)
            if (location.pathname === '/login') {
                navigate('/')
            }
        }
        setLoading(false)
    }, [])

    /**
     * Função para realizar o login do usuario 
    */
    const handleLogin = (boolean, tkn) => {

        setAuthenticated(boolean)
        const token = tkn
        localStorage.setItem('token', JSON.stringify(token))
        api.defaults.headers.common['Authorization'] = token;
        navigate('/')
    }
    if (loading) {
        return <h1>loading</h1>
    }

    return (
        <Context.Provider value={{ authenticated, handleLogin }}>
            {children}
        </Context.Provider>
    )
}

export { Context, Auth };
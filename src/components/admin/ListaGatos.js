import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';

import AdminGatosContext from './../../context/admingatos/AdminGatosContext'
import AuthContext from './../../context/autenticacion/AuthContext'

export default function ListaGatos() {

    // EXTRAER LOS VALORES DEL CONTEXT (ESTADO GLOBAL)
    const adminGatosContext = useContext(AdminGatosContext)
    const { gatos, obtenerGatos } = adminGatosContext

    const authContext = useContext(AuthContext)
    const { verificarUsuario, cerrarSesion } = authContext

    useEffect(() => {

        const generarEventos = async () => {
            await obtenerGatos()            
            return 
        }

        generarEventos()
        
    }, [])


    const clickLogout = (e) => {
        e.preventDefault()
        cerrarSesion()

    }



    return (
        <div>
            <h1>Gatitos para adopción</h1>
            <Link to={`/admingatos/creargato`}>
                <p >Nuevo Gato</p>
            </Link>
            {
                gatos.length === 0 ? "No hay gatitos aún."
                :
                gatos.map(e => {
                    return (
                        <div key={e._id}>
                        <Link to={`/admingatos/${e._id}`}>
                        <p >{e.nombre}</p>
                        </Link>
                        </div>
                    )
                })
            }

            <button onClick={(e) => {clickLogout(e)}}>
                Cerrar sesión
            </button>

        </div>
    )
}
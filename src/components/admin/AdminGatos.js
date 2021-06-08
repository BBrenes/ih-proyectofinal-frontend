import React, { useContext, useEffect } from 'react'

import AdminGatosContext from './../../context/admingatos/AdminGatosContext'
import AuthContext from './../../context/autenticacion/AuthContext'

export default function AdminGatos() {

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
            {
                gatos.length === 0 ? "No hay gatitos aún."
                :
                gatos.map(e => {
                    return (
                        <p key={e._id}>{e.nombre}</p>
                    )
                })
            }

            <button onClick={(e) => {clickLogout(e)}}>
                Cerrar sesión
            </button>

        </div>
    )
}
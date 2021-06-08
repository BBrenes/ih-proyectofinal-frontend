import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router';

import AdminGatosContext from './../../context/admingatos/AdminGatosContext'

export default function DetallesGatos(props) {
    const { id } = useParams();
    console.log(id);

    // EXTRAER LOS VALORES DEL CONTEXT (ESTADO GLOBAL)
    const adminGatosContext = useContext(AdminGatosContext)
    const { gato, obtenerGato, eliminarGato, obtenerGatos} = adminGatosContext

    useEffect(() => {

        const generarEventos = async () => {
            await obtenerGato(id)            
            return 
        }

        generarEventos()
        
    }, [id])

    const clickEliminar = async (e) => {
        e.preventDefault()
        await eliminarGato(id)
        props.history.push('/admingatos') 
        await obtenerGatos()
    }

    return (
        <div>
            <h1>Detalles del gatito</h1>
            {gato === null ? (
                 <h1>selecciona un gato</h1>
            ) : (
                <>
                <h1>{gato.nombre}</h1>
                <h1>{gato.descripcion}</h1>
                <button onClick={(e) => {clickEliminar(e)}}>
                     Eliminar
                </button>
                </>
            )
            }
            
        </div>
    )
}
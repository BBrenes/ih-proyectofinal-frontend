import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';

import AdminGatosContext from './../../context/admingatos/AdminGatosContext'

export default function DetallesGatos(props) {
    const { id } = useParams();
    console.log(id);

    const [editando, setEditando] = useState(false);

    // EXTRAER LOS VALORES DEL CONTEXT (ESTADO GLOBAL)
    const adminGatosContext = useContext(AdminGatosContext)
    const { gato, obtenerGato, eliminarGato, actualizarGato, obtenerGatos} = adminGatosContext

    const [datosFormulario, setDatosFormulario] = useState({
        nombre: "",
        edad: "",
        genero: "",
        esterilizado: false,
        descripcion: "",
        imagenUrl: ""
    })

    const {nombre, edad, genero, esterilizado, descripcion, imagenUrl} = datosFormulario

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

    const clickEditar = (e) => {
        e.preventDefault()
        setEditando(true)
        setDatosFormulario({
            nombre: gato.nombre,
            edad: gato.edad,
            genero: gato.genero,
            esterilizado: gato.esterilizado,
            descripcion: gato.descripcion,
            imagenUrl: gato.imagenUrl
        })
    }

    const monitoreoCambios = (event) => {
        console.log(event.target.value)
        setDatosFormulario({
            ...datosFormulario,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = async (event) => {
       event.preventDefault()
        await actualizarGato(id, datosFormulario)
        setEditando(false)
        await obtenerGatos()
    }

    const clickCancelar = (e) => {
        e.preventDefault()
        setEditando(false)
    }

    return (
        <div>
            <h1>Detalles del gatito</h1>

            {editando === false ? (
                gato === null ? (
                 <h1>selecciona un gato</h1>
            ) : (
                <>
                <p>{gato.nombre}</p>
                <p>{gato.edad}</p>
                <p>{gato.genero}</p>
                <p>{gato.esterilizado ? 'Si' : 'No'}</p>
                <p>{gato.descripcion}</p>
                <p>{gato.imagenUrl}</p>
                <button onClick={(e) => {clickEliminar(e)}}>
                     Eliminar
                </button>
                <button onClick={(e) => {clickEditar(e)}}>
                     Editar
                </button>
                </>
            )) : (
                <>
                <h1>Editando</h1>
                <form onSubmit={(e) => {enviarDatos(e)}}>
                <div className="campo-form">
                    <label>Nombre</label>
                    <input 
                        type="text"
                        id="nombre"
                        name="nombre"
                        onChange={(e) => monitoreoCambios(e)}
                        value={nombre}
                    />
                </div>
                <div className="campo-form">
                    <label>Descripcion</label>
                    <input 
                        type="text"
                        id="descripcion"
                        name="descripcion"
                        onChange={(e) => monitoreoCambios(e)}
                        value={descripcion}
                    />
                </div>
                <div className="campo-form">
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Actualizar"
                    />
                </div>
            </form>
                <button onClick={(e) => {clickCancelar(e)}}>
                     Cancelar
                </button>
                </>
            )
            }
            
        </div>
    )
}
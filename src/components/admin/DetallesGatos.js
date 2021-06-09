import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';

import AdminGatosContext from './../../context/admingatos/AdminGatosContext'

export default function DetallesGatos(props) {
    const { id } = useParams();
    console.log(id);

    const [editando, setEditando] = useState(false);
    const [creando, setCreando] = useState(false);

    // EXTRAER LOS VALORES DEL CONTEXT (ESTADO GLOBAL)
    const adminGatosContext = useContext(AdminGatosContext)
    const { gato, obtenerGato, eliminarGato, actualizarGato, crearGato, obtenerGatos} = adminGatosContext

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
        if(id === 'creargato'){
            setDatosFormulario({
                nombre: "",
                edad: "",
                genero: "",
                esterilizado: false,
                descripcion: "",
                imagenUrl: ""
            })
            setCreando(true)
        } else{
        setCreando(false)
        setEditando(false)
        generarEventos()
        }
    }, [id])

    // useEffect(() => {
    //     props.history.push(`/admingatos/${gato._id}`)
    // }, [gato])

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

    const enviarDatosCrear = async (event) => {
        event.preventDefault()
        const dato = await crearGato(datosFormulario)
        const gatoId = dato.data.gatoCreado._id
        console.log("dato", dato)
         
         await setCreando(false)
         
        // await obtenerGatos()
        props.history.push(`/admingatos/${gatoId}`)
        
     }

    return (
        <div>
            <h1>Detalles del gatito</h1>

            {
                creando ? (
                    <>
                    <h1>Crea un nuevo gatito</h1>
                    <form onSubmit={(e) => {enviarDatosCrear(e)}}>
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
                    <label>Edad</label>
                    <input 
                        type="text"
                        id="edad"
                        name="edad"
                        onChange={(e) => monitoreoCambios(e)}
                        value={edad}
                    />
                </div>
                <div className="campo-form">
                    <label>Genero</label>
                    <input 
                        type="text"
                        id="genero"
                        name="genero"
                        onChange={(e) => monitoreoCambios(e)}
                        value={genero}
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
                    <label>Imgen URL</label>
                    <input 
                        type="text"
                        id="imagenUrl"
                        name="imagenUrl"
                        onChange={(e) => monitoreoCambios(e)}
                        value={imagenUrl}
                    />
                </div>
                <div className="campo-form">
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Crear"
                    />
                </div>
            </form>
            </>
                ) : (
                editando === false ? (
                gato === null ? (
                 <h1>selecciona un gato o crea uno nuevo.</h1>
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
                )   
            }
            
        </div>
    )
}
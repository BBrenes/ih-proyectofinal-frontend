import React, { useReducer } from 'react'
import AdminGatosContext from './AdminGatosContext'
import AdminGatosReducer from './AdminGatosReducer'
import clienteAxios from '../../config/axios'
const AdminGatosState = props => {
    // A. ESTADO INICIAL
    const initialState = {
        gatos: [],
        gato: null,
        editando: false
    }
    // B. CONFIGURACIÓN DEL REDUCER
    const [state, dispatch] = useReducer(AdminGatosReducer, initialState)
    // C. FUNCIONES PROPIAS
    const obtenerGatos = async () => {
        try {
            const resultado = await clienteAxios.get('/api/admingatos')
            console.log("El resultado es:", resultado)
            dispatch({
                type: "OBTENER_GATOS",
                payload: resultado.data.listaGatos
            })
        } catch(e){
            console.log(e)
            return
        }
    }

    const obtenerGatosUsuario = async () => {
        try {
            const resultado = await clienteAxios.get('/api/usuariogatos')
            console.log("El resultado es:", resultado)
            dispatch({
                type: "OBTENER_GATOS",
                payload: resultado.data.listaGatos
            })
        } catch(e){
            console.log(e)
            return
        }
    }

    const obtenerGato = async (id) => {
        try {
            const resultado = await clienteAxios.get(`/api/admingatos/${id}`)
            console.log("El resultado es:", resultado)
            dispatch({
                type: "OBTENER_GATO",
                payload: resultado.data.gato
            })
        } catch(e){
            console.log(e)
            return
        }
    }

    const eliminarGato = async (id) => {
        try {
            await clienteAxios.delete(`/api/admingatos/${id}`)
            console.log("Gato eliminado")
        } catch(e){
            console.log(e)
            return
        }
    }

    const actualizarGato = async (id, datosFormulario) => {
        try {
            const resultado = await clienteAxios.put(`/api/admingatos/${id}`, datosFormulario)
            console.log("El resultado es:", resultado)
            dispatch({
                type: "ACTUALIZAR_GATO",
                payload: resultado.data.gatoActualizado
            })
        } catch(e){
            console.log(e)
            return
        }
    }

    const crearGato = async (datosFormulario) => {
        try {
            const resultado = await clienteAxios.post(`/api/admingatos`, datosFormulario)
            console.log("El resultado de crear es:", resultado)
            dispatch({
                type: "CREAR_GATO",
                payload: resultado.data.gatoCreado
            })
            return resultado
        } catch(e){
            console.log(e)
            return
        }
    }
    // D. RETORNO
    return (
        <AdminGatosContext.Provider
            value={{
                gatos: state.gatos,
                obtenerGatos,
                gato: state.gato,
                obtenerGato,
                eliminarGato,
                actualizarGato,
                crearGato,
                obtenerGatosUsuario
            }}
        >
            {props.children}
        </AdminGatosContext.Provider>
    )
}
export default AdminGatosState
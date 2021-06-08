import React, { useReducer } from 'react'
import AdminGatosContext from './AdminGatosContext'
import AdminGatosReducer from './AdminGatosReducer'
import clienteAxios from '../../config/axios'
const AdminGatosState = props => {
    // A. ESTADO INICIAL
    const initialState = {
        gatos: [],
        gato: null,
        eliminado: false
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
            const resultado = await clienteAxios.delete(`/api/admingatos/${id}`)
            console.log("Gato eliminado")
            // dispatch({
            //     type: "ELIMINAR_GATO"
            // })
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
                eliminarGato
            }}
        >
            {props.children}
        </AdminGatosContext.Provider>
    )
}
export default AdminGatosState
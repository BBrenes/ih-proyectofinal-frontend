import React, { useReducer } from 'react'
import AdminGatosContext from './AdminGatosContext'
import AdminGatosReducer from './AdminGatosReducer'
import clienteAxios from '../../config/axios'
const AdminGatosState = props => {
    // A. ESTADO INICIAL
    const initialState = {
        gatos: []
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
    // D. RETORNO
    return (
        <AdminGatosContext.Provider
            value={{
                gatos: state.gatos,
                obtenerGatos
            }}
        >
            {props.children}
        </AdminGatosContext.Provider>
    )
}
export default AdminGatosState
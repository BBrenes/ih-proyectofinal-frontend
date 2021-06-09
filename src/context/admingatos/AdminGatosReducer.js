export default (state, action) => {
    switch(action.type){
        case "OBTENER_GATOS":
            return {
                ...state,
                gatos: [...action.payload]
            }
            case "OBTENER_GATO":
                return {
                    ...state,
                    gato: action.payload
                }
                case "ACTUALIZAR_GATO":
                    return {
                        ...state,
                        gato: action.payload
                    }

                    case "CREAR_GATO":
                    return {
                        ...state,
                        gatos: [...state.gatos, action.payload],
                        gato: action.payload
                    }
        default:
            return state
    }
}
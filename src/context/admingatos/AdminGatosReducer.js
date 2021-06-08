export default (state, action) => {
    switch(action.type){
        case "OBTENER_GATOS":
            return {
                ...state,
                gatos: [...action.payload]
            }
        default:
            return state
    }
}
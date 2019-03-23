const initalState = {
    tempLimits: []

}

const tempReducer = (state = initalState, action) => {
    
    switch (action.type) {
        case 'ADD_SOIL_LIMITS':
           // console.log(action.payload)
           return {
               ...state,
               smUpperLimit: action.payload.smUpperLimit,
               smLowerLimit: action.payload.smLowerLimit
           }

        case 'ADD_LIGHT_LIMITS':
               // console.log(action.payload)
            return {
                ...state,
                lightUpperLimit: action.payload.lightUpperLimit,
                lightLowerLimit: action.payload.lightLowerLimit
            }       

        case 'ADD_TEMP_LIMITS':
            console.log(action.payload)
         return {
             ...state,
             tempUpperLimit: action.payload.tempUpperLimit,
             tempLowerLimit: action.payload.tempLowerLimit
         }
        

        case 'EXCEEDS_LIMITS':
            

        

        default:
            return state
    }
    
        
        
}

export default tempReducer
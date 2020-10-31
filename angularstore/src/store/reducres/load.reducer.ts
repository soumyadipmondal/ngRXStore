import { LoadActionTypes } from '../load-actions-type.enum';

interface LoadStateModel {
    isLoading: boolean
}

const init_state: LoadStateModel = {
    isLoading: false
}

export default function LoadReducer(state = init_state, action){
    switch(action.type){
      case LoadActionTypes.Start:
        return {
            isLoading: true
        }
      case LoadActionTypes.Stop:
        return {
            isLoading: false
        }
      default:
        return state // that default. return the initial state
    }
    
      
}
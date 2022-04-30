import { ACTIONS } from "./App.js"

//make sure it is a function export or else errors

export default function OperationButton({ dispatch, operation }) {
    return (
        <button 
        onClick={() => 
            dispatch({type: ACTIONS.CHOOSE_OPERATION, payload:{operation} })}
        >
        {operation}
        </button>
    )
}
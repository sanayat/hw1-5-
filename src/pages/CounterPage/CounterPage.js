import React from "react-redux";
import {useSelector,useDispatch} from "react-redux";

function counterPage() {
    const count = useSelector((state) => state);
    const dispatch = useDispatch();

    const plusOne =()=>{
        dispatch({
        type:'INCREMENT',
    })
}
const deleteOne =()=>{
        dispatch({
        type:'DECREMENT',
    })
}
const plusTen =()=>{
        dispatch({
        type:'INCREMENT_BY_TEN',
    })
}
const deleteTen =()=>{
        dispatch({
        type:'DECREMENT_BY_TEN',
    })
}
const reset =()=>{
        dispatch({
        type:'RESET',
    })
}

    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1>Redux Counter</h1>
            <h2>{count}</h2>
            <div>
                <button onClick={plusOne}>+1</button>
                <button onClick={deleteOne}>-1</button>
                <button onClick={plusTen}>+10</button>
                <button onClick={deleteTen}>-10</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}


export default counterPage;
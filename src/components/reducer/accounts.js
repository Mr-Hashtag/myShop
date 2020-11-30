import React from 'react';

const accounts=(state=null,action)=>{
    switch(action.type){
        case "FETCH_ACC":
            return {...state,[action.payload.id]:action.payload}
        default:
            return {...state}
    }
}

export default accounts;
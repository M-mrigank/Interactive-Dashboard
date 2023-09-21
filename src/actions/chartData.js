import * as api from "../api"

export const getAllData=()=>async(dispatch)=>{
    try{
        const {data}=await api.getAllData();
        dispatch({
            type:`GET_ALL_DATA`,
            payload:data,
        })
    }
    catch(error){
        console.log(error);
    }
}
const chartDataReducer=(state=[], action)=>{
    switch (action?.type){
        case `GET_ALL_DATA`:
            return action?.payload;
        default:
            return state;
    }
}

export default chartDataReducer;
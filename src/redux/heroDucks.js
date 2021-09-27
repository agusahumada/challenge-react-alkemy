import axios from 'axios';

//Consts
const dataInitial = {
    array: []
}

//Types
const GET_HEROS_SUCCESS = 'GET_HEROS_SUCCESS';

//Reducer
export default function heroReducer(state = dataInitial, action){
    switch(action.type) {
        case GET_HEROS_SUCCESS:
            return { ...state,array: action.payload}
        default:
            return state
    }
}

//actions
export const getHerosAction = (heroName) => async(dispatch, getState) => {
    try {
        const res = await axios.get(`https://www.superheroapi.com/api.php/3603195309782355/search/${heroName}`)
        dispatch({
            type: GET_HEROS_SUCCESS,
            payload: res.data.results
        })
    } catch (error) {
        return error;
    }
}


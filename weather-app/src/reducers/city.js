import {SET_CITY} from '../actions';
export const city  = (state={}, action) => {
    //Se evalua el typo de acción en las actions de tipo SET_CITY
    switch (action.type) {
        case SET_CITY:
                return action.value;
        default:
            return state;
    }
}
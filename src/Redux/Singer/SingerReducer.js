import produce from 'immer';

const SingersInitialState = {
    Singers: [],
}

export const SingerReducer = produce((state, action) => {
    debugger
    switch (action.type) {
        case 'LOAD_GET_ALL_SINGERS':
            {
                state.Singers = action.payload;
                break;
            }
        case 'UPDATE_SINGER':
            { 
                state.Singers=action.paylod; 
                break; 
            }
    }
}, SingersInitialState)
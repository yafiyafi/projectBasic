import produce from 'immer';

const JudgesInitialState = {
    Judges: [],
}

export const JudgesReducer = produce((state, action) => {
    debugger
    switch (action.type) {
        case 'LOAD_GET_ALL_JUDGES':
            {
                state.Judges = action.payload;
                break;
            }
    }
}, JudgesInitialState)
import produce from 'immer';

const PlanInitialState = {
    Plans: [],
}

export const PlanReducer = produce((state, action) => {
    debugger
    switch (action.type) {
        case 'LOAD_GET_ALL_PLANS':
            {
                state.Plans = action.payload;
                break;
            }
    }
}, PlanInitialState)
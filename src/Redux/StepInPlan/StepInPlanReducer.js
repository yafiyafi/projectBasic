import produce from 'immer';

const StepInPlanInitialState = {
    StepInPlans: []
}

export const StepInPlanReducer = produce((state, action) => {
    debugger
    switch (action.type) {
        case 'LOAD_GET_ALL_STEP_IN_PLANS':
            {
                state.StepInPlans = action.payload;
                break;
            }
    }
}, StepInPlanInitialState)
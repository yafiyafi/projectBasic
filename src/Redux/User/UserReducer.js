import produce from 'immer';

const UsersInitialState = {
    Users: [],
    CurrentUser:[]
}

export const UsersReducer = produce((state, action) => {
    debugger
    switch (action.type) {
        case 'LOAD_GET_ALL_USERS':
            {
                state.Users = action.payload;
                break;
            }
        case 'LOAD_GET_CURRENT_USER':
            {
                state.CurrentUser = action.payload;
                break;
            }
    }
}, UsersInitialState)
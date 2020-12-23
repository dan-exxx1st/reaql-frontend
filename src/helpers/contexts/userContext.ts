import { createContext, Dispatch, useReducer } from 'react';
import { User } from 'lib/graphql/types';

export const SAVE_USER = 'SAVE_USER';

export interface SaveUser {
    type: typeof SAVE_USER;
    payload: { user: User; rememberMe?: boolean };
}

export type UserReducerActions = SaveUser;

export interface IUserReducerState {
    user?: User;
}

export const UserReducer = (
    state: IUserReducerState,
    action: UserReducerActions
) => {
    switch (action.type) {
        case SAVE_USER: {
            const { user, rememberMe } = action.payload;
            rememberMe &&
                localStorage.setItem('user', JSON.stringify(action.payload));
            return {
                ...state,
                user,
            };
        }
        default:
            return state;
    }
};

export function useUserReducer(): IUserContext {
    let initialState: IUserReducerState = {};
    const userInLocalStorage = localStorage.getItem('user');
    if (userInLocalStorage) {
        const user = JSON.parse(userInLocalStorage);
        initialState = { user };
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);

    return {
        state,
        dispatch,
    };
}

interface IUserContext {
    dispatch?: Dispatch<SaveUser>;
    state?: IUserReducerState;
}

export const UserContext = createContext<IUserContext>({});
const UserContextProvider = UserContext.Provider;

export { UserContextProvider };
